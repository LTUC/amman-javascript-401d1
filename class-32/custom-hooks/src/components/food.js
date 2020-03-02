import React, { useState } from 'react';
import useForm from '../hooks/form.js';

function Food(props) {
  const [formData, setFormData] = useState({});
  const [handleSubmit, handleInput, handleChange, values] = useForm(eat)

  function eat(food) {
    setFormData(food);
  }

  return (
    <section className="food">
      <form onSubmit={handleSubmit}>
        <input name="food" type="text" {...handleInput} placeholder="enter food item" />
        <input name="calories" type="number" onChange={handleChange} placeholder="enter calorie count" />
        <input name="type" type="text" onChange={handleChange} placeholder="enter type of food" />
        <button>Eat Food</button>
      </form>

      <h2>Here are some values from the form hook:</h2>
      {
        Object.keys(values).map((key, idx) => <p key={idx}>{key}: {values[key]}</p>)
      }

      <h2>After the form is submitted:</h2>
      {
        Object.keys(formData).map((key, idx) => <p key={idx}>{key}: {formData[key]}</p>)
      }
    </section>
  )
}

export default Food;
