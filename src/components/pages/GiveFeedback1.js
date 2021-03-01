import "../../stylesheets/pages/_giveFeedback1.scss";
import CheckBox from "../elements/CheckBox";
import Footer from "../elements/Footer";
import Next from "../elements/Next";

const GiveFeedback1 = () => {
  return (
    <>
      <main className="mainGiveFeedback1">
        <h1 className="titleGiveFeedback1">¿Cómo te sientes?</h1>
        <form className="formGiveFeedback1"></form>
        <CheckBox
          label="Concentrada"
          id=""
          value="Concentrada"
          name="feedback1_Options"
          content="Concentrada"
        />
        <CheckBox
          label="Distraída"
          id=""
          value="Distraída"
          name="feedback1_Options"
          content="Distraída"
        />
        <CheckBox
          label="¡A tope!"
          id=""
          value="¡A tope!"
          name="feedback1_Options"
          content="¡A tope!"
        />
        <CheckBox
          label="Quiero llorar"
          id=""
          value="Quiero llorar"
          name="feedback1_Options"
          content="Quiero llorar"
        />
        <Next to="GiveFeedback2" />
      </main>
      <Footer></Footer>
    </>
  );
};

export default GiveFeedback1;
