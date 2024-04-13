export default function Input({ state, placeholder, onChange }) {
  return (
    <input
      type="text"
      className="w-full text-[#0f3433] outline-none my-5 px-4 py-2 rounded-lg shadow-lg md:text-lg"
      placeholder={placeholder}
      value={state}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
