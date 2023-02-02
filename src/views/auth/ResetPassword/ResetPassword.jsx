import { useEffect } from "react";
import Button from "../../../shared/components/Button";
import TextInput from "../../../shared/components/TextInput";

export default function ResetPassword() {
  useEffect(() => {
    document.title = "Şifre Yenileme | Restoran";
  }, []);

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
            value="123123"
            key="reset-password-1"
            statusTexts={[
              { status: "normal", text: "En az 8 karakterden oluşmalıdır." },
              {
                status: "normal",
                text: "En az bir büyük ve bir küçük harf içermelidir.",
              },
              { status: "normal", text: "En az bir rakam içermelidir." },
            ]}
          />
          <TextInput
            label="Yeni Şifre (Tekrar)"
            secure={true}
            value=""
            key="login-password"
            status="normal"
            statusText="Girilen şifre aynı olmalıdır."
          />
        </div>
        <Button label="Değişikliği Kaydet" />
      </div>
    </div>
  );
}
