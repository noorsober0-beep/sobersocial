export default function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-cream shadow-soft ring-1 ring-espresso/10">
        <span className="absolute h-10 w-10 rounded-full border-4 border-espresso/90 rotate-45" />
        <span className="absolute h-10 w-10 rounded-full border-4 border-terracotta/90 -rotate-45" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-warmbrown">Sober Social</p>
        <p className="text-xs text-warmbrown/80">Indore</p>
      </div>
    </div>
  );
}
