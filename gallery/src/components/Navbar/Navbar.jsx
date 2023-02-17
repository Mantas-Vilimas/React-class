import "./Navbar.css";
import Button from "../Button/Button";

const Navbar = ({ linkToPage }) => {
  const selectedPage = (value) => {
    linkToPage(value);
  };

  return (
    <nav className="navigation">
      <div>LOGO</div>
      <div className="navigation-links">
        <Button buttonInfo={"home"} text={"Home"} onClick={selectedPage} />
        <Button
          buttonInfo={"gallery"}
          text={"Gallery"}
          onClick={selectedPage}
        />
        <Button
          buttonInfo={"customerSupport"}
          text={"Customer Support"}
          onClick={selectedPage}
        />
      </div>
    </nav>
  );
};

export default Navbar;
