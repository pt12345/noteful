import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navigation.css'

class Navigation extends Component {

  render() {
    return(
      <div>
          <ul>
              {this.props.folders.map(folder => 
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