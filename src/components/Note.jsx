import React from "react";

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

export default Note;
