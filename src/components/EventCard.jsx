import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-[1.75rem] border border-espresso/10 bg-white/95 p-6 shadow-soft"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-warmbrown/80">{event.area}</p>
          <h3 className="mt-2 text-2xl font-semibold">{event.cafe}</h3>
          <p className="mt-3 text-base leading-7 text-espresso/80">{event.description}</p>
        </div>
        <div className="rounded-full bg-cream px-4 py-2 text-sm text-espresso/80">{event.spots} spots left</div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.35em] text-espresso/70">
        {event.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-espresso/5 px-3 py-1">{tag}</span>
        ))}
      </div>
      <Link
        to="/join"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9a4024]"
      >
        I’m interested
      </Link>
    </motion.article>
  );
}
