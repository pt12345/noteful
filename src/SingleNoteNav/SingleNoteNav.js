import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class SingleNoteNav extends Component {

  render() {
    return(
      <div>
        <h2>{this.props.folder.name}</h2>
        <button className='back_button' type='button'>
            Back
          </button>
      </div>

    );
  }
}

export default SingleNoteNav;