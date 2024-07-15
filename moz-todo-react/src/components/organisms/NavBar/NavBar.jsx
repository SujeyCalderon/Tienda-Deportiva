import React from "react";
import Img from "../../atoms/Img/Img";
import Button from "../../atoms/Button/Button";
import Span from "../../atoms/Span/Span";
import Ul from "../../atoms/Ul/Ul";
import Li from "../../atoms/Li/Li";
import Link from "../../atoms/Link/Link";
import Logo from "../../../assets/img/log.jpeg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Span className="navbar-toggler-icon" />
        </Button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="http://localhost:5173/">
                Inicio
              </Link>
            </Li>
            <Li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="http://localhost:5173/#ropaDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ropa
              </Link>
              <Ul className="dropdown-menu" id="ropaDropdown">
                <Li>
                  <Link className="dropdown-item" href="http://localhost:5173/Dama">
                    Dama
                  </Link>
                </Li>
                <Li>
                  <Link className="dropdown-item" href="http://localhost:5173/Cab">
                    Caballero
                  </Link>
                </Li>
              </Ul>
            </Li>
            <Li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="http://localhost:5173/#calzadoDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Calzado
              </Link>
              <Ul className="dropdown-menu" id="calzadoDropdown">
                <Li>
                  <Link className="dropdown-item" href="http://localhost:5173/da">
                    Dama
                  </Link>
                </Li>
                <Li>
                  <Link className="dropdown-item" href="http://localhost:5173/ca">
                    Caballero
                  </Link>
                </Li>
              </Ul>
            </Li>
            <Li className="nav-item">
              <Link className="nav-link" href="http://localhost:5173/ac">
                Accesorios
              </Link>
            </Li>
            <Li className="nav-item">
              <Link className="nav-link" href="http://localhost:5173/suplementos">
                Suplementos
              </Link>
            </Li>
          </Ul>
        </div>
        <Img src={Logo} alt="Logo" className="navbar-brand" />
      </div>
    </nav>
  );
};

export default NavBar;
