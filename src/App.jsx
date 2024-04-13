import { useState } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
const getInitialData = () => [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

function App() {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [body, setBody] = useState("");
  const [notes, setNotes] = useState(getInitialData());

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
    setBody("");
    setTitle("");
  }

  function onDeletenote(id) {
    const data = notes.filter((note) => note.id != id);

    setNotes(data);
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
