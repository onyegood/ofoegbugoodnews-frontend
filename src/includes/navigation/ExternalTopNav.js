import React from "react";
import NavLinkItems from "./NavLinkItems";
import Hamburger from "../../includes/hamburger/Hamburger";
import ColoredLogo from "../../includes/logo/ColoredLogo";

const ExternalTopNav = () => {
    return (
        <div className="reansp">
            <nav className="white-nav navbar navbar-light navbar-expand-md bg-faded justify-content-center fixed-top">
            <ColoredLogo />
            <Hamburger />
            
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar1">
                <NavLinkItems />
            </div>
        </nav>
        </div>
    )
}

export default ExternalTopNav;