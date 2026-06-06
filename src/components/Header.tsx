import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, profile } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#summary" className="text-base font-bold tracking-wide text-slate-950 dark:text-white">
          {profile.shortName}
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-slate-600 transition hover:text-signal dark:text-slate-300 dark:hover:text-teal-300">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-800 lg:hidden dark:border-slate-700 dark:text-slate-100"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 text-sm font-medium sm:grid-cols-3">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-signal dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-teal-300"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
