import React from "react";
import BtnLink from "../elements/BtnLink";
import "../../stylesheets/pages/_landing.scss";

const Landing = () => {
  return (
    <>
      <main className="mainLanding">
        <div className="hero">
          <h1 className="title">FeedApp</h1>
        </div>
        <BtnLink
          to="/GeneratePIN"
          title="Ir a generar PIN"
          text="Generar PIN"
          className="one"
        ></BtnLink>
        <BtnLink
          to="/EnterPIN"
          title="Ir a introducir PIN"
          text="Introducir PIN"
          className="two"
        ></BtnLink>
      </main>
    </>
  );
};

export default Landing;