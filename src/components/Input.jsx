import "./components.css";

export default function Input({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="add todo..."
      className="input-todo px-2 p-1"
      value={value}
      onChange={onChange}
    />
  );
}


