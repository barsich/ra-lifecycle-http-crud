import { Component } from 'react';
import NotesForm from './NotesForm';
import NotesList from './NotesList';

export default class Notes extends Component {
  constructor() {
    super();
    this.state = {
      noteText: '',
      noteItems: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  updateList() {
    fetch(`${process.env.REACT_APP_URL}notes`)
      .then((response) => response.json())
      .then((result) => this.setState({ noteText: '', noteItems: result }));
  }

  componentDidMount() {
    this.updateList();
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.noteText === '') {
      return;
    }
    fetch(`${process.env.REACT_APP_URL}notes`, { method: 'POST', body: this.state.noteText }).then(
      (response) => {
        if (response.status === 204) {
          this.updateList();
        }
      }
    );
  }

  handleChange({ target }) {
    this.setState({ noteText: target.value });
  }

  handleDelete(id) {
    fetch(`${process.env.REACT_APP_URL}notes/${id}`, { method: 'DELETE' }).then((response) => {
      if (response.status === 204) {
        this.updateList();
      }
    });
  }

  render() {
    return (
      <div className="notes">
        <NotesForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onUpdate={this.updateList}
          text={this.state.noteText}
        />
        <NotesList notes={this.state.noteItems} onDelete={this.handleDelete} />
      </div>
    );
  }
}
