type Project = {
  title: string;
  stack: string;
  href?: string;
  note?: string;
};

export default function ProjectCard({ title, stack, href, note }: Project) {
  if (href) {
    return (
      <a className="card" href={href} target="_blank" rel="noreferrer">
        <div>
          <p className="eyebrow">Project</p>
          <h3>{title}</h3>
          <p className="meta">{stack}</p>
        </div>
        {note && <p className="note">{note}</p>}
        <span className="chevron" aria-hidden="true">
          ?
        </span>
      </a>
    );
  }

  return (
    <div className="card">
      <div>
        <p className="eyebrow">Project</p>
        <h3>{title}</h3>
        <p className="meta">{stack}</p>
      </div>
      {note && <p className="note">{note}</p>}
    </div>
  );
}
