export default function TimelineItem({ item }) {
  return (
    <article className="timeline-item">
      <span className="timeline-dot" aria-hidden="true" />
      <div className="timeline-meta">
        <span>{item.period}</span>
        {item.location && <span>{item.location}</span>}
      </div>
      <h3>{item.title}</h3>
      <p className="timeline-subtitle">{item.organization}</p>
      {item.description && <p className="body-copy">{item.description}</p>}
    </article>
  );
}
