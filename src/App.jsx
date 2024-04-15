import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Input from "./components/Input";
import Navbar from "./components/Navbar";



function App() {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [body, setBody] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notesData')))
  }, [])

  function onAddNote(event) {
    event.preventDefault();
    const newNote = [
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ];
    setNotes(newNote);
    localStorage.setItem('notesData', JSON.stringify(newNote))
    setBody("");
    setTitle("");
  }

  function onDeletenote(id) {
    const data = notes.filter((note) => note.id != id);

    setNotes(data);
    localStorage.setItem("notesData", JSON.stringify(data))
  }

  function onArchiveNote(id) {
    const data = notes.map((note) => {
      if (note.id == id) {
        note.archived = !note.archived;
      }
      return note;
    });

    setNotes(data);
  }

  function filterArchive() {
    const data = notes.filter((note) => note.archived == true);
    return data;
  }

  function filterActive() {
    const data = notes.filter((note) => note.archived == false);
    return data;
  }

  const findNotes = (event) => {
    setSearch(event.target.value)
    const data = notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );
    setResult(data);
    console.log(result)
  };


  let active = filterActive()
  let archive = filterArchive()

  return (
    <>
      <Navbar stateSearch={search} onChange={findNotes} setState={setSearch}/>
      {(search.length > 0 && result.length > 0) && <CardList notes={result} title="Search Result" />}
      <Form addNote={onAddNote}>
        <Input
          state={title}
          onChange={setTitle}
          placeholder="Input here the title..."
        />
        <Input
          state={body}
          onChange={setBody}
          placeholder="Input here the body..."
        />
      </Form>
      <CardList
        notes={active}
        archiveNote={onArchiveNote}
        deleteNote={onDeletenote}
        title="Active Notes"
      />
      <CardList
        notes={archive}
        title="Archive Notes"
        deleteNote={onDeletenote}
        archiveNote={onArchiveNote}
      />
    </>
  );
}

export default App;
