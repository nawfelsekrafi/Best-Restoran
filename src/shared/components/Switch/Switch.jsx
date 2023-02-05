import { useEffect, useRef } from "react";

function Switch({ label, onChange, value }) {
  const switchRef = useRef(null);
  useEffect(() => {
    if (value) {
      switchRef.current.classList.add("toggle__container--isActive");
    } else {
      switchRef.current.classList.remove("toggle__container--isActive");
    }
  }, []);

  const handleOnClick = () => {
    switchRef.current.classList.toggle("toggle__container--isActive");
    onChange(
      [...switchRef.current.classList].includes("toggle__container--isActive")
    );
  };

  return (
    <div className="switch_container">
      {label && <span className="label">{label}</span>}
      <div
        className="toggle__container"
        ref={switchRef}
        onClick={handleOnClick}
      >
        <div className="toggle__circle"></div>
      </div>
    </div>
  );
}

export default Switch;
