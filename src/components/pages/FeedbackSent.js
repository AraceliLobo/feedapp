import "../../stylesheets/pages/_feedbackSent.scss";
import HomeLink from "../elements/HomeLink";
import Animation from "../elements/Animation";
import BtnLink from "../elements/BtnLink";
import Footer from "../elements/Footer";

const FeedbackSent = () => {
  return (
    <>
      <main className="mainFeedbackSent">
        <HomeLink></HomeLink>
        <div className="confirmationContainer">
          <Animation result="https://assets5.lottiefiles.com/packages/lf20_toncrcj3.json"></Animation>
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
