import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

class Note extends Component {

  render() {
    return(
      <div className="Note">
          <h2>
            <Link to={`/note/${this.props.id}`}>
                {this.props.name}
            </Link>
          </h2>
          
          <button className='delete_button' type='button'>
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

export default Note;