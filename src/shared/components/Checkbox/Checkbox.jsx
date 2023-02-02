import { useState } from "react";
import checkVector from "../../../assets/icons/check_vector.svg";

function Checkbox({ label, onChange, isChecked }) {
  const [checked, setChecked] = useState(isChecked || false);

  return (
    <div
      className="checkbox_container"
      onClick={() => {
        setChecked(!checked);
        onChange(!checked);
      }}
    >
      <div className={checked ? "checkbox checked" : "checkbox"}>
        {checked && <img src={checkVector} alt="" />}
      </div>
      <span>{label}</span>
    </div>
  );
}

export default Checkbox;
