import React from 'react';
import ReactDOM from 'react-dom';
import AddFolder from './AddFolder';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><AddFolder /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});