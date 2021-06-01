import "../css/Nav.css";
import NavItem from "./NavItems";

function NavBar() {
  return (
    <div className="Nav">
      <nav>
        <a href="/" className="nav-Name">
          Alex Hien
        </a>
        <ul className="nav-Links ml-auto">
          <NavItem Item={"Projects"} PageURL={"/Projects"} />
          <NavItem Item={"About Me"} PageURL={"/AboutMe"} />
          <NavItem Item={"Contact"} PageURL={"/Contact"} />
          <NavItem Item={"Home"} PageURL={"/"} />
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
