import React from "react";
import {  Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
// import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
   <div>
     <Nav>
     <Logo to="/home">
        <i>{"<Ahmet Nuri>"}</i>
        <span>recipe</span>
      </Logo>
       <Menu>
         <MenuLink to="/about">About</MenuLink>
         <a href="https://github.com" target="blank">Github</a>
         <MenuLink to="/">Logout</MenuLink>
       </Menu>
     </Nav>
   </div>
  );
};

export default Navbar;
