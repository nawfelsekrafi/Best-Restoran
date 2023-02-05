import { Outlet } from "react-router-dom";
import AuthGuard from "../../shared/guards/AuthGuard";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const MainLayout = () => {
  return (
    <AuthGuard>
      <div className="main_layout">
        <Sidebar />
        <div className="main">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </AuthGuard>
  );
};

export default MainLayout;
