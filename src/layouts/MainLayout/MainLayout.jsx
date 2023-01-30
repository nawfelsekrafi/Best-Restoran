import { Outlet } from "react-router-dom";
import AuthGuard from "../../shared/guards/AuthGuard";

const MainLayout = () => {
  return (
    <AuthGuard>
      <div className="main_layout">
        <Outlet />
      </div>
    </AuthGuard>
  );
};

export default MainLayout;
