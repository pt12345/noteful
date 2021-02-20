import React, { Component } from 'react';
import Note from '../Note/Note'
import ApiContext from '../ApiContext';
import { withRouter } from 'react-router-dom';



class SingleNote extends Component {


  static contextType = ApiContext

  getOneNote = (notes=[], noteId) => {

    if(notes.length === 0) {
      return {};
    }

    console.log(notes);

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
              <span>{note.content}</span>
          </div>
      </section>
    );
  }
}

export default withRouter(SingleNote);