import { Link } from "react-router-dom";
import "../../stylesheets/elements/_next.scss";

const Next = (props) => {
  return (
    <>
      <Link to={props.to} title="Siguiente" className="nextContainer">
        <i className="arrowIcon fas fa-arrow-right"></i>
        <span>Siguiente</span>
      </Link>
    </>
  );
};

export default Next;
