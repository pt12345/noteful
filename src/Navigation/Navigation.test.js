import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><Navigation /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});