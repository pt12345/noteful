import React from 'react';
import ReactDOM from 'react-dom';
import SingleNote from './SingleNote';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><SingleNote noteId={{}} /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});