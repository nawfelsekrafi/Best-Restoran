import { Outlet } from "react-router-dom";
import dotsImg from "../../assets/images/dots.svg";
import MigrosLogo from "../../assets/logos/migros_logo.svg";
import restoranIllustration from "../../assets/images/restaurant_illustration.svg";

const AuthLayout = () => {
  return (
    <div className="auth_layout">
      <div className="fixed_container">
        <div className="top">
          <img src={MigrosLogo} alt="" />
          <img src={dotsImg} alt="" className="dots-1" />
        </div>
        <div className="middle">
          <span className="main-heading">
            Migros Restoran Panel’e
            <br /> Hoş Geldiniz
          </span>
          <img src={restoranIllustration} alt="" />
        </div>
        <div className="bottom">
          <img src={dotsImg} alt="" className="dots-2" />
        </div>
      </div>
      <div className="outlet_container">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
