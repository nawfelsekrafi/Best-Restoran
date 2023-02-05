import bellIcon from "../../../assets/icons/active-notif-bell.svg";
import downUpIcon from "../../../assets/icons/angle-down.svg";

function NavbarNotificationsBox({ username, role }) {
  return (
    <div className="navbar_notifications_box">
      <img src={bellIcon} alt="" className="bell_icon" />
      <div className="username_role">
        <span className="username">{username}</span>
        <span className="role">{role}</span>
      </div>
      <img src={downUpIcon} alt="" className="down_up_icon" />
    </div>
  );
}

export default NavbarNotificationsBox;
