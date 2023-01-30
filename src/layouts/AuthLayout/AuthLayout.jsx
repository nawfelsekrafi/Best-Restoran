import { Outlet } from "react-router-dom";
import AuthGuard from "../../shared/guards/AuthGuard";

const AuthLayout = () => {
  return (
      <div className="auth_layout">
        <Outlet />
      </div>
  );
};

export default AuthLayout;
