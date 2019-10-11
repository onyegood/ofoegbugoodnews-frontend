import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {logoutUserRequest} from "../../store/actions/auth";

class NavLinkItems extends Component {

    state = {
        info: {}
    }

    componentDidMount = () => {
        let data = JSON.parse(sessionStorage.getItem('ud'));
        this.setState({ info: data })
    };
    
    render() {

        const {info} = this.state;
        const {isAuthenticated, auth, logout} = this.props;

        return (
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                {isAuthenticated && <li className="nav-item">
                    <NavLink className="nav-link" to="/user/dashboard">Dashboard</NavLink>
                </li>}

                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact/me">Contact</NavLink>
                </li>

                {isAuthenticated && <li className="nav-item dropdown">
                    <NavLink
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        { info === null ? auth.first_name + ' ' + auth.last_name : info.name }
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink className="dropdown-item" to="/user/accout">Account</NavLink>
                        <NavLink className="dropdown-item" to="/user/settings">Settings</NavLink>
                        <span
                            className="dropdown-item"
                            style={{
                            cursor: 'pointer'
                        }}
                            onClick={() => logout()}>
                            Logout
                        </span>
                    </div>
                </li>}
                {isAuthenticated && <li className="nav-item">
                    <NavLink to="/">
                        <span className="badge">1</span>
                        <img src="../assets/img/bell.png" alt="Notification"/>
                    </NavLink>
                </li>}

                {!isAuthenticated && <li className="nav-item signin">
                    <NavLink className="nav-link" to="/user/login">Sign In</NavLink>
                </li>}
                {!isAuthenticated && <li className="nav-item signup">
                    <NavLink className="nav-link" to="/user/signup">Sign Up</NavLink>
                </li>}

            </ul>
        );
    }
}

NavLinkItems.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        isAuthenticated: !!localStorage.token
    };
}

export default connect(mapStateToProps, {
    logout: logoutUserRequest
}, null, {pure: false})(NavLinkItems);