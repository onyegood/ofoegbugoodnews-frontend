import React from "react";
import {NavLink} from "react-router-dom";
const ColoredLogo = () => {
    return (
        <NavLink to="/" className="navbar-brand d-flex w-50 mr-auto">
            <img src="assets/img/logo.png" alt="Onyekachi Goodnews Ofoegbu" height="50px" />
        </NavLink>
    );
}

export default ColoredLogo;