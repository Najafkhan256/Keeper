import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
const CreateNote = ({ addNote, expand, setExpand }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    addNote(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={submitNote}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          onClick={() => setExpand(true)}
        />
        {expand && (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          />
        )}
        {expand && (
          <button type="submit">
            <IoMdAdd size={23} />
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateNote;
