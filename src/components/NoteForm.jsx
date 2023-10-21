import React from "react";
import autoBind from "auto-bind";

export default class NoteForm extends React.Component {
  characterLimit = 50;

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    autoBind(this);
  }

  onTitleChangeEventHandler(e) {
    let title = e.target.value;
    if (title.length > this.characterLimit) {
      title = title.substring(0, 50);
    }

    this.setState({ title });
  }

  onBodyChangeEventHandler(e) {
    this.setState({ body: e.target.value });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();

    if (this.state.title.trim() === "" || this.state.body.trim() === "") {
      // Validasi apakah title atau body kosong
      window.alert("Title and body of the note cannot be empty.");
      return;
    }

    this.props.onAddNote({
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: new Date().toISOString(),
    });

    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <div className="char-left">
          <p>Character Left: {this.characterLimit - this.state.title.length}</p>
        </div>
        <div className="form-input">
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            rows="6"
            // cols="50"
            id="note"
            placeholder="Start typing"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
        </div>
        <button className="form-button" type="submit">
          Save
        </button>
      </form>
    );
  }
}
