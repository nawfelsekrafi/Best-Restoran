import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Button from "../../../shared/components/Button";
import Checkbox from "../../../shared/components/Checkbox";
import RecaptchaV2 from "../../../shared/components/RecaptchaV2";
import TextInput from "../../../shared/components/TextInput";
import ForgetPasswordModal from "../ForgetPasswordModal";

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const validate = (values) => {
  let errors = {};
  errors.email = [];
  errors.password = [];

  if (
    (values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) ||
    !values.email
  ) {
    errors.email.push({
      status: "error",
      text: "Lütfen geçerli bir e-posta adresi girin.",
    });
  }

  if (!values.password) {
    errors.password.push({
      status: "error",
      text: "Lütfen bir şifre girin",
    });
  }

  if (!errors.email.length && !errors.password.length) {
    delete errors.email;
    delete errors.password;
  }
  return errors;
};

export default function Login() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  const [isForgetPasswordModalOpened, setIsForgetPasswordModalOpened] =
    useState(false);

  useEffect(() => {
    document.title = "Giriş Yap | Restoran";
  }, []);

  const openForgetPasswordModal = () => {
    setIsForgetPasswordModalOpened(true);
  };

  const closeForgetPasswordModal = () => {
    setIsForgetPasswordModalOpened(false);
  };

  return (
    <>
      <div className="login_page">
        <div className="header">
          <span className="title">Giriş Yap</span>
          <span className="description">
            Sisteme kayıtla e-posta adresinizle giriş yapabilirsiniz.
          </span>
        </div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="inputs">
            <TextInput
              label="E-posta Adresi"
              value={formik.values.email}
              key="login-email"
              onChange={formik.handleChange}
              page="login"
              name="email"
              status={
                formik.errors.email?.length && formik.errors.email[0].status
              }
              statusTexts={formik.errors.email}
            />
            <TextInput
              label="Şifre"
              secure={true}
              value={formik.values.password}
              onChange={formik.handleChange}
              key="login-password"
              page="login"
              name="password"
              status={
                formik.errors.password?.length &&
                formik.errors.password[0].status
              }
              statusTexts={formik.errors.password}
            />
          </div>
          <div className="check_with_password">
            <Checkbox
              label="Beni Hatırla"
              onChange={(checked) => console.log("Checkbox is now", checked)}
            />
            <span
              className="forget_password"
              onClick={() => openForgetPasswordModal()}
            >
              Şifremi Unuttum
            </span>
          </div>
          <RecaptchaV2 />
          <Button
            label="Giriş Yap"
            type="submit"
            disabled={Object.keys(formik.errors).length}
          />
          <span className="description-2">
            Sisteme giriş yaparken bir sorun ile karşılaşıyorsanız lütfen{" "}
            <span className="email">yemekoperasyonekibi@migrosonline.com</span>{" "}
            adrsesiyle iletişime geçiniz.
          </span>
        </form>
      </div>
      <ForgetPasswordModal
        isOpen={isForgetPasswordModalOpened}
        closeModal={closeForgetPasswordModal}
      />
    </>
  );
}
