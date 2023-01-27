import React from "react";
// import Notes from "./data";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <article>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </article>
  );
}
// page number 20 21
// page number 40 41

export default Note;
