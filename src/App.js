import React, { Component } from 'react'
import './App.css'
import Main from './Main/Main'
import Navigation from './Navigation/Navigation'
import {Route, Link, Switch} from 'react-router-dom';
import SingleNote from './SingleNote/SingleNote'
import SingleNoteNav from './SingleNoteNav/SingleNoteNav'
import ApiContext from './ApiContext';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import NotesError from './NotesError/NotesError';
import FoldersError from './FoldersError/FoldersError';


class App extends Component {
  state = {
    notes: [],
    folders: []
  }

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

  componentDidMount() {
   

    Promise.all([
      fetch('https://radiant-beyond-72329.herokuapp.com/api/notes'),
      fetch('https://radiant-beyond-72329.herokuapp.com/api/folders', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        }
    })
    ])
    .then(([responseNotes, responseFolders]) => {

      if(!responseFolders.ok)
        console.log("Folder response error")

      if(!responseNotes.ok)
        console.log("Note response error")

      return Promise.all([responseNotes.json(), responseFolders.json()])
    })
    .then(([notes, folders]) => {
      
      this.setState({notes, folders});
    });
  }

  renderMain() {
    return(
      <Switch>

        <Route exact path='/'
        render= {() =>
          <Main/>}/>
             
        <Route exact path='/folder/addFolder'
        render= {() =>
          <AddFolder/>}/>

        <Route exact path='/folder/addNote'
        render= {() =>
          <AddNote/>}/>

        <Route path='/folder/:folderId'
        render= {routeProps => 
          <Main folderId={routeProps.match.params}/>
        }/>

        <Route path='/note/:noteId'
        render= {routeProps => 
          <SingleNote noteId={routeProps.match.params}/>
        }/>

      </Switch>
    )
  }

  renderNav() {
    return(
      <Switch>

        <Route exact path='/'
        render= {() =>
          <Navigation/>}/>


        <Route path='/folder/:folderId'
          render= {() =>
            <Navigation/>}/>
          

        <Route path='/note/:noteId'
          render= {routeProps =>
            <SingleNoteNav folderId={routeProps.match.params}/>
          }/>

      </Switch>
    )
  }

  deleteNote = noteId => {
    this.setState({
        notes: this.state.notes.filter(note => note.id !== noteId)
    });
  }

  addFolder = newFolder => {
    let foldersArr = this.state.folders;

    foldersArr.push(newFolder)

    this.setState({ folders: foldersArr })

  }

  addNote = newNote => {
    let notesArr = this.state.notes;

    notesArr.push(newNote)

    this.setState({ notes: notesArr })
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote
    }
    return(
      <ApiContext.Provider value={value}>
        <div id="app">
          <header>
            <Link className="header-link" to={'/'}>Noteful</Link>
          </header>
          <div id="container">
            <FoldersError>
              <nav>{this.renderNav()}</nav>
            </FoldersError>
            <NotesError>
              <main>{this.renderMain()}</main>
            </NotesError>
          </div>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;