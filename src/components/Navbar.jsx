import { useState } from 'react';
import { Menu, X, Printer } from 'lucide-react';

const NAV_LINKS = [
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#dossier-mdw', label: 'Dossier MDW' },
  { href: '#parcours', label: 'Parcours' },
];

export default function Navbar({ brandName }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#e2d7ec] bg-[#fbf8fc]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#accueil"
          className="inline-flex items-center gap-2.5 font-serif-display text-lg font-extrabold text-[#5a2a82] transition hover:opacity-85"
        >
          <img
            src="/rakiaproj/assets/logos/brand-mark.svg"
            alt=""
            className="h-9 w-9 rounded-xl shadow-xs"
          />
          <span>{brandName}</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5b5572] transition hover:text-[#5a2a82]"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#e2d7ec] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#5a2a82] transition hover:border-[#5a2a82]/40 hover:bg-[#f2ebf8]"
            title="Imprimer ou enregistrer en PDF"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>PDF</span>
          </button>
          <a
            href="#contact"
            className="rounded-full bg-[#5a2a82] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3e1b5c]"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#e2d7ec] bg-white text-[#1d1a2f] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Navigation mobile"
          className="flex flex-col gap-2 border-t border-[#e2d7ec] bg-white px-6 py-4 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#1d1a2f] transition hover:bg-[#f2ebf8] hover:text-[#5a2a82]"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-[#5a2a82] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.print();
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#e2d7ec] px-4 py-2.5 text-sm font-semibold text-[#5a2a82]"
            >
              <Printer className="h-4 w-4" />
              <span>PDF</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
