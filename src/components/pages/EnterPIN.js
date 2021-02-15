import "../../stylesheets/pages/_enterPIN.scss";
import HomeLink from "../elements/HomeLink";
import BtnLink from "../elements/BtnLink";
import Footer from "../elements/Footer";
import Input from "../elements/Input";

const EnterPIN = () => {
  return (
    <>
      <main className="mainGeneratePIN">
        <h1 className="titleGeneratePIN">Introduce el PIN de la sesión</h1>
        <HomeLink></HomeLink>
        <div className="containerForm">
          <form className="form">
            <label className="label" for="name">
              Nombre
            </label>
            <Input className="input" type="text" id="name" name="name" />
          </form>
        </div>
        <div className="btnGeneratePIN">
          <BtnLink
            to="/ViewFeedback"
            title="Dar Feedback"
            text="Dar Feedback"
            className="one"
          ></BtnLink>
          <BtnLink
            to="/ViewFeedback"
            title="Ver Feedback"
            text="Ver Feedback"
            className="two"
          ></BtnLink>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default EnterPIN;
