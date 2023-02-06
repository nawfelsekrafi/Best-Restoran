import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../../data/slices/pagesSlice";
import { closeSidebar } from "../../../data/slices/settingsSlice";
import useWindowSize from "../../../hooks/useWindowDimensions";
import icon3 from "../../../assets/icons/sidebar/angle-down.svg";
import icon4 from "../../../assets/icons/sidebar/angle-up.svg";
import placeholderIcon from "../../../assets/icons/sidebar/angle-up.svg";

function SideMenu({ title, icon1, icon2, link, isToggable, childrens, nb }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linkRef = useRef(null);
  const { width } = useWindowSize();
  const childrenRef = useRef(null);
  const [showChildren, setShowChildren] = useState(false);
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  useEffect(() => {
    if (rendered) {
      if (childrens && childrens.length == 3) {
        childrenRef.current.classList.toggle("children--3--isActive");
      }
      if (childrens && childrens.length == 5) {
        childrenRef.current.classList.toggle("children--5--isActive");
      }
    }
  }, [showChildren]);

  const toggleShowChildren = (e, link) => {
    const nodes = document.getElementsByClassName("sideMenu_container");
    [...nodes].forEach((e) => e.classList.remove("sideMenu_container--Active"));
    setShowChildren((prv) => {
      if (!isToggable) {
        navigate("/" + link);
        dispatch(changePage(title));
        linkRef.current.classList.add("sideMenu_container--Active");
        setTimeout(() => {
          if (width < 700) {
            dispatch(closeSidebar());
          }
        }, 200);
      } else {
        e.preventDefault();
        linkRef.current.classList.remove("sideMenu_container--Active");
      }
      return !prv;
    });
  };
  return (
    <>
      {" "}
      <div
        ref={linkRef}
        className="sideMenu_container"
        onClick={(e) => toggleShowChildren(e, link)}
      >
        {icon1 && <img src={icon1} alt="" className="icon1" />}
        {icon2 && <img src={icon2} alt="" className="icon2" />}
        {!icon1 && !icon2 && (
          <img src={placeholderIcon} alt="" className="icon5" />
        )}
        <>
          <span className="label">{title}</span>
          {isToggable && (
            <>
              <img src={icon3} alt="" className="icon3" />
              <img src={icon4} alt="" className="icon4" />
            </>
          )}
          {nb && <span className="number">{nb < 100 ? nb : "+99"}</span>}
        </>
      </div>
      {childrens && (
        <div className="children" ref={childrenRef}>
          {childrens.map((el) => (
            <SideMenu {...el} key={el.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default SideMenu;
