import { profile } from './data/profile.js';
import SectionHeading from './components/SectionHeading.jsx';
import TagList from './components/TagList.jsx';
import TimelineItem from './components/TimelineItem.jsx';

function ContactLink({ href, children, label }) {
  if (!href) return null;
  return <a href={href} aria-label={label}>{children}<span aria-hidden="true">↗</span></a>;
}

function Header() {
  return (
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="Kembali ke halaman utama">HO<span>.</span></a>
      <nav aria-label="Navigasi utama">
        <a href="#tentang">Tentang</a>
        <a href="#pengalaman">Pengalaman</a>
        <a href="#pendidikan">Pendidikan</a>
      </nav>
      <a className="header-contact" href="#kontak">Mari terhubung <span>↗</span></a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="availability"><span /> PROFIL PROFESIONAL</p>
        <p className="hero-intro">Halo, saya</p>
        <h1>{profile.name.split(' ').slice(0, -1).join(' ')}<br /><span>{profile.name.split(' ').at(-1)}</span></h1>
        <p className="hero-role">{profile.role}{profile.location && <> <span>·</span> {profile.location}</>}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button button-dark" href={profile.resumePath} download>Unduh CV <span>↓</span></a>
          <a className="text-link" href="#tentang">Lihat profil <span>↓</span></a>
        </div>
      </div>
      <div className="hero-art" aria-label="Inisial Hanifan Octoza Al F.">
        <div className="art-ring ring-one" /><div className="art-ring ring-two" />
        <div className="art-card"><span className="art-label">PORTOFOLIO<br />&amp; KURIKULUM VITAE</span><span className="art-initials">{profile.initials}</span><span className="art-index">INDONESIA · 2026</span></div>
        <span className="art-star">✳</span>
      </div>
      <span className="hero-index">01 / PROFIL</span>
    </section>
  );
}

function About() {
  return (
    <section className="content-section about-section" id="tentang">
      <SectionHeading number="01" eyebrow="KENALI SAYA" title="Tentang saya" />
      <div className="about-content">
        <p className="about-statement">Rasa ingin tahu adalah awal dari setiap <em>kemajuan.</em></p>
        <div className="about-details">
          <p className="body-copy">{profile.summary}</p>
          {profile.strengths.length > 0 && <><h3>Area kekuatan</h3><TagList items={profile.strengths} /></>}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ id, number, eyebrow, title, items, emptyLabel }) {
  return (
    <section className="content-section timeline-section" id={id}>
      <SectionHeading number={number} eyebrow={eyebrow} title={title} />
      <div className="timeline-content">
        {items.length ? items.map((item) => <TimelineItem key={`${item.title}-${item.period}`} item={item} />) : <p className="empty-note">{emptyLabel}</p>}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="kontak">
      <div><p className="eyebrow">04 — KONTAK</p><h2>Mari kita mulai<br /><em>percakapan.</em></h2></div>
      <div className="contact-links">
        <ContactLink href={profile.email ? `mailto:${profile.email}` : ''} label="Kirim email">Email</ContactLink>
        <ContactLink href={profile.linkedin} label="Buka LinkedIn">LinkedIn</ContactLink>
        <ContactLink href={profile.website} label="Buka situs web">Situs web</ContactLink>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <TimelineSection id="pengalaman" number="02" eyebrow="PERJALANAN KARIER" title="Pengalaman" items={profile.experiences} emptyLabel="Tambahkan pengalaman kerja Anda di src/data/profile.js." />
        <TimelineSection id="pendidikan" number="03" eyebrow="LATAR BELAKANG" title="Pendidikan" items={profile.education} emptyLabel="Tambahkan riwayat pendidikan Anda di src/data/profile.js." />
        {profile.projects.length > 0 && <TimelineSection id="proyek" number="04" eyebrow="KARYA PILIHAN" title="Proyek" items={profile.projects} emptyLabel="" />}
        <Contact />
      </main>
      <footer><a className="wordmark" href="#home">HO<span>.</span></a><p>© 2026 {profile.name}</p><a href="#home">Kembali ke atas ↑</a></footer>
    </div>
  );
}
