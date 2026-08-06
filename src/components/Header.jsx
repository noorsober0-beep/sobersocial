import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Cafes', path: '/cafes' },
  { label: 'About', path: '/about' },
  { label: 'Join', path: '/join' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-espresso/10 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo-master.png"
            alt="Sober Social Indore logo"
            className="h-10 w-auto"
          />
        </Link>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/10 bg-white/90 p-2 text-espresso transition hover:border-terracotta md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          <span className="block h-0.5 w-5 rounded-full bg-espresso transition-transform duration-200" style={{ transform: open ? 'rotate(45deg) translate(1px, 1px)' : 'none' }} />
          <span className="block h-0.5 w-5 rounded-full bg-espresso transition-opacity duration-200" style={{ opacity: open ? 0 : 1 }} />
          <span className="block h-0.5 w-5 rounded-full bg-espresso transition-transform duration-200" style={{ transform: open ? 'rotate(-45deg) translate(1px, -1px)' : 'none' }} />
        </button>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'text-terracotta' : 'transition hover:text-terracotta'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {open && (
        <div className="border-t border-espresso/10 bg-cream/95 px-6 py-5 md:hidden">
          <nav className="space-y-4 text-base font-medium text-espresso">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? 'block rounded-3xl bg-espresso/5 px-4 py-3 text-terracotta' : 'block rounded-3xl px-4 py-3 transition hover:bg-espresso/5 hover:text-terracotta'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
