import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as NotFoundImg } from "../../../assets/images/not-found-1.svg";
import Button from "../Button";

function NotFound() {
  return (
    <div className="not__found__container">
      <span className="title">
        Oops. The page you were looking for doesn’t exist
      </span>
      <span className="description">
        We are sorry that the page you are looking for could not be found. We
        recommend that you return to the main page.
      </span>

      <Link to={"/"} className="button">
        <Button label="Back to Home Page" />
      </Link>
      <NotFoundImg />
    </div>
  );
}
export default NotFound;
