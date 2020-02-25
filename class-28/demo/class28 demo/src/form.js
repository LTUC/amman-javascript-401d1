import React from "react";

function Form(props) {
  const handleSubmit = async e => {
    e.preventDefault();
    const raw = await fetch("https://swapi.co/api/people/");
    const data = await raw.json();
    const result = data.results.map(person => {
      return new Person(person);
    });
    props.handler(result);
  };
  return (
    <form onSubmit={handleSubmit}>
      <button>{props.prompt}</button>
    </form>
  );
}
function Person(data) {
  this.name = data.name;
  this.url = data.url;
}

export default Form;
