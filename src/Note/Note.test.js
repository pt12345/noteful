import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

describe('Note', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<BrowserRouter><Note /></BrowserRouter>, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const note = renderer.create(<BrowserRouter><Note /></BrowserRouter>)
    expect(note).toMatchSnapshot();
  })

})
