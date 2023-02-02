import errorIcon from "../../../assets/icons/error-fill.svg";
import warningIcon from "../../../assets/icons/warning-fill.svg";
import successIcon from "../../../assets/icons/success-fill.svg";
import normalIcon from "../../../assets/icons/normal-fill.svg";

function StatusText({ status, text }) {
  return (
    <div className="statusText_container">
      {status === "error" && (
        <div>
          <img src={errorIcon} alt="" />
          <span className="label error_text">{text || "Error text"}</span>
        </div>
      )}
      {status === "warning" && (
        <div>
          <img src={warningIcon} alt="" />
          <span className="label warning_text">{text || "Warning text"}</span>
        </div>
      )}
      {status === "success" && (
        <div>
          <img src={successIcon} alt="" />
          <span className="label success_text">{text || "Success text"}</span>
        </div>
      )}
      {status === "normal" && (
        <div>
          <img src={normalIcon} alt="" />
          <span className="label normal_text">{text || "Normal text"}</span>
        </div>
      )}
    </div>
  );
}

export default StatusText;
