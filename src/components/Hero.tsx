export type HeroLink = { label: string; href: string };

export default function Hero({ links }: { links: HeroLink[] }) {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">D�veloppeur React & Astro</p>
        <h1>
          Salut, je suis Florian.
          <br />
          Je con�ois des interfaces nettes & rapides.
        </h1>
        <p className="sub">
          Étudiant smart grid, passionné par le developpement et le réseau.
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
        <div className="avatar__inner" aria-hidden="true" />
        <span className="avatar__label">Ajoute ton portrait dans public/profile.jpg</span>
      </div>
    </section>
  );
}