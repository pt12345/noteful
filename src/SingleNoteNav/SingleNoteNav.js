import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ApiContext from '../ApiContext';

class SingleNoteNav extends Component {
  
  static contextType = ApiContext

  getOneFolder = (folders = [], folderId) => {
    if(folders.length === 0) {
      return {};
    }
    console.log(folders);

    for(let i=0;i<folders.length;i++) {

      if(folders[i].folderId === folderId.folderId) {
        return folders[i];
      }
      
    }
  }

  render() {
    const { folders=[] } = this.context
    const folder = this.getOneFolder(folders, this.props.folderId)

    return(
      <div>
        <h2>{folder.name}</h2>
        <button className='back_button' type='button'>
            Back
          </button>
      </div>

    );
  }
}

export default SingleNoteNav;