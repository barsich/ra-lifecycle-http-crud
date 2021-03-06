export default function NotesForm({ onSubmit, onChange, onUpdate, text }) {
  return (
    <form className="notes-form" onSubmit={onSubmit}>
      <textarea
        rows="5"
        className="notes-form__textarea"
        onChange={onChange}
        value={text}
      ></textarea>
      <button className="notes-form__submit button" type="submit">
        Добавить
      </button>
      <button className="notes-form__update button" type="button" onClick={onUpdate}>
        Обновить
      </button>
    </form>
  );
}
