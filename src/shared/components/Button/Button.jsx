function Button({ label, onClick, isDisabled, type }) {
  return (
    <button
      className={isDisabled ? "button_container disabled" : "button_container"}
      onClick={onClick}
      type={type}
    >
      <span className="label">{label || "button"}</span>
    </button>
  );
}

export default Button;
