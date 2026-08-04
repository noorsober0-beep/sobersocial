import { motion } from 'framer-motion';

export default function CafeCard({ cafe }) {
  return (
    <motion.div whileHover={{ y: -3 }} className="rounded-[2rem] bg-white/90 shadow-soft ring-1 ring-espresso/10">
      <div className="h-52 overflow-hidden rounded-[1.75rem] bg-espresso/5">
        <div className="flex h-full items-end p-4">
          <div className="rounded-3xl bg-white/90 px-3 py-2 text-xs uppercase tracking-[0.35em] text-espresso/80">
            Photo placeholder
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-warmbrown/80">{cafe.area}</p>
        <h3 className="mt-3 text-2xl font-semibold">{cafe.name}</h3>
        <p className="mt-3 text-base leading-7 text-espresso/75">{cafe.vibe} spot for easy company and slow conversation.</p>
      </div>
    </motion.div>
  );
}
