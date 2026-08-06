import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-cream text-espresso">
      <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-terracotta/12 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-14 h-80 w-80 -translate-x-1/2 rounded-full bg-espresso/8 blur-3xl" />
      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20 text-center sm:px-8">
        <div className="mx-auto mb-12 flex h-[120px] w-[120px] items-center justify-center rounded-full border border-espresso/10 bg-white/90 shadow-soft">
          <div className="relative flex h-full w-full items-center justify-center px-4 py-3">
            <motion.img
              src="/logo-master.png"
              alt="Sober Social Indore logo"
              className={`absolute h-[100px] w-auto object-contain ${logoLoaded && !logoError ? 'block' : 'hidden'}`}
              onLoad={() => setLogoLoaded(true)}
              onError={() => setLogoError(true)}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            {!logoLoaded || logoError ? (
              <span className="text-xs uppercase tracking-[0.35em] text-espresso/40">
                Logo placeholder
              </span>
            ) : null}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-sm uppercase tracking-[0.45em] text-warmbrown"
        >
          Your Kind of Social
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="mx-auto mt-8 max-w-3xl text-5xl font-serif font-semibold leading-[1.02] tracking-[-0.03em] text-espresso sm:text-6xl"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-espresso/80 sm:text-lg"
        >
          Something new is brewing in Indore.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="mx-auto mt-4 max-w-2xl text-sm font-medium uppercase tracking-[0.35em] text-espresso/60"
        >
          your kind of social
        </motion.p>

        <div className="mx-auto mt-12 w-full max-w-xl rounded-[2rem] border border-espresso/10 bg-white/90 p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.35em] text-warmbrown">
            Stay in the loop
          </p>
          <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              required
              className="w-full rounded-full border border-espresso/10 bg-cream/70 px-5 py-4 text-base text-espresso outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
            />
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center rounded-full bg-terracotta px-6 text-sm font-semibold text-white transition duration-300 ease-out hover:scale-[1.03] hover:bg-[#9a4024] hover:shadow-soft"
            >
              Notify me when we launch
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-sm text-espresso/80" role="status">
              You're on the list — see you soon.
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-espresso/70 sm:flex-row">
          <span>Follow us</span>
          <a
            href="https://instagram.com/sobersocialofficial"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-espresso/10 bg-white/90 px-4 py-3 text-espresso transition hover:border-terracotta hover:text-terracotta"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current text-terracotta">
              <path d="M12 7.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.4-8.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm2.3 1.3c-.1-2.2-.6-3.8-1.9-5.1C16.6 2 14.9 1.5 12 1.5s-4.6.5-6 1.4c-1.3 1.3-1.8 2.9-1.9 5.1-.1 1.7-.1 2.2-.1 5.1s0 3.4.1 5.1c.1 2.2.6 3.8 1.9 5.1 1.4.9 3 .4 6 .4s4.6.5 6-1.4c1.3-1.3 1.8-2.9 1.9-5.1.1-1.7.1-2.2.1-5.1s0-3.4-.1-5.1Zm-2.3 9.1a2.4 2.4 0 0 1-1.4 1.4c-1 .4-3.4.3-4.7.3s-3.7.1-4.7-.3a2.4 2.4 0 0 1-1.4-1.4c-.4-1-.3-3.4-.3-4.7s-.1-3.7.3-4.7a2.4 2.4 0 0 1 1.4-1.4c1-.4 3.4-.3 4.7-.3s3.7-.1 4.7.3a2.4 2.4 0 0 1 1.4 1.4c.4 1 .3 3.4.3 4.7s.1 3.7-.3 4.7Z" />
            </svg>
            @sobersocialofficial
          </a>
        </div>
      </div>
    </main>
  );
}
