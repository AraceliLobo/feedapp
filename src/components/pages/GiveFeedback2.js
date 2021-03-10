import "../../stylesheets/pages/_giveFeedback2.scss";
import CheckBox from "../elements/CheckBox";
import Footer from "../elements/Footer";
import Next from "../elements/Next";

const GiveFeedback2 = () => {
  return (
    <>
      <main className="mainGiveFeedback2">
        <h1 className="titleGiveFeedback2">
          ¿Qué te parece el contenido de la clase?
        </h1>
        <form className="formGiveFeedback2"></form>
        <CheckBox
          label="Demasiado rápido"
          id=""
          value="Demasiado rápido"
          name="feedback2_Options"
          content="Demasiado rápido"
        />
        <CheckBox
          label="¡Me duermo!"
          id=""
          value="¡Me duermo!"
          name="feedback2_Options"
          content="¡Me duermo!"
        />
        <CheckBox
          label="¡Genial!"
          id=""
          value="¡Genial!"
          name="feedback2_Options"
          content="¡Genial!"
        />
        <Next to="GiveFeedback3" />
      </main>
      <Footer></Footer>
    </>
  );
};

export default GiveFeedback2;
