import React, {useState} from 'react';

import Draggable from './components/draggable.js';
import DropZone from './components/dropzone.js';

import './app.scss';

function App() {

  const initialState = [
    {category:'first', text:'Item 1'},
    {category:'first', text:'Item 3'},
    {category:'first', text:'Item 2'},
  ];
  const [items,setItems] = useState(initialState);
  const categories = ['first','second','third'];

  const handleDrop = (targetPayload, droppedPayload) => {
    droppedPayload.category = targetPayload;
    setItems( items.map( entry => droppedPayload.text === entry.text ? droppedPayload : entry ) );
  };

  return (
    <section className="board">

      {
        categories.map( (category,i) =>

          <DropZone key={i} className="container" hoverClass="droppable" payload={category}  onDrop={handleDrop}>
            {
              items.filter( item => item.category === category )
                .map( (item,idx) =>
                  <Draggable dragClass="dragging" key={idx} payload={item}>
                    <div className="item">{item.text}</div>
                  </Draggable>
                )
            }
          </DropZone>
        )
      }

    </section>
  );
}

export default App;
