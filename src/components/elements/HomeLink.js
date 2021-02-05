import { Link } from "react-router-dom";
import "../../stylesheets/elements/_homeLink.scss";

const HomeLink = () => {
  return (
    <nav className="homeLinkContainer">
      <Link to="/" title="Vuelve al inicio">
        <i className="fas fa-home"></i>
      </Link>
    </nav>
  );
};

export default HomeLink;
