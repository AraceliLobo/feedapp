import "../../stylesheets/pages/_generatePIN.scss";
import HomeLink from "../elements/HomeLink";
import BtnLink from "../elements/BtnLink";
import Footer from "../elements/Footer";

const GeneratePIN = () => {
  return (
    <>
      <header className="header">
        <h1 className="title">Introduce los datos de tu sesión</h1>
        <HomeLink></HomeLink>
      </header>
      <main className="mainGeneratePIN">
        <div className="inputContainer"></div>
        <div className="btnContainer">
          <BtnLink
            to="/ViewFeedback"
            title="Generar el pin de la sesión"
            text="Generar el pin de la sesión"
            className="two"
          ></BtnLink>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default GeneratePIN;
