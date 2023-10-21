import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length > 0) {
    return (
      <div className="card-container">
        {notes.map((note) => (
          <div className="cards" key={note.id}>
            <NoteItem onDelete={onDelete} onArchive={onArchive} {...note} />
          </div>
        ))}
      </div>
    );
  }
  return <p className="text-secondary">Empty notes</p>;
}
