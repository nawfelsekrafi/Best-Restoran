import { useState } from "react";
import StatusText from "../StatusText";

function TextInput({
  label,
  withHelper,
  placeholder,
  value,
  disabled,
  helperText,
  status,
  statusText,
  readOnly,
  secure,
  statusTexts,
  onChange,
  page,
  name,
}) {
  const [passwordShowen, setPasswordShowen] = useState(!secure);
  return (
    <div className={"input_container " + (status || "normal")}>
      <label htmlFor={label + "TextInput" + page}>{label || "Label"}</label>
      <div>
        <input
          type={secure && !passwordShowen ? "password" : "text"}
          id={label + "TextInput" + page}
          name={name}
          value={value || ""}
          placeholder={placeholder || ""}
          onChange={onChange}
        />
        {secure && (
          <span
            className="secure"
            onClick={() => setPasswordShowen((oldValue) => !oldValue)}
          >
            {passwordShowen ? "Gizle" : "Göster"}
          </span>
        )}
      </div>
      {withHelper && <span className="helper_text">{helperText}</span>}
      {statusText && <StatusText status={status} text={statusText} />}

      {statusTexts && (
        <div className="statusTexts">
          {statusTexts.map((st, index) => (
            <StatusText
              status={st.status}
              text={st.text}
              key={label + index + st}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TextInput;
