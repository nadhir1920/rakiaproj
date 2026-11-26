import { Code2, Database, Palette } from 'lucide-react';

const SKILL_ICONS = {
  code: Code2,
  database: Database,
  palette: Palette,
};

export default function AboutAndSkills({ about, skillGroups }) {
  return (
    <>
      {/* À PROPOS */}
      <section id="apropos" className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f2547d]">
              Présentation
            </span>
            <h2 className="mt-2 font-serif-display text-3xl font-extrabold text-[#5a2a82] sm:text-4xl">
              {about.title}
            </h2>
            <p className="mt-2 max-w-2xl text-base text-[#5b5572]">{about.subtitle}</p>
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-[#1d1a2f]/90">
                  {p}
                </p>
              ))}

              <div className="grid gap-3 pt-4 sm:grid-cols-2">
                {about.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-[#e2d7ec] bg-white p-4 shadow-xs"
                  >
                    <strong className="block text-xs font-bold uppercase tracking-wider text-[#f2547d]">
                      {h.title}
                    </strong>
                    <span className="mt-1 block text-sm font-semibold text-[#1d1a2f]">
                      {h.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <figure className="mx-auto w-full max-w-md rounded-3xl border border-[#e2d7ec] bg-[#f2ebf8]/60 p-6">
              <img
                src="/rakiaproj/assets/workspace-illustration.svg"
                alt="Illustration de l'environnement de création web de Rakia Limem"
                loading="lazy"
                className="w-full"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" className="bg-[#f2ebf8] py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f2547d]">
              Savoir-faire technique
            </span>
            <h2 className="mt-2 font-serif-display text-3xl font-extrabold text-[#5a2a82] sm:text-4xl">
              Compétences
            </h2>
            <p className="mt-2 max-w-2xl text-base text-[#5b5572]">
              Une maîtrise équilibrée du front-end moderne, des APIs back-end et du design d&apos;interface.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = SKILL_ICONS[group.icon] || Code2;
              return (
                <article
                  key={group.id}
                  className="rounded-3xl border border-[#e2d7ec] bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f2ebf8] text-[#5a2a82]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif-display text-lg font-bold text-[#1d1a2f]">
                      {group.category}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-4">
                    {group.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-[#1d1a2f]">{skill.name}</span>
                          <span className="font-bold text-[#5a2a82]">{skill.level}%</span>
                        </div>
                        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[#f2ebf8]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#5a2a82] to-[#f2547d] transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
