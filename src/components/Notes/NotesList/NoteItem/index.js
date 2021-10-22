export default function NotesItem({ item, onDelete }) {
  const { id, text } = item;
  return (
    <div className="notes-list__item">
      <p className="notes-list__item-text">{text}</p>
      <span className="notes-list__item-delete button material-icons" onClick={() => onDelete(id)}>
        close
      </span>
    </div>
  );
}
