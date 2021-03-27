import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navigation.css'
import ApiContext from '../ApiContext';
class Navigation extends Component {

  static contextType = ApiContext

  getNoteLength = (notes, folderId) => {
    let note = notes.filter(note => note.folderId === folderId);

    if(typeof note !== 'undefined')
      return note.length;
    else
      return 0;
  }

  render() {
    const { folders=[] } = this.context
    const { notes=[] } = this.context

    return(
      <div>
          <ul>
              {folders.map(folder => 
                  <li className="folder_list" key={folder.id}>
                      <NavLink
                        className='folder_link'
                        to={`/folder/${folder.id}`}>
                            {folder.name}
                        </NavLink>
                        
                        <span> - {this.getNoteLength(notes, folder.id) || "0"}</span>
                  </li>
              )}
          </ul>
          <ul className='new_folder'>    
              <li className='new_folder_link'><NavLink  to={`/folder/addFolder`}>Add Folder</NavLink></li>
          </ul>
      </div>
    );
  }
}

export default Navigation;