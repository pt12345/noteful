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
                  <li className="folder_list" key={folder.id}>
                      <NavLink
                        className='folder_link'
                        to={`/folder/${folder.id}`}>
                            {folder.name}
                        </NavLink>
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