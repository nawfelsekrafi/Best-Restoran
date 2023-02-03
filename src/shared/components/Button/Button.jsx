function Button({ label, onClick, disabled, type }) {
  return (
    <button
      className={disabled ? "button_container disabled" : "button_container"}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <span className="label">{label || "button"}</span>
    </button>
  );
}

export default Button;
