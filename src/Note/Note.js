import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ApiContext from '../ApiContext'
import { withRouter } from 'react-router-dom';

class Note extends Component {

  static defaultProps ={
    onDeleteNote: () => {},
  }

  static contextType = ApiContext;

  handleDelete = event => {
    event.preventDefault();
    const noteId = this.props.id

    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      if(!response.ok)
        return response.json().then(event => Promise.reject(event))
      
      return response.json()
    })
    .then(responseJson => {
      
      this.context.deleteNote(noteId)
      this.props.onDeleteNote(noteId)
    })
    .catch(error => {
      console.log({error})
    })
    

    
  }

  render() {
    return(
      <div className="Note">
          <h2>
            <Link to={`/note/${this.props.id}`}>
                {this.props.name}
            </Link>
          </h2>
          
          <button className='delete_button' type='button' onClick={this.handleDelete}>
            Delete
          </button>
          <div className="dates">
              <div className="date_modified">
                  Modified:{this.props.modified}
              </div>
          </div>
      </div>
    );
  }
}

export default withRouter(Note);