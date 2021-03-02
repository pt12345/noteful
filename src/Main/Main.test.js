import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import reactDom from 'react-dom';

describe('Main', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders as expected', () => {
    const main = renderer.create(<BrowserRouter><Main /></BrowserRouter>).toJSON();
    expect(main).toMatchSnapshot();
  })

  it('renders without crashing.. againg', () => {
    const div = document.createElement('div');
    reactDom.render(<BrowserRouter><Main /></BrowserRouter>, div);
    reactDom.unmountComponentAtNode(div);
  })
})
