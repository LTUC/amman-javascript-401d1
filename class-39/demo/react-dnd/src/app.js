import React, {useState} from 'react';

function App() {

  const styles = {
    board: {
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      border: '1px solid black',
      display:'flex',
      flexDirection: 'column',
      height:'400px',
      width: '30%',
    },
    item: {
      border: '1px solid grey',
      height: '100px',
      width: '80%',
      margin: 'auto',
    },
  };
  const initialState = [
    {category:'first', text:'Item 1'},
    {category:'first', text:'Item 3'},
    {category:'first', text:'Item 2'},
  ];
  const [items,setItems] = useState(initialState);
  const categories = ['first','second','third'];

  // Because we need to know what got dropped, and we can't really jack data onto a DOM element ...
  // We add a bit of data to the event itself using the built-in dataTransfer API from Drag and Drop
  const handleDrag = (e,item) => {
    let data = JSON.stringify(item);
    e.dataTransfer.setData('text/json', data);
  };

  // Now, on the drop, we can pull out the data that was transferred in the thing that
  // we were dragging around, and do our state change.
  // Note that unlike vanilla, where we move DOM elements around, what we do here
  // is to change the state of the thing (it's category) and let react re-render things
  // It looks and feels like a drag+drop, but it's actually a re-draw :)
  const handleDrop = (e) => {
    e.preventDefault();
    let payload = e.dataTransfer.getData('text/json');
    let item = JSON.parse(payload);
    item.category = e.target.id;
    setItems( items.map( entry => entry.text === item.text ? item : entry ) );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <section style={styles.board}>

      {
        categories.map( (category,i) =>

          <div
            key={i}
            id={category}
            style={styles.container}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {
              items.filter( item => item.category === category )
                .map( (item,idx) =>
                  <div
                    key={idx}
                    style={styles.item}
                    draggable="true"
                    onDragStart={ (e) => handleDrag(e,item) }
                    className="card">
                    {item.text}
                  </div>
                )
            }
          </div>
        )
      }

    </section>
  );
}

export default App;
