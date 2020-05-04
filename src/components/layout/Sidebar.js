import React from 'react';
import { NavItem, NavLink, Nav } from 'react-bootstrap';
import { FaTimesCircle, FaBriefcase, FaMoneyBill, FaAddressBook, FaSignOutAlt } from "react-icons/fa";

const navList = [
    { icon: <FaBriefcase />, link: "/", menu: "Examen" },
    { icon: <FaMoneyBill />, link: "#", menu: "Tutorial" },
    { icon: <FaAddressBook />, link: "#", menu: "Promedio" },
    { icon: <FaSignOutAlt />, link: "#", menu: "Salir" }
];

const SidebarComponent = (props ) => {

    return (
       

        <div className={`sidebar ${props.isOpen ? 'sidebar-visible' : ''}` }  >
            <FaTimesCircle className="sidebar__close h2" onClick={props.toggle} />
            <div className="sidebar__menu mt-3 "  >
                <Nav className="list-unstyled pb-3"  >
                    {navList.map((nav, i) => (
                        <NavItem key={i} >
                            <NavLink href={nav.link}>
                                <span className="mr-3">{nav.icon}</span> {nav.menu}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav >
            </div>
        </div>
    
    );
}

export default SidebarComponent;


