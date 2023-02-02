function Button({ label, onClick, isDisabled }) {
  return (
    <div
      className={isDisabled ? "button_container disabled" : "button_container"}
      onClick={onClick}
    >
      <span className="label">{label || "button"}</span>
    </div>
  );
}

export default Button;
