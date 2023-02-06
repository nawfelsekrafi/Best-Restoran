import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../data/slices/settingsSlice";
import NavbarNotificationsBox from "../../shared/components/NavbarNotificationsBox";
import RestoranLogo from "../../assets/logos/restoran_logo.svg";
import sidebarIcon from "../../assets/icons/menu.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.pages);

  return (
    <div className="navbar_container">
      <div
        className="sidebarIcon"
        onClick={() => {
          dispatch(openSidebar());
        }}
      >
        <img src={sidebarIcon} alt="" />
      </div>

      <span className="page_name">{currentPage}</span>
      <img src={RestoranLogo} alt="" className="restoran_logo" />
      <div className="notification_admin">
        <NavbarNotificationsBox username="Murat G." role="Restoran Yetkilisi" />
      </div>
    </div>
  );
};

export default Navbar;
