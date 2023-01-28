import React from "react";
import { MdDelete } from "react-icons/md";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <article>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <MdDelete size={23} />
      </button>
    </article>
  );
}

export default Note;
