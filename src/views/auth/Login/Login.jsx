import { useEffect, useState } from "react";
import Button from "../../../shared/components/Button";
import Checkbox from "../../../shared/components/Checkbox";
import RecaptchaV2 from "../../../shared/components/RecaptchaV2";
import TextInput from "../../../shared/components/TextInput";
import ForgetPasswordModal from "../ForgetPasswordModal";

export default function Login() {
  useEffect(() => {
    document.title = "Giriş Yap | Restoran";
  }, []);

  const [isForgetPasswordModalOpened, setIsForgetPasswordModalOpened] =
    useState(false);
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
        <div className="form">
          <div className="inputs">
            <TextInput
              label="E-posta Adresi"
              value="murat.golcu@migros.com.tr"
              key="login-email"
            />
            <TextInput
              label="Şifre"
              secure={true}
              value="MG449821"
              key="login-password"
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
          <Button label="Giriş Yap" />
          <span className="description-2">
            Sisteme giriş yaparken bir sorun ile karşılaşıyorsanız lütfen{" "}
            <span className="email">yemekoperasyonekibi@migrosonline.com</span>{" "}
            adrsesiyle iletişime geçiniz.
          </span>
        </div>
      </div>
      <ForgetPasswordModal
        isOpen={isForgetPasswordModalOpened}
        closeModal={closeForgetPasswordModal}
      />
    </>
  );
}
