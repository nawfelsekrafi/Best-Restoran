import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { closeSidebar } from "../../data/slices/settingsSlice";
import SideMenu from "../../shared/components/SideMenu";
import Pages from "./constant";
import RestoranLogo from "../../assets/logos/restoran_logo.svg";
import closeIcon from "../../assets/icons/close-white.svg";

const Sidebar = () => {
  const { isSidebarOpened } = useSelector((state) => state.settings);
  const sideBar = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSidebarOpened) {
      sideBar.current.classList.add("active");
    } else {
      sideBar.current.classList.remove("active");
    }
  }, [isSidebarOpened]);
  return (
    <div className="sidebar_container" ref={sideBar}>
      <img src={RestoranLogo} alt="" className="restoran_logo" />
      <div className="sidebar_header">
        <img
          src={closeIcon}
          alt=""
          className="closeIcon"
          onClick={() => dispatch(closeSidebar())}
        />
        <span className="title">Menü</span>
        <img src={RestoranLogo} className="mobile_logo" alt="" />
      </div>

      {Pages.map((page) => (
        <SideMenu {...page} key={page.id} />
      ))}
    </div>
  );
};

export default Sidebar;
