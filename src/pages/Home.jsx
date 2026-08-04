import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { events } from '../data/events';
import { cafes } from '../data/cafes';

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 sm:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm text-espresso shadow-soft ring-1 ring-espresso/10">
            <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
            A warm community for cafe company across Indore
          </div>
          <div className="space-y-5">
            <p className="text-lg uppercase tracking-[0.3em] text-warmbrown">Your Kind of Social</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">A gentle way to find company at cafes, without dating apps or nightlife.</h1>
            <p className="max-w-2xl text-base leading-8 text-espresso/80 sm:text-lg">
              Meet people who want the same easy, daylight kind of hangout. For anyone who likes cafe culture, quiet confidence, and already belongs at the table.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/events" className="inline-flex max-w-max items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9a4024]">
              See upcoming events
            </Link>
            <Link to="/join" className="inline-flex max-w-max items-center justify-center rounded-full border border-espresso/20 bg-white/90 px-6 py-3 text-sm font-semibold text-espresso transition hover:border-terracotta hover:text-terracotta">
              Join the community
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative overflow-hidden rounded-[2rem] bg-white/90 p-6 shadow-soft ring-1 ring-espresso/10 sm:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-terracotta/10 to-transparent" />
          <div className="flex min-h-[360px] flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="h-56 rounded-[1.75rem] bg-espresso/5" />
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-warmbrown/80">Next meetup</p>
                <h2 className="text-2xl font-semibold">Sunday coffee circle at Leaf & Latte</h2>
                <p className="text-base leading-7 text-espresso/75">Bring a book, bring a friend, or just bring yourself. This is for people who want to be around conversation, not noise.</p>
              </div>
            </div>
            <div className="grid gap-3 rounded-3xl bg-cream p-5 text-sm text-espresso/90">
              <div className="flex items-center justify-between">
                <span>Vibe</span>
                <span className="rounded-full bg-terracotta/10 px-3 py-1 text-terracotta">Daylight chat</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Area</span>
                <span className="text-espresso/70">Palasia</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Spots</span>
                <span className="text-espresso/70">4 left</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-20 rounded-[2rem] bg-white/90 p-8 shadow-soft ring-1 ring-espresso/10" id="why">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-warmbrown">Why this exists</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A place for people who want to be with others without the app noise.</h2>
          </div>
          <p className="text-base leading-8 text-espresso/80">
            It started from one simple feeling: sitting at a cafe and wishing someone else was there. Sober Social Indore is for young adults who love cafe culture and want the comfort of company, without needing a match or a plan that feels forced.
          </p>
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-3" id="cafes-preview">
        <div className="rounded-[2rem] bg-white/90 p-8 shadow-soft ring-1 ring-espresso/10">
          <p className="text-sm uppercase tracking-[0.3em] text-warmbrown">Partner cafes</p>
          <h2 className="mt-4 text-3xl font-semibold">Spots around Indore that welcome the quiet, the chat, and the daylight scene.</h2>
          <p className="mt-4 text-base leading-7 text-espresso/80">
            Browse by vibe or neighborhood, and find cafes that feel like a natural place to meet instead of a venue to impress.
          </p>
        </div>
        {cafes.slice(0, 3).map((cafe) => (
          <div key={cafe.id} className="rounded-[2rem] bg-cream p-6 shadow-soft ring-1 ring-espresso/10">
            <p className="text-sm uppercase tracking-[0.35em] text-warmbrown/80">{cafe.area}</p>
            <h3 className="mt-3 text-2xl font-semibold">{cafe.name}</h3>
            <p className="mt-3 text-base leading-7 text-espresso/75">{cafe.vibe} spot for easy company and slow conversation.</p>
          </div>
        ))}
      </section>
    </main>
  );
}
