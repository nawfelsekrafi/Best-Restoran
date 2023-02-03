import { useEffect } from "react";
import { useFormik } from "formik";
import Button from "../../../shared/components/Button";
import TextInput from "../../../shared/components/TextInput";

const initialValues = {
  password: "",
  password2: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const validate = (values) => {
  let errors = {};

  errors.password = [];
  errors.password2 = [];

  errors.password.push(
    { status: "normal", text: "En az 8 karakterden oluşmalıdır." },
    {
      status: "normal",
      text: "En az bir büyük ve bir küçük harf içermelidir.",
    },
    { status: "normal", text: "En az bir rakam içermelidir." }
  );

  errors.password2.push({
    status: "normal",
    text: "Girilen şifre aynı olmalıdır.",
  });

  if (values.password && values.password.length < 8) {
    errors.password[0].status = "error";
  }
  if (values.password && values.password.length >= 8) {
    errors.password[0].status = "success";
  }
  if (values.password && !/^(?=.*[A-Z])(?=.*[a-z])/.test(values.password)) {
    errors.password[1].status = "error";
  }
  if (values.password && /^(?=.*[A-Z])(?=.*[a-z])/.test(values.password)) {
    errors.password[1].status = "success";
  }
  if (values.password && !/[\d]/.test(values.password)) {
    errors.password[2].status = "error";
  }
  if (values.password && /[\d]/.test(values.password)) {
    errors.password[2].status = "success";
  }

  if (values.password2 && values.password2 !== values.password) {
    errors.password2[0].status = "error";
  }
  if (values.password2 && values.password2 === values.password) {
    errors.password2[0] = {
      status: "success",
      text: "Girilen şifre aynı olmalıdır.",
    };
  }
  return errors;
};

export default function ResetPassword() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  useEffect(() => {
    document.title = "Şifre Yenileme | Restoran";
  }, []);

  let defaultHelpers1 = [
    { status: "normal", text: "En az 8 karakterden oluşmalıdır." },
    {
      status: "normal",
      text: "En az bir büyük ve bir küçük harf içermelidir.",
    },
    { status: "normal", text: "En az bir rakam içermelidir." },
  ];

  let defaultHelpers2 = [
    {
      status: "normal",
      text: "Girilen şifre aynı olmalıdır.",
    },
  ];

  return (
    <div className="password_page">
      <div className="header">
        <span className="title">Şifre Yenileme</span>
        <span className="description">
          Aşağıdaki alanlara yeni şifrenizi girerek değiştirebilirsiniz.
        </span>
      </div>
      <div className="form">
        <div className="inputs">
          <TextInput
            label="Yeni Şifre"
            secure={true}
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            key="reset-password-1"
            statusTexts={
              formik.errors.password ? formik.errors.password : defaultHelpers1
            }
          />
          <TextInput
            label="Yeni Şifre (Tekrar)"
            secure={true}
            key="login-password"
            status="normal"
            name="password2"
            value={formik.values.password2}
            onChange={formik.handleChange}
            statusTexts={
              formik.errors.password2
                ? formik.errors.password2
                : defaultHelpers2
            }
          />
        </div>
        <Button label="Değişikliği Kaydet" />
      </div>
    </div>
  );
}
