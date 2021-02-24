import React, { Component } from 'react';
import Note from '../Note/Note'
import ApiContext from '../ApiContext';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';



class SingleNote extends Component {


  static contextType = ApiContext

  getOneNote = (notes=[], noteId) => {

    if(notes.length === 0) {
      return {};
    }

    for(let i=0;i<notes.length;i++) {

      if(notes[i].id === noteId.noteId) {
        return notes[i];
      }
      
    }

  }

  handleDeleteNote = noteId => {
    this.props.history.push(`/`)
  }

  render() {
    const { notes=[] } = this.context
    const note = this.getOneNote(notes, this.props.noteId) || {}
    return(
      <section>
          <Note id={note.id} name={note.name} modified={note.modified} onDeleteNote={this.handleDeleteNote}/>

          <div>
              <p className="note_content">{note.content}</p>
          </div>
      </section>
    );
  }
}

SingleNote.propTypes = {
  noteId: PropTypes.object.isRequired
};

export default withRouter(SingleNote);