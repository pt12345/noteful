import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

describe('Navigation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<BrowserRouter><Navigation /></BrowserRouter>, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders UI as expected', () => {
    const nav = renderer.create(<BrowserRouter><Navigation /></BrowserRouter>).toJSON();
    expect(nav).toMatchSnapshot();
  })

})
