import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((currNote, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateNote addNote={addNote} />
      <main>
        {notes.map((notesItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={notesItem.title}
              content={notesItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
