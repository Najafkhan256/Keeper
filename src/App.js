import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import Notes from "./components/data";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((notesItem) => {
        return (
          <Note
            key={notesItem.key}
            title={notesItem.title}
            content={notesItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
