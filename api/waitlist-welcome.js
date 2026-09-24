const FROM = 'Sober Social <hello@sobersocial.in>';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function welcomeHtml(email) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>You're on the list</title>
</head>
<body style="margin:0;padding:0;background-color:#0f1412;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0f1412" style="background-color:#0f1412;">
<tr>
<td align="center" style="padding:40px 16px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:#1a221f;border-radius:16px;">
<tr>
<td style="padding:36px 32px 12px;">
<p style="margin:0;font-family:Georgia,serif;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#c4a574;">Sober Social</p>
</td>
</tr>
<tr>
<td style="padding:8px 32px 16px;">
<h1 style="margin:0;font-family:Georgia,serif;font-size:28px;font-weight:normal;color:#f2efe8;line-height:1.3;">You're on the early list.</h1>
</td>
</tr>
<tr>
<td style="padding:0 32px 16px;">
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#c8c2b8;line-height:1.6;">Thanks for joining Sober Social. We're building a calmer way to meet — clear minds, real chemistry.</p>
</td>
</tr>
<tr>
<td style="padding:0 32px 16px;">
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#c8c2b8;line-height:1.6;">We'll email <strong style="color:#f2efe8;font-weight:normal;">${email}</strong> when early access opens. No spam, just the invite.</p>
</td>
</tr>
<tr>
<td style="padding:8px 32px 36px;">
<a href="https://sobersocial.in" style="display:inline-block;padding:12px 22px;background-color:#2d6a5a;color:#f2efe8;font-family:Arial,Helvetica,sans-serif;font-size:14px;text-decoration:none;border-radius:999px;">Visit sobersocial.in</a>
</td>
</tr>
</table>
<p style="margin:0;padding-top:20px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6560;">Sober Social · Early Access</p>
</td>
</tr>
</table>
</body>
</html>`;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing RESEND_API_KEY' });
  }

  let email = '';
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    email = String(body.email || '').trim().toLowerCase();
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const text =
    `You're on the early list.\n\n` +
    `Thanks for joining Sober Social. We're building a calmer way to meet — clear minds, real chemistry.\n\n` +
    `We'll email ${email} when early access opens. No spam, just the invite.\n\n` +
    `https://sobersocial.in\n\n— Sober Social`;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [email],
      subject: "You're on the Sober Social early list",
      html: welcomeHtml(email),
      text,
    }),
  });

  const payload = await r.json().catch(() => ({}));
  if (!r.ok) {
    return res.status(502).json({ error: 'Resend failed', details: payload });
  }

  return res.status(200).json({ ok: true, id: payload.id || null });
};
