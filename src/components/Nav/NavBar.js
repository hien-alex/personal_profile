import "../../css/Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavElements";

function MyNavBar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <div className="dropdown dropDownMenu">
                <a
                  className="dropDownMenu"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Github
                </a>

                <ul
                  className="dropdown-menu dropDownItem"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item dropDownItem"
                      href="https://github.com/hien-alex"
                      target="_blank"
                    >
                      Personal
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/alex-hien"
                      target="_blank"
                    >
                      Academic
                    </a>
                  </li>
                </ul>
              </div>
            </NavItem>

            <NavItem>
              <NavLinks
                href="https://www.linkedin.com/in/alex-hien-496939213/"
                target="_blank"
              >
                LinkedIn
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* <span style={{ color: "#fec89a" }}>Alex</span> */}
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default MyNavBar;
