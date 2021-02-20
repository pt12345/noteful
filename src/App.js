import React, { Component } from 'react'
import './App.css'
import Main from './Main/Main'
import Navigation from './Navigation/Navigation'
import {Route, Link, Switch} from 'react-router-dom';
import SingleNote from './SingleNote/SingleNote'
import SingleNoteNav from './SingleNoteNav/SingleNoteNav'
import ApiContext from './ApiContext';


class App extends Component {
  state = {
    notes: [],
    folders: []
  }

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

  componentDidMount() {
    Promise.all([
      fetch('http://localhost:9090/notes'),
      fetch('http://localhost:9090/folders')
    ])
    .then(([responsNotes, responseFolders]) => {
      return Promise.all([responsNotes.json(), responseFolders.json()])
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
        render= {routeProps =>
          
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

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote
    }
    return(
      <ApiContext.Provider value={value}>
        <div>
          <header>
            <Link to={'/'}><h1>Noteful</h1></Link>
          </header>
          <div id="container">
            <nav>{this.renderNav()}</nav>
            <main>{this.renderMain()}</main>
          </div>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;