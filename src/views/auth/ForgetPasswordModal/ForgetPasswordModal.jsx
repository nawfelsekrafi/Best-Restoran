import { useEffect, useState } from "react";
import Button from "../../../shared/components/Button";
import RecaptchaV2 from "../../../shared/components/RecaptchaV2";
import TextInput from "../../../shared/components/TextInput";
import closeIcon from "../../../assets/icons/close.svg";
import checkIcon from "../../../assets/icons/check.svg";

function ForgetPasswordModal({ isOpen, closeModal }) {
  useEffect(() => {
    document.title = "Şifremi Unuttum | Restoran";
  }, []);
  const [emailSent, setEmailSent] = useState(false);
  const [timeToWait, setTimeToWait] = useState(179);
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 179,
  });

  const handleClick = () => {
    setEmailSent(true);
    lunchTimer();
  };

  useEffect(() => {
    setTime({
      minutes: Math.floor(timeToWait / 60),
      seconds: timeToWait % 60,
    });
  }, [timeToWait]);

  const lunchTimer = () => {
    setTimeToWait(179);
    const timer = setInterval(() => {
      setTimeToWait((prv) => {
        if (prv) return prv - 1;
        else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };

  return (
    <div
      className={isOpen ? "forgetPassword_page isOpen" : "forgetPassword_page"}
    >
      <div className="main_reset_page">
        <div className="header">
          <span className="title">Şifremi Unuttum</span>
          <img src={closeIcon} alt="" onClick={() => closeModal()} />
        </div>
        <div className="forget_form">
          {!emailSent ? (
            <>
              <span>
                Yeni şifrenizi yenileme bağlantısını gönderebileceğimiz sisteme
                kayıtlı e-posta adresinizi yazınız.
              </span>
              <TextInput label="E-posta Adresi" />
              <RecaptchaV2 />
            </>
          ) : (
            <>
              <div className="top">
                <img src={checkIcon} alt="" />
                <span>
                  Şifre yenileme bağlantısı <br />
                  <span className="email">murat.golcu@migros.com.tr </span>
                  e-posta adresinize <br />
                  başarıyla gönderilmiştir.
                </span>
              </div>
              <div className="bottom">
                <span>
                  Şifre Yenileme e-postası elinize ulaşmadıysa; <br />
                  <ul>
                    <li>Spam klasörünü kontrol ediniz.</li>
                    <li>Girdiğiniz e-posta adresini kontrol ediniz.</li>
                    <li>
                      Eğer hala e-posta elinize ulaşmadıysa
                      <span className="migros_support"> Migros Destek </span>ile
                      iletişime geçiniz.
                    </li>
                  </ul>
                </span>
              </div>
            </>
          )}
          {!emailSent || !timeToWait ? (
            <Button label="Gönder" onClick={() => handleClick()} />
          ) : (
            <Button
              isDisabled={true}
              label={`Tekrar Gönder (${
                time.minutes < 10 ? "0" + time.minutes : time.minutes
              }:${time.seconds < 10 ? "0" + time.seconds : time.seconds})`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordModal;
