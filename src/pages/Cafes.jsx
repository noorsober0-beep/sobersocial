import CafeCard from '../components/CafeCard';
import { cafes } from '../data/cafes';

export default function Cafes() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 sm:px-8">
      <section className="space-y-6 pt-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-warmbrown">Cafés</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Partner cafes across Indore</h1>
          <p className="text-base leading-8 text-espresso/80">
            A simple directory of cafes that feel comfortable for solo visits, group hangs, and easy conversation.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cafes.map((cafe) => (
          <CafeCard key={cafe.id} cafe={cafe} />
        ))}
      </section>
    </main>
  );
}
