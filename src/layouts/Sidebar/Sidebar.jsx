import Pages from "./constant";
import SideMenu from "../../shared/components/SideMenu";
import RestoranLogo from "../../assets/logos/restoran_logo.svg";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <img src={RestoranLogo} alt="" className="restoran_logo" />
      <span className="title">Menü</span>
      {Pages.map((page) => (
        <SideMenu {...page} key={page.id} />
      ))}
    </div>
  );
};

export default Sidebar;
