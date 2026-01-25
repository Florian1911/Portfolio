type Item = { date: string; label: string };

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <section className="timeline">
      <p className="eyebrow">Parcours</p>
      <ul>
        {items.map((i) => (
          <li key={i.date}>
            <span className="dot" />
            <div>
              <p className="meta">{i.date}</p>
              <p>{i.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}