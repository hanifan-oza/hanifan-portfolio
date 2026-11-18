export default function TagList({ items }) {
  return (
    <ul className="tag-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
