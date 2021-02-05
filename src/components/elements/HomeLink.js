import { Link } from "react-router-dom";
import "../../stylesheets/elements/_homeLink.scss";

const HomeLink = () => {
  return (
    <Link to="/" title="Vuelve al inicio" className="homeLink">
      <i className="fas fa-home"></i>
    </Link>
  );
};

export default HomeLink;
