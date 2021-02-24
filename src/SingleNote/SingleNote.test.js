import React from 'react';
import ReactDOM from 'react-dom';
import SingleNote from './SingleNote';
import { BrowserRouter } from 'react-router-dom'

const note = {
    "id": "d26e12c2-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Turtles",
    "modified": "2018-09-11T23:00:00.000Z",
    "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Eum et et itaque sed animi. Porro consectetur impedit id aut voluptas quisquam eum quis provident. Culpa officia laboriosam quia consequuntur ea consequatur quibusdam. Quod iure pariatur est molestias veritatis expedita illum. Voluptatum quis sint quidem. Rerum numquam itaque.\n \rVoluptatum sed et consectetur fugiat qui et. Quibusdam illo voluptatum et eaque. Rerum laboriosam iure veniam consequatur accusamus error numquam. Voluptatem ab consequatur sapiente excepturi architecto voluptatum nihil repudiandae. Quas minus eveniet natus sint perferendis aut natus sint tempora.\n \rDolores aperiam deleniti qui nihil libero. Illum nobis ut repudiandae aut sed dolor quis. Atque praesentium nobis ea eos ratione. Quas velit tempora ut nihil ea omnis sequi beatae et."
  }

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><SingleNote name={note.name} modified={note.modified} noteId={note.id} /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});