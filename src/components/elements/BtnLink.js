import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/elements/_btnLink.scss";

const BtnLink = (props) => {
  return (
    <>
      <Link
        to={props.to}
        title={props.title}
        className={`btn__${props.className}`}
      >
        {props.text}
      </Link>
    </>
  );
};

export default BtnLink;
