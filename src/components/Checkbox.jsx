import "./components.css";

export default function Checkbox({ checked, onChange }) {
  return (
    <input
      className="todo-item-checkbox"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}
