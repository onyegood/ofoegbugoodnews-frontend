import React, {Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import {addUserRequest} from "../../../store/actions/users";

class AddUserForm extends Component {
    state = {
        data: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            password: ''
        },
        errors: {}
    }

    componentWillReceiveProps(nextProps){
        this.setState({errors: nextProps.serverErrors});
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
        this.setState({isLoading: true});
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this
                .props
                .submit(this.state.data)
        }
    }

    validate = data => {
        const errors = {};
        if(!isEmail(data.email))
        errors.email = "Invalid email";
        if(!data.first_name)
        errors.first_name = "First name is required!";
        if(!data.last_name)
        errors.last_name = "Last name is required!";
        if(!data.phone)
        errors.phone = "Phone number is required!";
        if(!data.password)
        errors.password = "Password is required!";

        return errors;
    }



    render() {

            const {data, errors, isLoading} = this.state;

            const ADD_USER_FORM = <form onSubmit={this.onSubmit}>
                <div className="row">

                    <div className="col-sm-6">
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

                    <div className="col-sm-6">    
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

                <div className="col-sm-12">
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
            
               <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="phone"
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

              <div className="col-sm-12">
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
               
                <div className="col-sm-6">
                    <button type = "submit" className = "btn btn-primary">
                    {isLoading ? <span className="fa fa-spinner fa-spin"></span> : ''}
                    Save
                    </button>
                </div>

                </div>
            </form>;

        
        return (
            ADD_USER_FORM
        )
    }

}

AddUserForm.propTypes = {
    submit: propTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        serverErrors: state.formErrors.user,
        isLoading: state.isLoading
    };
}

export default connect(
    mapStateToProps, 
    {submit: addUserRequest})(AddUserForm);
