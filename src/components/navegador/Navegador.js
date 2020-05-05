import React, {useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { FaUserTie, FaIdCard } from "react-icons/fa";
import { IoMdReorder } from "react-icons/io";
import Sidebar from "./Sidebar";
import logo from "../../img/logo.png";
import "./navegador.scss";
import { Link } from "react-router-dom";
import '../../App.scss'

const Navegador = ({darkMode, setDarkMode}) => {

  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
    <div>
      <Navbar className="nav-bar justify-content-end" >
        <Link className="navbar-brand  navbar-text font-weight-bold" 
        to="/"
        >
        <Image
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"  
          />{" "}
        Spotify
        </Link >

        <Nav className="mr-auto "  >
        <ul className="navbar-nav mr-auto  ">
              <li className="nav-item ">
                <Link to={"/login"} className="nav-link">
                  <FaUserTie className="mx-1" />
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/preguntas"} className="nav-link">
                  <FaIdCard className="mx-1" />
                  Preguntas
                </Link>
              </li>
            </ul>
        </Nav>

          {/* Button para el sidebar */}
        <IoMdReorder className="sidebar__toggle" onClick={toggle} />
      </Navbar>

        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      <Sidebar toggle={toggle} isOpen={toggleState} />
    </div>
  );
};

export default Navegador;
