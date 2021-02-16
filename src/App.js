import React, { Component } from 'react'
import dummyStore from './dummy-store'
import './App.css'
import Main from './Main/Main'
import Navigation from './Navigation/Navigation'
import {Route, Link, Switch} from 'react-router-dom';
import SingleNote from './SingleNote/SingleNote'
import SingleNoteNav from './SingleNoteNav/SingleNoteNav'


class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  getNotes = (notes=[], folderId) => {
    let arr = [];

    for(let i=0;i<notes.length;i++) {

      if(notes[i].folderId === folderId.folderId) {
        arr.push(notes[i])
      }
      
    }

    return arr;
  }

  getOneNote = (notes=[], noteId) => {

    console.log(notes);

    for(let i=0;i<notes.length;i++) {

      if(notes[i].id === noteId.noteId) {
        return notes[i];
      }
      
    }

  }

  getOneFolder = (folders = [], folderId) => {
    console.log(folders);

    for(let i=0;i<folders.length;i++) {

      if(folders[i].folderId === folderId.folderId) {
        return folders[i];
      }
      
    }
  }

  componentDidMount() {
    this.setState(dummyStore)
  }

  renderMain() {
    return(
      <Switch>

        <Route exact path='/'
        render= {() =>
        <Main notes={this.state.notes}/>}/>

        <Route path='/folder/:folderId'
        render= {routeProps =>
          
          <Main notes={this.getNotes(this.state.notes, routeProps.match.params)}/>
        }/>

        <Route path='/note/:noteId'
        render= {routeProps =>
          
          <SingleNote note={this.getOneNote(this.state.notes, routeProps.match.params)}/>
        }/>

      </Switch>

    )
  }

  renderNav() {
    return(
      <Switch>

      <Route exact path='/'
      render= {() =>
        <Navigation folders={this.state.folders}/>}/>

      <Route path='/folder/:folderId'
        render= {routeProps =>
          
          <Navigation folders={this.state.folders}/>}/>
        

      <Route path='/note/:noteId'
        render= {routeProps =>
          
          <SingleNoteNav folder={this.getOneFolder(this.state.folders, routeProps.match.params)}/>
        }/>

      </Switch>
    )
  }

  render() {
    return(
      <div>
        <header>
          <Link to={'/'}><h1>Noteful</h1></Link>
        </header>
        <div id="container">
          <nav>{this.renderNav()}</nav>
          <main>{this.renderMain()}</main>
        </div>
      </div>
    );
  }
}

export default App;