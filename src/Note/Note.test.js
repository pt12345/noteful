import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><Note /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});