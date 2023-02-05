import { NavLink } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowDimensions";
import icon3 from "../../../assets/icons/sidebar/angle-down.svg";
import icon4 from "../../../assets/icons/sidebar/angle-up.svg";
import placeholderIcon from "../../../assets/icons/sidebar/angle-up.svg";
import { useState } from "react";

function SideMenu({ title, icon1, icon2, link, isToggable, childrens, nb }) {
  const { width } = useWindowSize();
  const [showChildren, setShowChildren] = useState(false);
  const toggleShowChildren = () => {
    setShowChildren((prv) => {
      return !prv;
    });
  };
  return (
    <>
      {" "}
      <NavLink
        style={width < 1101 ? { width: "fit-content" } : {}}
        className={({ isActive }) =>
          isActive
            ? "sideMenu_container sideMenu_container--Active"
            : "sideMenu_container"
        }
        to={"/" + link}
        onClick={toggleShowChildren}
        end
      >
        {icon1 && <img src={icon1} alt="" className="icon1" />}
        {icon2 && <img src={icon2} alt="" className="icon2" />}
        {!icon1 && !icon2 && (
          <img src={placeholderIcon} alt="" className="icon5" />
        )}
        {width > 1101 && <span className="label">{title}</span>}
        {width > 1101 && isToggable && (
          <img src={icon3} alt="" className="icon3" />
        )}
        {width > 1101 && isToggable && (
          <img src={icon4} alt="" className="icon4" />
        )}
        {width > 1101 && nb && (
          <span className="number">{nb < 100 ? nb : "+99"}</span>
        )}
      </NavLink>
      {showChildren &&
        childrens &&
        childrens.map((el) => <SideMenu {...el} key={el.id} />)}
    </>
  );
}

export default SideMenu;
