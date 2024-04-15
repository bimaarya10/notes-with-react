
export default function Form({children, addNote}) {
  return (
    <div className=" mt-24 w-3/4 md:w-1/2 bg-[#004643] p-5 rounded-lg mx-auto">
      <h2 className="text-white text-center text-3xl font-semibold my-4 uppercase tracking-wider">Add New Note</h2>
      <form onSubmit={addNote} action="" className="w-full">
        {children}
        <button type="submit" className="block w-full text-white text-lg px-4 py-2 rounded-lg mt-8 hover:bg-yellow-600 bg-[#f9bc60]">
          Add Note
        </button>
      </form>
    </div>
  );
}
