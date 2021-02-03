import React from "react";
import BtnLink from "../elements/BtnLink";
import "../../stylesheets/pages/_landing.scss";

const Footer = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/AraceliLobo/feedapp" target="_blank">
              FeedApp
            </a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">@FeedApp 2021</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Footer;
