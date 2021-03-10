import "../../stylesheets/pages/_enterPIN.scss";
import HomeLink from "../elements/HomeLink";
import BtnLink from "../elements/BtnLink";
import Footer from "../elements/Footer";
import Input from "../elements/Input";

const EnterPIN = () => {
  return (
    <>
      <main className="mainEnterPIN">
        <h1 className="titleEnterPIN">Introduce el PIN de la sesión</h1>
        <HomeLink></HomeLink>
        <div className="containerEnterPIN">
          <form className="formEnterPIN">
            <label className="label" for="pin">
              PIN
            </label>
            <Input className="input" type="text" id="pin" name="pin" />
          </form>

          <div className="btnEnterPIN">
            <BtnLink
              to="/GiveFeedback1"
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
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default EnterPIN;
