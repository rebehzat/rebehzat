import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "rebehzat — make room for better",
  description:
    "The personal site of Behzat. Notes on building, attention, and the useful things between the lines.",
};

const notes = [
  { number: "01", title: "The quiet advantage", type: "Essay", date: "06.08.26" },
  { number: "02", title: "A small operating system for ideas", type: "Field note", date: "21.07.26" },
  { number: "03", title: "What survives the first draft", type: "Essay", date: "04.06.26" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="rebehzat home">re<span>·</span>behzat</a>
        <div className="nav-links">
          <a href="#notes">Notes</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:hello@behzat.org">Say hello <span>↗</span></a>
        </div>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-kicker"><span className="pulse" /> A personal archive, in progress</div>
        <h1>Make room<br /><em>for better.</em></h1>
        <div className="hero-bottom">
          <p className="lede">I&apos;m Behzat — a builder, thinker, and collector of useful questions. This is where I put the things I&apos;m still figuring out.</p>
          <a className="circle-link" href="#notes" aria-label="Scroll to notes"><span>↓</span></a>
        </div>
      </section>

      <section className="signal wrap" aria-label="Current focus">
        <div className="signal-label">Currently thinking about</div>
        <div className="signal-text">Attention as a design material <span>✳</span></div>
        <div className="signal-aside">Istanbul / online<br />2026 — present</div>
      </section>

      <section className="notes wrap" id="notes">
        <div className="section-head"><span>Selected notes</span><span>(03)</span></div>
        <div className="note-list">
          {notes.map((note) => (
            <a className="note-row" href="#about" key={note.number}>
              <span className="note-number">{note.number}</span>
              <span className="note-title">{note.title}</span>
              <span className="note-meta">{note.type}<br />{note.date}</span>
              <span className="note-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about wrap" id="about">
        <div className="about-mark">✳</div>
        <div>
          <p className="section-label">A little context</p>
          <h2>Good work starts<br />with <em>good attention.</em></h2>
          <p className="about-copy">I make digital products, write about the process, and try to stay curious long enough to notice what everyone else is walking past.</p>
          <a className="text-link" href="mailto:hello@behzat.org">Get in touch <span>↗</span></a>
        </div>
      </section>

      <footer className="footer wrap">
        <span>© 2026 rebehzat</span>
        <span>Built with care, from Istanbul</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
