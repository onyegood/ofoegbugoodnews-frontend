import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import {createUserRequest} from "../../../store/actions/auth";


class SignupForm extends Component {
    state = {
        data: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            password: ""
        },
        errors: {}
    };

    componentWillReceiveProps(nextProps) {

        this.setState({
            errors: nextProps.serverErrors
        });
        console.log('Next props', nextProps)
    }

    onChange = e => this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.value
        }
    });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    };

    validate = data => {
        const errors = {};

        if (!isEmail(data.email)) 
            errors.email = "Invalid email";
        if (!data.password) 
            errors.password = "Can't be blank";
        if (!data.first_name) 
            errors.first_name = "Can't be blank";
        if (!data.last_name) 
            errors.last_name = "Can't be blank";
        if (!data.phone) 
            errors.phone = "Can't be blank";
        
        return errors;
    };

    render() {
        const { data, errors } = this.state;
        
        console.log("Props data", this.props);
        console.log("State data", this.state);

        const form = <form onSubmit={this.onSubmit}>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={data.last_name}
                            onChange={this.onChange}
                            className={errors.last_name
                            ? "form-control is-invalid"
                            : "form-control"}/>
                        <div className="invalid-feedback">{errors.last_name}</div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={data.first_name}
                            onChange={this.onChange}
                            className={errors.first_name
                            ? "form-control is-invalid"
                            : "form-control"}/>
                        <div className="invalid-feedback">{errors.first_name}</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={this.onChange}
                            className={errors.email
                            ? "form-control is-invalid"
                            : "form-control"}/>
                        <div className="invalid-feedback">{errors.email}</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={data.phone}
                            onChange={this.onChange}
                            className={errors.phone
                            ? "form-control is-invalid"
                            : "form-control"}/>
                        <div className="invalid-feedback">{errors.phone}</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={this.onChange}
                            className={errors.password
                            ? "form-control is-invalid"
                            : "form-control"}/>
                        <div className="invalid-feedback">{errors.password}</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">

                    <button type="submit" className={'btn btn-primary btn-block'}>
                        Sign Up
                    </button>

                    <small className="form-text text-center">
                        <Link to="/">HOME</Link>
                        or
                        <Link to="/user/login">LOGIN</Link>
                        if you have an account
                    </small>
                </div>
            </div>

        </form>;

        return (form);
    }
}

function mapStateToProps(state, props) {
    return {
        serverErrors: state.auth.signup
    };
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {submit: createUserRequest})(SignupForm);