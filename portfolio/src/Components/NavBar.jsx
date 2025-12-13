import "./ComponentStyle/NavBar.css";
import PrimaryButton from "./PrimaryButton.jsx";

function NavBar() {
  return (
    <div className="NavBarContainer">
      <div className="logoText">
        <h2>
          <span className="Achar">A</span>RGEL <span className="dot">.</span>
        </h2>
      </div>
      <div className="navLinks">
        <ul className="linksList">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
        </ul>
      </div>
      <div className="ContactBtn">
        <PrimaryButton />
      </div>
    </div>
  );
}
export default NavBar;
