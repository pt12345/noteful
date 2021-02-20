import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navigation.css'
import ApiContext from '../ApiContext';

class Navigation extends Component {

  static contextType = ApiContext

  render() {
    const { folders=[] } = this.context

    return(
      <div>
          <ul>
              {folders.map(folder => 
                  <li key={folder.id}>
                      <NavLink
                        className='folder_link'
                        to={`/folder/${folder.id}`}>
                            {folder.name}
                        </NavLink>
                  </li>
              )

              }
          </ul>
          <div className='new_folder'>
              <span>New Folder</span>
          </div>
      </div>
    );
  }
}

export default Navigation;