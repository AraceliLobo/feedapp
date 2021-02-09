import "../../stylesheets/pages/_generatePIN.scss";
import HomeLink from "../elements/HomeLink";
import BtnLink from "../elements/BtnLink";
import Footer from "../elements/Footer";
import Input from "../elements/Input";

const GeneratePIN = () => {
  return (
    <>
      <main className="mainGeneratePIN">
        <h1 className="titleGeneratePIN">Introduce los datos de tu sesión</h1>
        <HomeLink></HomeLink>
        <form className="form">
          <Input className="input" type="text" id="name" name="name"></Input>
          <Input className="input" type="text" id="date" name="date"></Input>
          <Input className="input" type="text" id="time" name="time"></Input>
        </form>
        <div className="btnGeneratePIN">
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
