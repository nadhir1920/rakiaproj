import { MapPin, ArrowRight, FileCheck2, Printer } from 'lucide-react';

export default function Hero({ profile }) {
  return (
    <section id="accueil" className="relative overflow-hidden py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/rakiaproj/assets/hero-bg.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fbf8fc]/70 via-[#fbf8fc]/55 to-[#fbf8fc]"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.85fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#e2d7ec] bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#1d1a2f] shadow-sm sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
            <span>{profile.availability}</span>
          </div>

          <p className="text-base font-bold tracking-wide text-[#f2547d]">{profile.greeting}</p>
          <h1 className="mt-2 font-serif-display text-5xl font-extrabold leading-[0.96] tracking-tight text-[#1d1a2f] sm:text-7xl">
            {profile.firstName}
            <br />
            <span className="text-[#5a2a82]">{profile.lastName}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5b5572] sm:text-lg">
            {profile.role}
          </p>

          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#5b5572]">
            <MapPin className="h-4 w-4 text-[#f2547d]" />
            <span>{profile.location}</span>
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-full bg-[#5a2a82] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#5a2a82]/20 transition hover:-translate-y-0.5 hover:bg-[#3e1b5c]"
            >
              <span>{profile.primaryCta}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#dossier-mdw"
              className="inline-flex items-center gap-2 rounded-full border border-[#5a2a82]/30 bg-white/90 px-6 py-3 text-sm font-semibold text-[#5a2a82] transition hover:-translate-y-0.5 hover:border-[#5a2a82] hover:bg-[#f2ebf8]"
            >
              <FileCheck2 className="h-4 w-4 text-[#f2547d]" />
              <span>{profile.secondaryCta}</span>
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="no-print inline-flex items-center gap-2 rounded-full border border-[#e2d7ec] bg-white/80 px-5 py-3 text-sm font-semibold text-[#1d1a2f] transition hover:bg-white"
            >
              <Printer className="h-4 w-4 text-[#5a2a82]" />
              <span>Imprimer / PDF</span>
            </button>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl border border-[#e2d7ec] bg-white/85 p-3.5 shadow-xs backdrop-blur-xs"
              >
                <strong className="block font-serif-display text-2xl font-extrabold text-[#5a2a82]">
                  {stat.value}
                </strong>
                <span className="mt-0.5 block text-xs font-medium text-[#5b5572]">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl shadow-[#5a2a82]/15">
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              className="aspect-[4/4.6] w-full object-cover"
            />
          </div>
          <figcaption className="animate-float-slow absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-[#e2d7ec] bg-white px-4 py-2 text-xs font-semibold text-[#1d1a2f] shadow-lg">
            <span className="h-2 w-2 rounded-full bg-[#f2547d]" />
            <span>Parcours MDW 3.2 · Promotion 2026</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
