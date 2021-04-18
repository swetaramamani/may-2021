import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = () => {
    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    dolla
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"> About
                        </NavLinks>
                        <NavLinks to="discover"> Dicover
                        </NavLinks>
                        <NavLinks to="services"> Services
                        </NavLinks>
                        <NavLinks to="signup"> Sign Up
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
    )
}

export default Navbar
