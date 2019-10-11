import React from "react";
import {NavLink} from "react-router-dom";
const WhiteLogo = () => {
    return (
        <NavLink to="/" className="navbar-brand d-flex w-50 mr-auto" style={{ color: '#ffffff' }}>
            <img src="assets/img/logoWhite.png" alt="Onyekachi Goodnews Ofoegbu" height="50px" />
        </NavLink>
    );
}

export default WhiteLogo;