import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaV2 = () => {
  const onRecaptchaChange = (value) => {
    console.log("Recaptcha value:", value);
  };
  return (
    <ReCAPTCHA
      sitekey="6Ld9pEIkAAAAAD6_CyL671Z3dK2fYp6IrRPazLCq"
      onChange={onRecaptchaChange}
    />
  );
};

export default RecaptchaV2;
