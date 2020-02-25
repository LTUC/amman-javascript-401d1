import React from "react";
import Person from "./person.js";
function People(props) {
  return (
    <ul>
      {props.results.map((person, index) => {
        return <Person person={person} key={index} />;
      })}
    </ul>
  );
}

export default People;
