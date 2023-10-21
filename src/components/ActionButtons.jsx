import React from "react";
import archiveIcon from "../assets/archive.svg";
import unarchiveIcon from "../assets/unarchive.svg";
import "../styles/style.css";

export default function ActionButtons({ id, archived, onDelete, onArchive }) {
  return (
    <div className="action-buttons">
      <button className="action-button-delete" onClick={(e) => onDelete(e, id)}>
        Delete
      </button>
      <div className="action-button-archive" onClick={(e) => onArchive(e, id)}>
        {archived ? (
          <img src={unarchiveIcon} alt="Unarchive" className="unarchiveIcon" />
        ) : (
          <img src={archiveIcon} alt="Archive" className="archiveIcon" />
        )}
      </div>
    </div>
  );
}
