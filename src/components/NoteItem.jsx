import React from "react";
import NoteBody from "./NoteBody";
import ActionButtons from "./ActionButtons";

export default function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <>
      <NoteBody title={title} body={body} createdAt={createdAt} />
      <ActionButtons
        id={id}
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </>
  );
}
