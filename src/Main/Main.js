import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ApiContext from '../ApiContext';
import Note from '../Note/Note';
import PropTypes from 'prop-types';

class Main extends Component {

  static contextType = ApiContext

  getNotes = (notes=[], folderId) => {
    if(Object.keys(folderId).length ===0)
      return notes;

    let arr = [];

    for(let i=0;i<notes.length;i++) {

      if(notes[i].folderId === folderId.folderId) {
        arr.push(notes[i])
      }
      
    }
    return arr;
  }


  render() {  
    const { notes=[] } = this.context
    const folderId = this.props.folderId || {}
    const folderNotes = this.getNotes(notes, folderId);
    return(
      <section>
          <ul>
             {folderNotes.map(note =>
                <li key={note.id}>
                    <Note id={note.id} name={note.name} modified={note.modified} onDeleteNote={this.handleDeleteNote}/>
                </li>
             )}
          </ul>
          <ul className='new_note'>
            <li className='new_note_link'><NavLink to={`/folder/addNote`}>Add Note</NavLink></li>
          </ul>
      </section>
    );
  }
}

Main.propTypes = {
  folderId: PropTypes.object
};

export default Main;