import "./components.css";

export default function FilterItem({ checked, label, value, onChange }) {
  return (
    <label>
      <input
        className="filter-radio"
        type="radio"
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}
