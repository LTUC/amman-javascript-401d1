import React, { useEffect, useState } from 'react';

function People(props) {
  
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');

  const _changeName = (e) => {
    setName(e.target.value);
  }

  const _addPerson = (e) => {
    e.preventDefault();
    e.target.reset();
    name && setPeople([...people, name]);
  }

  useEffect(() => {
    console.log('I will run on every re-render');
  })

  useEffect(() => {
    console.log('name:', name)
  }, [name]);

  useEffect(() => {
    console.log('person added');
    if (people.length >=1 ) { document.title = `Welcome ${name}!`}
  }, [people]);

  useEffect(() => {
    console.log('initial mount');
    document.title = 'people coming...'
  }, [])

  return (
    <section>
      <form onSubmit={_addPerson}>
        <p>{props.cool}</p>
        <input onChange={_changeName} />
      </form>
      {
        people.map(person => 
          <p key={person}>{person}</p>
        )
      }
    </section>
  )  
}

export default People;