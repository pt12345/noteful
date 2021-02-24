import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ApiContext from '../ApiContext'

class AddFolder extends Component {

    static contextType = ApiContext;

    AddFolder = (event) => {
        event.preventDefault();

        const folder = {name: document.getElementById('folder-name').value } 

        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(folder)
        })
        .then(response => {

            if(!response.ok)
                console.log("Add folder error")
            
            return response.json()
        })
        .then(responseJson => {

            this.context.addFolder(responseJson)

            this.props.history.push(`/`)
        })
    }

    render() {
        return (
            <form className="registration">
              <h2>Add Folder</h2>
              <div className="registration__hint">* required field</div>  
              <div className="form-group">
                <label htmlFor="name">Folder Name *</label>
                <input type="text"
                  name="name" id="folder-name"/>
              </div>
              <div className="form-group">

               <button type="submit" className="registration__button" onClick={this.AddFolder}>
                   Save
               </button>
              </div>
            </form>
          )
    }

}

export default withRouter(AddFolder);