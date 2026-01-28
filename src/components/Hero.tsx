export type HeroLink = { label: string; href: string };

export default function Hero({ links }: { links: HeroLink[] }) {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Civil engineering student</p>
        <h1>I’m a multidisciplinary maker who loves building projects.</h1>
        <p className="lead">
          I’m constantly looking for new ideas and challenges, whether in web development, embedded systems,
          networking, or other tech-driven fields. I’m passionate about exploring, learning, and turning ideas into
          real, working projects.
        </p>
        <p className="sub">
          Civil engineering student passionate about networking, building websites in my free time.
          <br />
          French is my native language, and my English level is B1.
        </p>
        <div className="actions">
          {links.map((l) => (
            <a key={l.href} className="pill" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="avatar">
        <img className="avatar__img" src="/profile.jpg" alt="Portrait of Florian" />
      </div>
    </section>
  );
}
