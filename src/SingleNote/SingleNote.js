import React, { Component } from 'react';
import Note from '../Note/Note'


class SingleNote extends Component {

  render() {
    return(
      <section>
          <Note id={this.props.note.id} name={this.props.note.name} modified={this.props.note.modified}/>

          <div>
              <span>{this.props.note.content}</span>
          </div>
      </section>
    );
  }
}

export default SingleNote;