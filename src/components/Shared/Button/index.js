import "./styles.css";

export default function Button({ innerText, variant = "primary" }) {
  return (
    <button
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"}`}
    >
      {innerText}
    </button>
  );
}
