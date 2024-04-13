export default function CardNote({ title, createdAt, body, archived, id, deleteNote, archiveNote }) {
  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="w-full flex flex-col sm:w-64 justify-between transition-all bg-[#004643] overflow-hidden rounded-lg shadow-lg">
      <div className="mb-5 p-4">
        <h2 className="text-[#fffffe] text-lg mb-2">{title}</h2>
        <h4 className="text-[#f9bc60] text-sm mb-1">
          {showFormattedDate(createdAt)}
        </h4>
        <p className="text-[#abd1c6] text-base mt-2">{body}</p>
      </div>
      <div className="w-full flex justify-between">
        <button onClick={() => deleteNote(id)} className="block w-1/2 bg-red-600 py-2 hover:opacity-75 text-white transition-opacity">
          Delete
        </button>
        <button onClick={() => archiveNote(id)} className="block w-1/2 bg-yellow-600 py-2 text-white hover:opacity-75 transition-opacity">
          {archived?"Active": "Archive"}
        </button>
      </div>
    </div>
  );
}
