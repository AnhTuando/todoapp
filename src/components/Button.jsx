import "./components.css";
export default function Button({ children, variant, onClick }) {
  return (
    <button className={`p-2 button button--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
