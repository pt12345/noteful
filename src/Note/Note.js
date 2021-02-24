import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import { withRouter } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import PropTypes from 'prop-types'

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

    let modified = ""
    try {
      modified = format(parseISO(this.props.modified), 'MMM yyyy')
    }
    catch {
      modified = "N/A"
    }

    return(
      <div className="Note">
          <h2>
            <Link to={`/note/${this.props.id}`}>
                {this.props.name}
            </Link>
          </h2>
          <div className="note_container">
            <div className="date_modified">
            Last Modified: {modified}
            </div>
            <div className='delete_button'>
              <button type='button' onClick={this.handleDelete}>
                Delete Note
              </button>
            </div>
          </div>  
      </div>
    );
  }
}

Note.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  modified: PropTypes.string
};

export default withRouter(Note);