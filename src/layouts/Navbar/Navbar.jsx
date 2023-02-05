import NavbarNotificationsBox from "../../shared/components/NavbarNotificationsBox";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <span className="page_name">Ana Sayfa</span>
      <div className="notification_admin">
        <NavbarNotificationsBox username="Murat G." role="Restoran Yetkilisi" />
      </div>
    </div>
  );
};

export default Navbar;
