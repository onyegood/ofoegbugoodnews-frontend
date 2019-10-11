import React from "react";
import {NavLink} from "react-router-dom";
import NavLinkItems from "./NavLinkItems";
import HandburgerNavId3 from "../../includes/hamburger/HandburgerNavId3";
import WhiteLogo from "../../includes/logo/WhiteLogo";
const TopNavTransparent = () => {

    return (
        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
        <WhiteLogo />
        <HandburgerNavId3 />
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <NavLinkItems />
        </div>
       </nav>
    )
}

export default TopNavTransparent;