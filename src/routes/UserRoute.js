import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class UserRoute extends Component {

    state = {
    }
    render(){

        const {
            isAuthenticated,
            component: Component,
            ...rest 
        } = this.props

    return (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
    />)

    }
}

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!localStorage.token
    };
}

export default connect(mapStateToProps)(UserRoute);