import React, { Component } from 'react';
import Note from '../Note/Note'


class Main extends Component {

  render() {
    return(
      <section>
          <ul>
             {this.props.notes.map(note =>
                <li key={note.id}>
                    <Note id={note.id} name={note.name} modified={note.modified}/>
                </li>
             )}
          </ul>
          <div className='new_note'>
              <span>New Note</span>
          </div>
      </section>
    );
  }
}

export default Main;