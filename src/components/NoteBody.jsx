import { showFormattedDate } from "../utils/data";

export default function NoteBody({ title, body, createdAt }) {
  return (
    <div className="card-content">
      <h3 className="card-content-title">{title}</h3>
      <p className="card-content-date">{showFormattedDate(createdAt)}</p>
      <p className="card-content-note">{body}</p>
    </div>
  );
}
