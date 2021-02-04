import "../../stylesheets/elements/_footer.scss";

const Footer = () => {
  return (
    <>
      <nav className="footerContainer">
        <ul className="footerList">
          <li>
            <a href="https://github.com/AraceliLobo/feedapp" target="_blank">
              FeedApp
            </a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">@FeedApp 2021</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Footer;
