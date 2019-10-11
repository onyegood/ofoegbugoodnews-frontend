import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUserRequest } from "../../store/actions/auth";

class TopNav extends Component {
  state = {
    isOpen: false
  };

  render() {
    const { auth, logout } = this.props;

    return (
    
        <div>

        <Link to ="/">Home</Link>
        <Link to ="/all/customers">Customers</Link>
        <Link to="/new/customer">Add Customer</Link>
        <Link to="/">{auth.first_name}</Link>
        
        <span style={{ cursor: 'pointer' }} onClick={() => logout()}>Logout</span>

        </div>
    );
  }
}

TopNav.propTypes = {
  auth: PropTypes.shape({
    email: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout: logoutUserRequest },
  null, { pure: false })(TopNav);
