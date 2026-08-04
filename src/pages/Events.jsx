import EventCard from '../components/EventCard';
import { events } from '../data/events';

export default function Events() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 sm:px-8">
      <section className="space-y-6 pt-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-warmbrown">Events</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Upcoming cafe meetups around Indore</h1>
          <p className="text-base leading-8 text-espresso/80">
            Find easygoing gatherings at partner cafes. Come if you want company, conversation, and a daylight hangout without the app noise.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </main>
  );
}
