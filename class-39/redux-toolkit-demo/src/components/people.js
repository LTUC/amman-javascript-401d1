import React, { useState, useEffect, PureComponent } from 'react';
import { connect } from 'react-redux';
import { add, remove, get } from '../store/people.store.js';

const People = props => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(name)
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  useEffect(() => {
    props.get();
  }, []);

  return (
    <section>
      <ul>
        {props.people.map((person, idx) => {
          return <li onClick={() => props.remove(person.name)} key={idx}>{person.name}</li>
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
      </form>
    </section>
  )
}

const mapStateToProps = state => ({
  people: state.people
});

const mapDispatchToProps = { add, remove, get };

export default connect(mapStateToProps, mapDispatchToProps)(People);