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
        <div className="containerForm">
          <form className="form">
            <label className="label" for="name">
              Nombre
            </label>
            <Input className="input" type="text" id="name" name="name" />

            <label className="label" for="date">
              Fecha
            </label>
            <Input
              placeholder="21/01/2021"
              className="input"
              type="text"
              id="date"
              name="date"
            />

            <label className="label" for="time">
              Intervalo
            </label>
            <Input className="input" type="text" id="time" name="time" />
          </form>
        </div>
        <div className="btnGeneratePIN">
          <BtnLink
            to="/ViewFeedback"
            title="Generar el pin de la sesión"
            text="Generar el pin de la sesión"
            className="two"
          ></BtnLink>
          <span className="iconContainer">
            <p className="pinText">2021aaac</p>
            <i class="fa fa-files-o" aria-hidden="true"></i>
          </span>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default GeneratePIN;
