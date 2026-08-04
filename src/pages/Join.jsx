import { useState } from 'react';

export default function Join() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="mx-auto max-w-3xl px-6 pb-16 sm:px-8">
      <section className="space-y-6 pt-10">
        <p className="text-sm uppercase tracking-[0.3em] text-warmbrown">Join</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">Get notified about the next hangout.</h1>
        <p className="max-w-2xl text-base leading-8 text-espresso/80">
          Let us know a little about yourself and where you like to hang out in Indore. We’ll reach out when the next cafe meetup is ready.
        </p>
      </section>

      <section className="mt-10 rounded-[2rem] bg-white/90 p-8 shadow-soft ring-1 ring-espresso/10">
        {submitted ? (
          <div className="space-y-4 text-center">
            <p className="text-xl font-semibold text-espresso">You’re in — we’ll let you know when the next one’s happening.</p>
            <p className="text-base leading-7 text-espresso/80">Thanks for joining the community. Keep an eye out for the next invite to a cafe hangout in Indore.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block text-sm font-medium text-espresso/85">
              Name
              <input type="text" required placeholder="Your name" className="mt-2 w-full rounded-3xl border border-espresso/10 bg-cream px-4 py-3 text-espresso outline-none transition focus:border-terracotta" />
            </label>
            <label className="block text-sm font-medium text-espresso/85">
              Phone or email
              <input type="text" required placeholder="Phone or email" className="mt-2 w-full rounded-3xl border border-espresso/10 bg-cream px-4 py-3 text-espresso outline-none transition focus:border-terracotta" />
            </label>
            <label className="block text-sm font-medium text-espresso/85">
              Preferred area of Indore
              <input type="text" required placeholder="Vijay Nagar, Palasia, Rajwada..." className="mt-2 w-full rounded-3xl border border-espresso/10 bg-cream px-4 py-3 text-espresso outline-none transition focus:border-terracotta" />
            </label>
            <label className="block text-sm font-medium text-espresso/85">
              What kind of cafe hangs do you want?
              <textarea placeholder="Quiet chat, study vibes, group catch-ups..." rows="4" className="mt-2 w-full rounded-3xl border border-espresso/10 bg-cream px-4 py-3 text-espresso outline-none transition focus:border-terracotta" />
            </label>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#23120f]">
              Let me know
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
