import "../../stylesheets/pages/_feedbackSent.scss";
import HomeLink from "../elements/HomeLink";
import BtnLink from "../elements/BtnLink";
import Footer from "../elements/Footer";

const FeedbackSent = () => {
  return (
    <>
      <main className="mainFeedbackSent">
        <HomeLink></HomeLink>
        <div className="confirmationContainer">
          <p>ANIMACIÓN</p>
          <p className="textFeedbackSent">Tus respuestas han sido enviadas</p>
        </div>
        <div className="btnContainer">
          <BtnLink
            to="/ViewFeedback"
            title="Ir a ver el feedback de la sesión"
            text="Ver feedback"
            className="two"
          ></BtnLink>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default FeedbackSent;
