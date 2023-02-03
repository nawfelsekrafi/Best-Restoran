import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaV2 = ({ onChange }) => {
  return (
    <ReCAPTCHA
      sitekey="6Ld9pEIkAAAAAD6_CyL671Z3dK2fYp6IrRPazLCq"
      onChange={onChange}
    />
  );
};

export default RecaptchaV2;
