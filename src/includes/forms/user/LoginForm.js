import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import {loginUserRequests} from "../../../store/actions/auth";


class LoginForm extends Component {
    state = {
        data: {
            email: "",
            password: ""
        },
        error: {}
    };
    
    onChange = e => this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.value
        }
    });

    onSubmit = e => {
        e.preventDefault();
        const error = this.validate(this.state.data);
        this.setState({error});
        if (Object.keys(error).length === 0) {
            this.props.submit(this.state.data);
        }
    };

    validate = data => {
        const error = {};
        if (!isEmail(data.email)) 
            error.email = "Invalid email";
        if (!data.password) 
            error.password = "Can't be blank";

        return error;
    };


    render() {

        const { data, error } = this.state;
              
            const form = <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={this.onChange}
                        className={error.email
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{error.email}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={this.onChange}
                        className={error.password
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{error.password}</div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    Login
                </button>

                <small className="form-text text-center">
                    <Link to="/">HOME</Link>
                    or
                    <Link to="/user/signup">SIGN UP</Link>
                    if you don't have an account<br/>
                    <Link to="/user/forgot_password">Forgot Password?</Link>
                </small>
            </form>

        return (form);
    }
}


LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default connect(null, {submit: loginUserRequests})(LoginForm);