import React from "react";
import Navbar from "./Navbar";
import { getInitialData } from "../utils/data";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import autoBind from "auto-bind";

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: "",
    };
    autoBind(this);
    // this.onAddHandler = this.onAddHandler.bind(this);
    // this.onDeleteHandler = this.onDeleteHandler.bind(this);
    // this.onArchiveHandler = this.onArchiveHandler.bind(this);
    // this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  filterNotes(notes, archived = false) {
    if (this.state.keyword === "") {
      return notes.filter((note) => note.archived === archived);
    }
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) &&
        note.archived === archived
    );
  }

  onSearchHandler(e) {
    this.setState({ keyword: e.target.value });
  }

  onAddHandler(newNote) {
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  }

  onDeleteHandler(e, id) {
    e.preventDefault();

    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  }

  onArchiveHandler(e, id) {
    e.preventDefault();

    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    }));
  }

  render() {
    return (
      <>
        <Navbar onSearch={this.onSearchHandler} />

        <div className="container">
          <NoteForm onAddNote={this.onAddHandler} />

          <h2>Active Notes</h2>
          <NoteList
            notes={this.filterNotes(this.state.notes)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />

          <h2>Archiv</h2>
          <NoteList
            notes={this.filterNotes(this.state.notes, true)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}
