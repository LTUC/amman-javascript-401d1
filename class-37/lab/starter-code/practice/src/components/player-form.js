import React from 'react';
import {useState, useEffect} from 'react';

let PlayerForm = props => {

  const data = props.initialValues || {};

  let [form,setForm] = useState(data);

  const handleChange = (e) => {
    let {name,value} = e.target;
    setForm({...form, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(form);
  };

  useEffect( () => {
    setForm(data);
  }, [data]);


  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input defaultValue={data.name} name="name" />
      </div>
      <div>
        <label htmlFor="team">Team</label>
        <input defaultValue={data.team} name="team" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlayerForm;
