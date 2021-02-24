import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ApiContext from '../ApiContext';
import PropTypes from 'prop-types';
class SingleNoteNav extends Component {
  
  static contextType = ApiContext

  getOneFolder = (folders = [], folderId) => {
    if(folders.length === 0) {
      return {};
    }

    for(let i=0;i<folders.length;i++) {

      if(folders[i].folderId === folderId.folderId) {
        return folders[i];
      }
      
    }
  }

  render() {
    const { folders=[] } = this.context;
    const folderId = this.props.folderId || {}
    const folder = this.getOneFolder(folders, folderId)

    return(
      <div>
        <h2>{folder.name}</h2>
        <Link className='back_button' to={`/`}>
                Back
        </Link>
      </div>

    );
  }
}

SingleNoteNav.propTypes = {
  folderId: PropTypes.object.isRequired
};

export default SingleNoteNav;