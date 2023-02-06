import { useEffect, useRef } from "react";

function Button({ label, onClick, disabled, type, icon, isEmpty }) {
  const btn = useRef(null);
  useEffect(() => {
    if (disabled) {
      btn.current.classList.add("disabled");
    } else {
      btn.current.classList.remove("disabled");
    }
    if (isEmpty) {
      btn.current.classList.add("empty");
    } else {
      btn.current.classList.remove("empty");
    }
  }, []);

  return (
    <button
      ref={btn}
      className="button_container"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <img src={icon} />}
      <span className="label">{label || "button"}</span>
    </button>
  );
}

export default Button;
