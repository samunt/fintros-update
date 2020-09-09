import * as React from 'react';
import {FC, ReactElement, useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {ThemeContext} from "../contexts/ThemeContext";
import Switch from "react-switch";

type NavBarProps = {
    title: string
}

const NavBar: FC<NavBarProps> = ({title}): ReactElement => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    return (
        <Navbar bg={isDarkMode ? "light" : "dark" } expand="lg">
            <Switch onChange={toggleTheme} checked={isDarkMode} />
            <Navbar.Brand style={!isDarkMode ? { color: 'white' } : {color: 'black'} }>{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item>Odd</NavDropdown.Item>
                        <NavDropdown.Item>Even</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar
