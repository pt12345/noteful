import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ApiContext from '../ApiContext'

class AddNote extends Component {

    static contextType = ApiContext;

    getFolderId = (folderName) => {
        const { folders=[] } = this.context

        for(let i=0;i<folders.length;i++) {
            if(folders[i].name === folderName) {
              console.log("Folder ID = " + Number(folders[i].id))
              return Number(folders[i].id);
            }
                
        }

        return "Not Found";
    }

    AddFolder = (event) => {
        event.preventDefault();

        const noteName = document.getElementById('note-name').value;
        const folderName = document.getElementById('folder-name').value;
        const noteText = document.getElementById('note').value;

        if(noteName.length === 0) {
          alert("Note name is required.");
        }

        else if(folderName.length === 0) {
          alert("Folder name is required.");
        }

        else if(noteText.length === 0) {
          alert("Note content is required.");
        }
        

        if(noteName.length > 0 && folderName.length > 0 && noteText.length > 0) {

          const folderId = this.getFolderId(folderName);

          if(folderId === "Not Found") {
            alert("Folder not found")
            return;
          }
            
          let note = {
              name: noteName,
              modified: new Date(),
              folderId: folderId,
              content: noteText
          }

          fetch(`https://radiant-beyond-72329.herokuapp.com/api/notes`, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(note)
          })
          .then(response => {

              if(!response.ok)
                  console.log("Add note error")
              
              return response.json()
          })
          .then(responseJson => {

              this.context.addNote(responseJson)

              this.props.history.push(`/`)
          })

      }
    }

    render() {
        return (
            <form className="registration">
              <h2>Add Note</h2>
              <div className="registration__hint">* required field</div>  
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="name">Note Name *</label>
                  <input type="text"
                    name="name" id="note-name" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Folder *</label>
                  <input type="text"
                    name="name" id="folder-name" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Note *</label>
                  <textarea
                    name="name" id="note" required/>
                </div>
              </div>
              <div className="form-group">

               <button type="submit" className="new_note_button" onClick={this.AddFolder}>
                   Save
               </button>
              </div>
            </form>
          )
    }

}

export default withRouter(AddNote);