import React from "react";

function Person(props) {
  return (
    <li>
      <a href={props.person.url}> {props.person.name}</a>
    </li>
  );
}

export default Person;
