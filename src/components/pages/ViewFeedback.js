import "../../stylesheets/pages/_viewFeedback.scss";
import HomeLink from "../elements/HomeLink";
import Footer from "../elements/Footer";

const ViewFeedback = () => {
  return (
    <>
      <main className="mainViewFeedback">
        <HomeLink></HomeLink>
        <div className="textContainer">
          <p className="textViewFeedback">[FEEDBACK VISUALIZATION]</p>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default ViewFeedback;
