import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Code2, Layers, Network, ShieldCheck, Cpu, Users,
  ArrowRight, ArrowUpRight, Mail, Phone, MapPin, CheckCircle2,
} from 'lucide-react';

import { SpotlightCard } from './components/SpotlightCard';
import { Reveal } from './components/Reveal';
import {
  NAV_ITEMS, ROLES, QUICK_FACTS, INTERESTS, SKILLS, SKILL_FILTERS,
  TIMELINE, PROJECTS, DOSSIER_DOCUMENTS, CV_JUSTIFICATIONS,
  JOB_OFFERS, LINKEDIN_URL, GITHUB_URL,
} from './data/portfolioData';

const IconMap = { Code2, Layers, Network, ShieldCheck, Cpu, Users };

/* ── Lightbox ─────────────────────────────────────────── */
function Lightbox({ src, caption, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      className="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-modal"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-toolbar">
          <span className="lightbox-caption-text">{caption}</span>
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Fermer">×</button>
        </div>
        <img className="lightbox-img" src={src} alt={caption} />
      </motion.div>
    </motion.div>
  );
}

/* ── Typewriter ───────────────────────────────────────── */
function TypedRole({ roles }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    let timeout;
    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 42);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 22);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, roles]);

  return (
    <span className="hero-role-line" aria-label={roles[idx]}>
      {text}<span className="cursor" aria-hidden="true">|</span>
    </span>
  );
}

/* ── Header ───────────────────────────────────────────── */
function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div className="nav-inner">
          <a
            className="brand"
            href="#accueil"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="brand-mark" aria-hidden="true">RL</span>
            <div className="brand-text">
              <strong>Rakia Limem</strong>
              <small>Full Stack &amp; UI/UX · ISET</small>
            </div>
          </a>

          <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Navigation principale">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNav(id); }}
              >
                {label}
              </a>
            ))}
            <a
              className="nav-cta"
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
            >
              Contact
            </a>
          </nav>

          <button
            className="hamburger"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span style={open ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} />
            <span style={open ? { opacity: 0 } : {}} />
            <span style={open ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero noise-bg" id="accueil">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container">
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-badge">
              <span className="status-pulse" aria-hidden="true" />
              Recherche de Stage PFE 2026–2027–2027 · ISET Sidi Bouzid (MDW 3.2)
            </div>

            <h1 className="hero-name">
              Rakia Limem
              <TypedRole roles={ROLES} />
            </h1>

            <p className="hero-desc">
              Étudiante en 3ème année Licence Technologies de l&apos;Informatique (Parcours MDW).
              Je conçois des applications Full-Stack modernes (React, Angular, Laravel, Spring Boot)
              avec une forte exigence en sécurité API et en design UI/UX.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="#projets"
                onClick={(e) => { e.preventDefault(); document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Découvrir mes projets <ArrowRight size={15} />
              </a>
              <a
                className="btn btn-outline"
                href="#dossier"
                onClick={(e) => { e.preventDefault(); document.getElementById('dossier')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Dossier MDW 3.2 <ArrowUpRight size={15} />
              </a>
              <a className="btn btn-ghost" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>

            <div className="hero-tags" aria-label="Domaines clés">
              {['React.js', 'Angular 18', 'Laravel 13', 'Spring Boot 3.2', 'Figma UI/UX'].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="portrait-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="portrait-card">
              <div className="portrait-img-wrap">
                <img src="/rakiaproj/assets/rakia.jpeg" alt="Portrait professionnel de Rakia Limem" />
              </div>
              <div className="portrait-footer">
                <div>
                  <small>Statut actuel</small>
                  <strong>Licence IT (MDW 3.2) · ISET</strong>
                </div>
                <span className="pill pill-teal">Stage PFE 2026–2027</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Quick Facts ──────────────────────────────────────── */
function QuickFacts() {
  return (
    <div className="facts-bar" aria-label="Repères clés">
      <div className="container">
        <div className="facts-grid">
          {QUICK_FACTS.map((f) => (
            <Reveal key={f.index} delay={parseInt(f.index, 10) * 0.08}>
              <article className="fact-item">
                <span className="fact-index">{f.index}</span>
                <div>
                  <strong>{f.title}</strong>
                  <small>{f.detail}</small>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── About ────────────────────────────────────────────── */
function About() {
  return (
    <section className="section" id="apropos">
      <div className="container">
        <Reveal>
          <span className="kicker">01 / Profil</span>
          <h2 className="heading-lg" style={{ marginBottom: 36 }}>À propos</h2>
        </Reveal>

        <div className="about-layout">
          <Reveal delay={0.08}>
            <SpotlightCard as="div" className="about-panel">
              <div className="panel-top">
                <span className="pill">Présentation</span>
              </div>
              <p>
                Je m&apos;appelle <strong style={{ color: 'var(--ink)' }}>Rakia Limem</strong> et je suis étudiante en 3ème année de Licence en Technologies de l&apos;Informatique (parcours <strong style={{ color: 'var(--ink)' }}>Multimédia et Développement Web — MDW 3.2</strong>) à l&apos;<strong style={{ color: 'var(--ink)' }}>ISET Sidi Bouzid</strong>.
              </p>
              <p>
                Mon parcours allie théorie et pratique concrète : un stage de perfectionnement Front-End &amp; UI chez <strong style={{ color: 'var(--ink)' }}>NovaWeb Studio (Sfax)</strong> avec un score Lighthouse &gt; 92/100, un stage SI chez <strong style={{ color: 'var(--ink)' }}>Tunisie Telecom</strong>, des missions freelance et 3 projets Full-Stack complets (React, Angular, Laravel, Spring Boot).
              </p>
              <p>
                Ce portfolio documente mon évolution et rassemble l&apos;ensemble de mon <strong style={{ color: 'var(--ink)' }}>Dossier de Candidature Vivant</strong> en vue de mon Stage de Fin d&apos;Études (PFE 2026–2027).
              </p>
            </SpotlightCard>
          </Reveal>

          <div className="about-side">
            <Reveal delay={0.14}>
              <div className="vision-card">
                <span className="kicker">Vision professionnelle</span>
                <h3>Allier rigueur d&apos;architecture et sensibilité UI/UX.</h3>
                <p>Concevoir des applications web sécurisées, fluides et accessibles répondant aux besoins réels des entreprises.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="interests-card">
                <h3>Domaines d&apos;intervention</h3>
                <ul className="interest-list">
                  {INTERESTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Skills ───────────────────────────────────────────── */
function Skills() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? SKILLS : SKILLS.filter((s) => s.category === filter);

  return (
    <section
      className="section"
      id="competences"
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="container">
        <Reveal>
          <span className="kicker">02 / Savoir-faire</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Compétences &amp; domaines techniques</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Socle technique Full-Stack &amp; UI/UX développé à travers mes projets et expériences pratiques.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="skills-filter" role="group" aria-label="Filtrer par domaine">
            {SKILL_FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${filter === f.key ? 'active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div className="skills-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const Icon = IconMap[skill.icon];
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.38, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SpotlightCard as="article" className={`skill-card ${skill.featured ? 'featured' : ''}`}>
                    <div className="skill-card-top">
                      <span className="skill-icon" aria-hidden="true">
                        {Icon && <Icon size={18} strokeWidth={1.75} />}
                      </span>
                      <span className="skill-code">{skill.code}</span>
                    </div>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                    <div className="skill-tags-row">
                      {skill.tags.map((t) => (
                        <span key={t} className="skill-tag">{t}</span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Timeline ─────────────────────────────────────────── */
function Timeline() {
  return (
    <section className="section" id="parcours">
      <div className="container">
        <Reveal>
          <span className="kicker">03 / Expérience</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Parcours professionnel</h2>
          <p className="lead" style={{ marginBottom: 40 }}>
            Des stages en entreprise aux missions freelance en développement web et UI/UX.
          </p>
        </Reveal>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.1}>
              <article className="tl-item">
                <div className="tl-marker" aria-hidden="true">{item.index}</div>
                <div className="tl-card">
                  <div className="tl-meta">
                    <span className="pill">{item.type}</span>
                    <span className="tl-date">{item.period}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <h4>{item.subtitle}</h4>
                  <ul className="check-list">
                    {item.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Projects Showcase ────────────────────────────────── */
function Projects({ onLightbox }) {
  return (
    <section
      className="section"
      id="projets"
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="container">
        <Reveal>
          <span className="kicker">04 / Réalisations</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Projets Full-Stack &amp; Web</h2>
          <p className="lead" style={{ marginBottom: 36 }}>
            Mes 3 projets majeurs (Smart Booking, Car Rental, Gestion des Étudiants) accompagnés de mes réalisations UI/UX.
          </p>
        </Reveal>

        <div className="cert-grid">
          {PROJECTS.map((proj, i) => (
            <Reveal key={proj.id} delay={i * 0.06}>
              <SpotlightCard as="article" className={`cert-card ${proj.featured ? 'featured' : ''}`}>
                <div
                  className="cert-thumb"
                  role="button"
                  tabIndex={0}
                  aria-label={`Agrandir : ${proj.title}`}
                  onClick={() => onLightbox(proj.image, `${proj.title} — ${proj.stackLabel}`)}
                  onKeyDown={(e) => { if (e.key === 'Enter') onLightbox(proj.image, `${proj.title} — ${proj.stackLabel}`); }}
                >
                  <img src={proj.image} alt={proj.title} loading="lazy" />
                </div>
                <div className="cert-info" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                    <span className="cert-issuer">{proj.badge}</span>
                    <span className="pill" style={{ fontSize: '.65rem' }}>{proj.year}</span>
                  </div>
                  <h3>{proj.title}</h3>
                  <p style={{ fontSize: '.86rem', color: 'var(--ink)' }}>{proj.summary}</p>
                  <ul className="check-list" style={{ marginTop: 4 }}>
                    {proj.highlights.map((h) => (
                      <li key={h} style={{ fontSize: '.8rem' }}>{h}</li>
                    ))}
                  </ul>
                  <div className="skill-tags-row" style={{ marginTop: 4 }}>
                    {proj.tags.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                  <a
                    className="doc-link"
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 'auto', paddingTop: 8 }}
                  >
                    Code source GitHub <ArrowUpRight size={13} />
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Dossier Professionnel MDW 3.2 ────────────────────── */
function Dossier() {
  const [selectedDoc, setSelectedDoc] = useState(null);


  return (
    <section
      className="section"
      id="dossier"
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="container">
        <Reveal>
          <span className="kicker">05 / Dossier de candidature · MDW 3.2</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Dossier MDW — 4 livrables</h2>
          <p className="lead" style={{ marginBottom: 36 }}>
            Les 3 rapports PDF sont disponibles ici en téléchargement direct. Les livrables et leurs preuves sont présentés plus bas dans cette section.
          </p>
          <div className="report-downloads" aria-label="Téléchargement des trois rapports du dossier MDW" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 30 }}>
            {[
              { title: 'Rapport de diagnostic personnel', file: '/rakiaproj/assets/reports/rapport-diagnostic-personnel.pdf', detail: 'Livrable 1 · compétences, SWOT, métier cible, recul critique IA' },
              { title: 'Rapport de veille professionnelle', file: '/rakiaproj/assets/reports/rapport-veille-professionnelle.pdf', detail: 'Livrable 3 · annonces, compétences recherchées, synthèse' },
              { title: 'Comparaison CV & lettre', file: '/rakiaproj/assets/reports/rapport-comparaison-cv-lettre.pdf', detail: 'Livrable 2 · versions initiales, améliorations et justifications' },
            ].map((r) => (
              <a key={r.file} href={r.file} download className="report-download-card" style={{ display: 'block', padding: 16, border: '1px solid var(--border)', borderRadius: 14, background: 'var(--surface)', textDecoration: 'none' }}>
                <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: 6 }}>{r.title}</strong>
                <span style={{ display: 'block', color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.5 }}>{r.detail}</span>
                <span style={{ display: 'inline-flex', gap: 5, alignItems: 'center', marginTop: 10, color: 'var(--accent-2)', fontWeight: 700, fontSize: '.8rem' }}>Télécharger le rapport PDF <ArrowUpRight size={13} /></span>
              </a>
            ))}
          </div>
          <p style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: 24 }}>
            Rapports de synthèse à relire et valider par Rakia avant remise. Les éléments personnels doivent être appuyés par ses propres preuves.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="dossier-intro">
            <div className="dossier-monogram" aria-hidden="true">RL</div>
            <div>
              <span className="dossier-role-label">Objectif professionnel ciblé · Stage PFE 2026–2027</span>
              <p>
                <strong style={{ color: 'var(--ink)' }}>Développeuse Web Full Stack &amp; UI/UX</strong> — Concevoir des applications React/Angular connectées à des APIs Laravel/Spring Boot sécurisées et évoluer au sein d&apos;une équipe d&apos;ingénierie.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Livrable 1 — Diagnostic */}
        <Reveal delay={0.04}>
          <div className="deliverable-block" id="diagnostic">
            <div className="del-heading">
              <span className="del-num">01</span>
              <div>
                <span className="kicker">Livrable 1 · Semaines 2–3</span>
                <h3>Diagnostic personnel &amp; note de synthèse critique</h3>
              </div>
            </div>
            <p className="del-lead">
              Bilan structuré de mes compétences techniques, de mes expériences vérifiables et de mon recul critique face à l&apos;IA.
            </p>
            <div className="del-cards">
              {[
                {
                  h: 'Compétences & réalisations',
                  p: '3 stacks Full-Stack complètes (React+Spring Boot, React+Laravel, Angular+PHP), stage NovaWeb Studio (Lighthouse > 92/100) et Tunisie Telecom.',
                },
                {
                  h: 'Positionnement cible',
                  p: 'Poste de Développeuse Web Full Stack & UI/UX (Stage PFE), en continuité directe avec mon parcours MDW à l’ISET Sidi Bouzid.',
                },
                {
                  h: 'Recul critique sur l’IA',
                  p: 'L’IA proposait un profil générique « Développeuse Junior ». J’ai recentré le diagnostic sur mes preuves sécurité (JWT, Sanctum, Stripe, WebSocket).',
                },
              ].map((c) => (
                <SpotlightCard key={c.h} as="article" className="del-card">
                  <h4>{c.h}</h4>
                  <p>{c.p}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Livrable 2 — CV & Lettre (4 cartes comme potfeio-react) */}
        <Reveal delay={0.04}>
          <div className="deliverable-block" id="documents">
            <div className="del-heading">
              <span className="del-num">02</span>
              <div>
                <span className="kicker">Livrable 2 · Semaines 5–6</span>
                <h3>CV &amp; lettre de motivation</h3>
              </div>
            </div>
            <p className="del-lead">
              Traçabilité de l&apos;amélioration des documents de candidature, de l&apos;ébauche initiale IA aux versions finalisées et personnalisées.
            </p>

            <div className="doc-grid">
              {DOSSIER_DOCUMENTS.map((d) => (
                <SpotlightCard key={d.id} as="article" className={`doc-card ${d.featured ? 'featured' : ''}`}>
                  <div className="doc-topline">
                    <span className="doc-type">{d.type}</span>
                    <span className={`doc-badge ${d.featured ? 'featured' : 'muted'}`}>{d.badge}</span>
                  </div>
                  <h4>{d.title}</h4>
                  <p>{d.description}</p>
                  <button className="doc-link-btn" onClick={() => setSelectedDoc(d)}>
                    {d.linkLabel} <ArrowUpRight size={13} />
                  </button>
                </SpotlightCard>
              ))}
            </div>

            <div className="doc-explanation" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 12 }}>
              <strong>Comparaison &amp; justification des modifications apportées :</strong>
              {CV_JUSTIFICATIONS.map((j) => (
                <div key={j.change} style={{ borderTop: '1px solid var(--border)', paddingTop: 10 }}>
                  <p style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '.86rem' }}>{j.change}</p>
                  <p style={{ fontSize: '.83rem' }}>{j.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Livrable 3 — Veille */}
        <Reveal delay={0.04}>
          <div className="deliverable-block" id="veille">
            <div className="del-heading">
              <span className="del-num">03</span>
              <div>
                <span className="kicker">Livrable 3 · Semaines 9–10</span>
                <h3>Veille professionnelle</h3>
              </div>
            </div>
            <p className="del-lead">
              Analyse comparative d&apos;offres réelles sur le marché tunisien afin d&apos;aligner mes compétences sur les attentes des recruteurs.
            </p>
            <div className="offer-grid">
              {JOB_OFFERS.map((o) => (
                <SpotlightCard key={o.title} as="article" className="offer-card">
                  <img className="offer-evidence-img" src={o.evidenceImage} alt={`Fiche synthèse de veille pour ${o.title}; reconstitution et non capture originale`} loading="lazy" />
                  <div className="offer-meta">
                    <span>{o.location}</span>
                    <span className="date">{o.date}</span>
                  </div>
                  <h4>{o.title}</h4>
                  <p><strong>{o.company}</strong> · {o.details}</p>
                  <div className="offer-tags">
                    {o.tags.map((t) => <span key={t} className="offer-tag">{t}</span>)}
                  </div>
                  <p className="offer-match">
                    <CheckCircle2 size={13} style={{ display: 'inline', marginRight: 5 }} />
                    {o.match}
                  </p>
                  <a className="offer-source" href={o.url} target="_blank" rel="noopener noreferrer">{o.sourceLabel} <ArrowUpRight size={13} /></a>
                </SpotlightCard>
              ))}
            </div>
            <div className="analysis-panel">
              <h4>Synthèse de la veille marché</h4>
              <p>
                Les annonces consultées le 25 novembre 2026 font ressortir les APIs, les frameworks front/back, SQL, Git et les tests. Je compare ces attentes avec mes projets et identifie les tests automatisés et la CI/CD comme pistes de progression.
              </p>
            </div>
            <div className="evidence-note">
              <strong>À propos des preuves visuelles :</strong> les images ci-dessus sont des fiches de synthèse reconstituées à partir des annonces consultées; ce ne sont pas des captures originales des sites. Les liens ouvrent les sources. Pour remettre une preuve authentique, remplace ces fiches par des captures prises directement sur les pages originales.
            </div>
          </div>
        </Reveal>

        {/* Livrable 4 — Entretien & Auto-évaluation */}
        <Reveal delay={0.04}>
          <div className="deliverable-block" id="entretien">
            <div className="del-heading">
              <span className="del-num">04</span>
              <div>
                <span className="kicker">Livrable 4 · Fin de semestre</span>
                <h3>Simulation d&apos;entretien &amp; grille d&apos;auto-évaluation (100 pts)</h3>
              </div>
            </div>
            <div className="interview-layout">
              <div className="interview-media interview-video-card">
                <p className="interview-video-description">Entraînement à une simulation d&apos;entretien pour un poste de développeuse Full Stack.</p>
                <a className="video-link" href="https://youtu.be/UDU8PSKz3Lk?si=Ql9MIRM8LQxv67pN" target="_blank" rel="noopener noreferrer">
                  <span className="video-play" aria-hidden="true">▶</span>
                  <span className="video-link-copy"><strong>Full Stack Developer Interview</strong><span>Visionner la simulation sur YouTube <ArrowUpRight size={13} /></span></span>
                </a>
                <p className="video-resource-note">Vidéo de préparation / entraînement — à distinguer de la simulation personnelle filmée à remettre en fin de semestre.</p>
              </div>

              <div className="evaluation-card">
                <h4>Grille d&apos;auto-évaluation</h4>
                <ul className="eval-list">
                  <li>Présentation personnelle claire et structurée</li>
                  <li>Restitution précise des stages et des réalisations</li>
                  <li>Pertinence et rigueur des réponses techniques</li>
                  <li>Communication, écoute active et posture professionnelle</li>
                  <li>Identification des axes d&apos;amélioration</li>
                </ul>
                <p className="fine-print">Évaluation à compléter après visionnage de ma propre simulation, selon la grille collective de référence.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Modal Document CV / Lettre */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div
              className="lightbox-modal document-modal"
              style={{ maxWidth: 980, width: '100%' }}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-toolbar">
                <span className="lightbox-caption-text">
                  {selectedDoc.type} — {selectedDoc.title}
                </span>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <button
                    className="btn btn-primary"
                    style={{ padding: '6px 14px', fontSize: '.76rem' }}
                    onClick={() => window.print()}
                  >
                    Imprimer / PDF
                  </button>
                  <button
                    className="lightbox-close-btn"
                    onClick={() => setSelectedDoc(null)}
                    aria-label="Fermer"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div id="document-print-area" className="document-preview-wrap">
                <DocumentContent document={selectedDoc} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Closing & Contact ────────────────────────────────── */
function Closing() {
  return (
    <section className="closing noise-bg" id="contact">
      <div className="container">
        <div className="closing-inner">
          <Reveal>
            <div className="closing-main">
              <span className="kicker">06 / Perspective &amp; Contact</span>
              <h2 className="heading-xl">
                Construire, innover<br />
                <span style={{ color: 'var(--teal)' }}>et collaborer.</span>
              </h2>
              <p className="closing-text">
                À la recherche d&apos;un Stage de Fin d&apos;Études (PFE) pour l&apos;année universitaire 2026–2027 en Développement Full-Stack (React, Angular, Laravel, Spring Boot) ou UI/UX Design.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24, fontSize: '.9rem', color: 'var(--ink)' }}>
                <a href="mailto:rakiyalimem@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Mail size={15} color="var(--accent-2)" /> rakiyalimem@gmail.com
                </a>
                <a href="tel:+21623677762" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Phone size={15} color="var(--teal)" /> +216 23 677 762
                </a>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <MapPin size={15} color="var(--gold)" /> Sidi Bouzid · Mobilité Sfax &amp; Tunis
                </span>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  Profil LinkedIn <ArrowUpRight size={14} />
                </a>
                <a className="btn btn-outline" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight size={14} />
                </a>
                <button className="btn btn-ghost" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Haut de page ↑
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="linkedin-card">
              <div className="linkedin-qr" style={{ display: 'grid', placeItems: 'center', background: '#f1f5f9', borderRadius: 14, padding: 18 }}>
                <img src="/rakiaproj/assets/rakia.jpeg" alt="Rakia Limem" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} />
              </div>
              <div className="linkedin-info">
                <span className="linkedin-label">Réseau professionnel</span>
                <h3>LinkedIn</h3>
                <a
                  className="linkedin-link"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accéder au profil ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <a
            className="brand"
            href="#accueil"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="brand-mark" aria-hidden="true" style={{ width: 32, height: 32, fontSize: '.76rem' }}>RL</span>
            <div className="brand-text">
              <strong>Rakia Limem</strong>
              <small>Portfolio professionnel</small>
            </div>
          </a>
          <p>Licence Technologies de l&apos;Informatique (MDW 3.2) · ISET Sidi Bouzid</p>
          <p>© {new Date().getFullYear()} Rakia Limem</p>
        </div>
      </div>
    </footer>
  );
}

/* ── Styled document preview (CV + motivation letters) ── */
function DocumentContent({ document: doc }) {
  const lines = doc.content.split('\n').map((line) => line.trim());
  const isCv = doc.id.startsWith('cv-');
  const isInitial = doc.id.endsWith('initial');

  if (isCv) {
    const nameLine = lines[0] || 'RAKIA LIMEM';
    const [name, role = ''] = nameLine.split('—').map((part) => part.trim());
    const contacts = lines.slice(1, 3).filter(Boolean);
    const rest = lines.slice(3);
    const sections = [];
    let current = null;
    rest.forEach((line) => {
      if (!line) return;
      if (line.endsWith(':') && line === line.toUpperCase()) {
        current = { title: line.replace(/\s*:/, ''), items: [] };
        sections.push(current);
      } else if (current) current.items.push(line);
      else if (line) {
        current = { title: 'INFORMATIONS', items: [line] };
        sections.push(current);
      }
    });
    return (
      <article className={`resume-sheet ${isInitial ? 'resume-draft' : 'resume-final'}`}>
        <header className="resume-head">
          <div className="resume-head-mark">RL</div>
          <div className="resume-head-main">
            <h1>{name}</h1>
            <p className="resume-role">{role}</p>
            <div className="resume-contact-list">
              {contacts.map((line, i) => <p key={i}>{line}</p>)}
            </div>
          </div>
          <span className="resume-version-tag">{isInitial ? 'ÉBAUCHE IA' : 'CV PROFESSIONNEL'}</span>
        </header>
        <div className="resume-content">
          {sections.map((section, idx) => {
            const profile = /PROFIL/.test(section.title);
            return (
              <section className={`resume-section ${profile ? 'resume-profile' : ''}`} key={`${section.title}-${idx}`}>
                <h2><span className="resume-section-index">{String(idx + 1).padStart(2, '0')}</span>{section.title}</h2>
                <div className="resume-section-body">
                  {section.items.map((item, itemIndex) => {
                    const bullet = item.startsWith('•');
                    const text = bullet ? item.slice(1).trim() : item;
                    const colon = text.indexOf(':');
                    const hasLabel = bullet && colon > 0 && colon < 46;
                    return bullet ? (
                      <div className={`resume-item ${/PROJETS|EXPÉRIENCES/.test(section.title) ? 'resume-item-feature' : ''}`} key={itemIndex}>
                        <span className="resume-bullet" />
                        <p>{hasLabel ? <><strong className="resume-item-label">{text.slice(0, colon + 1)}</strong>{text.slice(colon + 1)}</> : text}</p>
                      </div>
                    ) : <p className="resume-paragraph" key={itemIndex}>{item}</p>;
                  })}
                </div>
              </section>
            );
          })}
        </div>
        <footer className="resume-footer"><span>Rakia Limem · Candidature Stage PFE</span><span>Portfolio professionnel</span></footer>
      </article>
    );
  }

  const paragraphs = [];
  lines.forEach((line) => {
    if (!line) return;
    if (line.startsWith('Objet :')) paragraphs.push({ type: 'subject', text: line });
    else if (line === 'Madame, Monsieur,') paragraphs.push({ type: 'salutation', text: line });
    else if (line.startsWith('Rakia Limem')) paragraphs.push({ type: 'signature', text: line });
    else paragraphs.push({ type: 'paragraph', text: line });
  });
  return (
    <article className={`letter-sheet ${isInitial ? 'letter-draft' : 'letter-final'}`}>
      <header className="letter-sheet-header">
        <div className="letter-brand-mark">RL</div>
        <div><h1>Rakia Limem</h1><p>Développement Full-Stack · UI/UX</p></div>
        <div className="letter-contact-block">
          <span>rakiyalimem@gmail.com</span><span>+216 23 677 762</span><span>Sidi Bouzid · Tunisie</span>
        </div>
      </header>
      <div className="letter-rule" />
      {isInitial && <div className="letter-draft-label">VERSION INITIALE · RÉDACTION IA</div>}
      <div className="letter-body">
        {paragraphs.map((item, i) => {
          if (item.type === 'subject') return <div className="letter-subject-box" key={i}><span>OBJET</span><strong>{item.text.replace(/^Objet\s*:\s*/, '')}</strong></div>;
          if (item.type === 'salutation') return <p className="letter-salutation" key={i}>{item.text}</p>;
          if (item.type === 'signature') return <div className="letter-signature-block" key={i}><p>Bien cordialement,</p><strong>{item.text}</strong></div>;
          return <p className="letter-paragraph" key={i}>{item.text}</p>;
        })}
      </div>
      <footer className="letter-footer"><span>Lettre de motivation</span><span>Rakia Limem</span></footer>
    </article>
  );
}

/* ── App Root ─────────────────────────────────────────── */
export default function App() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((src, caption) => setLightbox({ src, caption }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu principal</a>
      <Header />
      <main id="contenu">
        <Hero />
        <QuickFacts />
        <About />
        <Skills />
        <Timeline />
        <Projects onLightbox={openLightbox} />
        <Dossier />
        <Closing />
      </main>
      <Footer />

      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox.src} caption={lightbox.caption} onClose={closeLightbox} />
        )}
      </AnimatePresence>

      <style>{`
        .cursor {
          display: inline-block;
          width: 2px;
          margin-left: 2px;
          background: var(--accent-2);
          animation: blink .9s step-end infinite;
          vertical-align: baseline;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero-role-line { min-height: 1.3em; display: block; }
      `}</style>
    </>
  );
}
