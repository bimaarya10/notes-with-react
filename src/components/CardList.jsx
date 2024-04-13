/* eslint-disable react/prop-types */
import CardNote from "./CardNote";

export default function CardList({ notes, title, deleteNote, archiveNote }) {


  const ReturnData = () => {
    if (notes.length > 0) {
      return notes.map((note) => <CardNote key={note.id} {...note} deleteNote={deleteNote} archiveNote={archiveNote}/>);
    } else {
      return (
        <h2 className="text-[#2d928f] text-center text-3xl ">Data is empty</h2>
      );
    }
  };

  return (
    <div className="container px-8 mt-20 mb-20 mx-auto">
      <h2 className="text-[#001e1d] text-center text-4xl font-bold">{title}</h2>
      <div className="flex flex-wrap justify-center gap-5 mt-8 transition-all duration-1000">
        {<ReturnData />}
      </div>
    </div>
  );
}
