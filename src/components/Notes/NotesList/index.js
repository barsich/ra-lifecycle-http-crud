import NotesItem from './NoteItem';

export default function NotesList({ notes, onDelete }) {
  return (
    <div className="notes__list">
      {notes.map((item) => (
        <NotesItem item={item} key={item.id} onDelete={onDelete} />
      ))}
    </div>
  );
}
