import Input from "./Input";

export default function Navbar({ stateSearch, onChange}) {

  return (
    <nav className="w-full flex justify-between items-center px-5 bg-[#004643]">
      <div>
        <h2 className="italic font-bold text-3xl md:text-4xl text-[#abd1c6]">SenaNotes</h2>
      </div>
      <div>
        <input
          type="text"
          className="w-full text-[#0f3433] outline-none my-3 px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-lg md:text-lg"
          placeholder="Search Note..."
          value={stateSearch}
          onChange={onChange}
        />
      </div>
    </nav>
  );
}
