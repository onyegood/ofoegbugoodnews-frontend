import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import UserAvatarCard from "./UserAvatarCard";
import isEmail from "validator/lib/isEmail";
import {
    updateAuthUserEmailRequest,
    updateAuthUserPasswordRequest,
    updateAuthUserProfileRequest
} from "../../../store/actions/auth";
import AvatarPlaceholder from "../../placeholders/AvatarPlaceholder";


class MessageDetailsCard extends Component {
    state = {
        id: this.props.payload
            ? this.props.payload.id
            : null,
        email: this.props.payload
            ? this.props.payload.email
            : '',
        first_name: this.props.payload
            ? this.props.payload.first_name
            : '',    
        last_name: this.props.payload
            ? this.props.payload.last_name
            : '',
        phone: this.props.payload
            ? this.props.payload.phone
            : '',        
        password: this.props.payload
            ? this.props.payload.password
            : '',    
        isLoading: false,
        error: {},
        isEditEmail: false,
        isEditPassword: false,
        isDoneEditingEmail: false,
        isDoneEditingPass: false,
        isEditProfile: false,
        isDoneEditingProfile: false
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.serverErrors });
    }



    validateEmail() {
        const error = {};
        if (!isEmail(this.state.email)) error.email = "Invalid email";  

        return error;
    };

    validatePass() {
        const error = {};
        if (!this.state.password) error.password = "Password is required"

        return error;
    };

    validateProfile() {
        const error = {};
        if (!this.state.first_name) error.first_name = "First Name is required"
        if (!this.state.last_name) error.last_name = "Last Name is required"
        if (!this.state.phone) error.phone = "Phone is required"
        return error;
    };

    onSubmitEmail = (e) => {
        e.preventDefault();
        const error = this.validateEmail(this.state);
        this.setState({ error });
        if (Object.keys(error).length === 0) {
            this.setState({ isLoading: true });
            this.props.updateAuthUserEmailRequest(this.state, this.state.id);
            this.setState({ 
                isEditEmail: !this.state.isEditEmail, 
                isDoneEditingEmail: !this.state.isDoneEditingEmail
            });
        }
    }

    onChangeEmail = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleEditEmail = () => {
        this.setState({
            isEditEmail: !this.state.isEditEmail,
            email: this.props.payload.email,
            id: this.props.payload.id,
            isEditPassword: false,
            isEditProfile: false
        })
    }
    handleCancelEmail = () => {
        this.setState({
            isEditEmail: !this.state.isEditEmail,
            error: {}
        })
    }



    onSubmitPassword = (e) => {
        e.preventDefault();
        const error = this.validatePass(this.state);
        this.setState({ error });
        if (Object.keys(error).length === 0) {
            this.setState({ isLoading: true });
            this.props.updateAuthUserPasswordRequest(this.state, this.state.id);
            this.setState({ 
                isEditPassword: !this.state.isEditPassword, 
                isDoneEditingPass: !this.state.isDoneEditingPass 
            });
        }
    }

    onChangePassword = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleEditPassword = () => {
        this.setState({
            isEditPassword: !this.state.isEditPassword,
            password: '',
            id: this.props.payload.id,
            isEditEmail: false,
            isEditProfile: false
        })
    }
    handleCancelPassword = () => {
        this.setState({
            isEditPassword: !this.state.isEditPassword,
            error: {}
        })
    }


    onSubmitProfile = (e) => {
        e.preventDefault();
        const error = this.validateProfile(this.state);
        this.setState({ error });
        if (Object.keys(error).length === 0) {
            this.setState({ isLoading: true });
            this.props.updateAuthUserProfileRequest(this.state, this.state.id);
            this.setState({ 
                isEditProfile: !this.state.isEditProfile, 
                isDoneEditingProfile: !this.state.isDoneEditingProfile 
            });
        }
    }

    onChangeProfile = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleEditProfile = () => {
        this.setState({
            isEditProfile: !this.state.isEditProfile,
            first_name: this.props.payload.first_name,
            last_name: this.props.payload.last_name,
            phone: this.props.payload.phone,
            id: this.props.payload.id,
            isEditPassword: false,
            isEditEmail: false
        })
    }
    handleCancelProfile = () => {
        this.setState({
            isEditProfile: !this.state.isEditProfile,
            error: {}
        })
    }

    render() {
        const { 
            isEditProfile,
            isDoneEditingProfile,
            isEditEmail, 
            isEditPassword, 
            isDoneEditingEmail, 
            isDoneEditingPass, 
            error } = this.state;
        const payload = this.props.payload || {};

        return <div className="row">
            <div className="col-sm-8">

             {isEditProfile ? 
                <form onSubmit={this.onSubmitProfile}>
                <div className="row">
                   <div className="col-sm-12">
                    <div className="form-group">
                        <input type="text"
                            name="first_name"
                            id="first_name"
                            value={this.state.first_name}
                            onChange={this.onChangeProfile}
                            className={error.first_name
                            ? "form-control is-invalid"
                            : "form-control"}/>
                            <div className="invalid-feedback">{error.first_name}</div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                    <div className="form-group">
                        <input type="text"
                            name="last_name"
                            id="last_name"
                            value={this.state.last_name}
                            onChange={this.onChangeProfile}
                            className={error.last_name
                            ? "form-control is-invalid"
                            : "form-control"}/>
                            <div className="invalid-feedback">{error.last_name}</div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                    <div className="form-group">
                        <input type="text"
                            name="phone"
                            id="phone"
                            value={this.state.phone}
                            onChange={this.onChangeProfile}
                            className={error.phone
                            ? "form-control is-invalid"
                            : "form-control"}/>
                            <div className="invalid-feedback">{error.phone}</div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                        <button 
                        type="submit"
                        className="btn btn-primary btn-block" 
                        style={{height: '50px'}}>
                            <i className="fa fa-edit" />
                            Save
                        </button>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                        <span 
                        className="btn btn-danger btn-block"
                        onClick={this.handleCancelProfile}
                        style={{height: '50px', paddingTop: '11px', cursor: 'pointer'}}>
                           <i className="fa fa-close" />
                           Cancel
                        </span>
                        </div>
                    </div>
                   </div>
                </form> :

            <span className={ isDoneEditingProfile ? 'text-success' : ''}>
            <h2>{payload.first_name + ' ' + payload.last_name}</h2>
            <p><i className="fa fa-phone" /> 
            &nbsp;
            &nbsp;
            {payload.phone}
            &nbsp;
            &nbsp;
            </p>
            <span
                onClick={this.handleEditProfile} 
                title="Change Email"
                style={{ cursor: 'pointer' }}>
                    <i className="fa fa-edit" />
                    Edit Profile
                </span>
            </span>
            }

            <hr />
                {isEditEmail ? 
                <form onSubmit={this.onSubmitEmail}>
                <div className="row">
                   <div className="col-sm-12">
                    <div className="form-group">
                        <input type="email"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            className={error.email
                            ? "form-control is-invalid"
                            : "form-control"}/>
                            <div className="invalid-feedback">{error.email}</div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                        <button 
                        type="submit"
                        className="btn btn-primary btn-block" 
                        style={{height: '50px'}}>
                            <i className="fa fa-edit" />
                            Save
                        </button>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                        <span 
                        className="btn btn-danger btn-block"
                        onClick={this.handleCancelEmail}
                        style={{height: '50px', paddingTop: '11px', cursor: 'pointer'}}>
                           <i className="fa fa-close" />
                           Cancel
                        </span>
                        </div>
                    </div>
                   </div>
                </form> :

                <p className={ isDoneEditingEmail ? 'text-success' : ''}>
                <i className="fa fa-envelope" />
                   &nbsp;
                    {payload.email}
                    &nbsp;
                    &nbsp;
                <span 
                onClick={this.handleEditEmail} 
                title="Change Email"
                style={{ cursor: 'pointer' }}>
                    <i className="fa fa-edit" />
                </span>
                </p>
                }
            <hr />

            {isEditPassword ? 
                <form onSubmit={this.onSubmitPassword}>
                <div className="row">
                   <div className="col-sm-12">
                    <div className="form-group">
                        <input type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            className={error.password
                            ? "form-control is-invalid"
                            : "form-control"} />
                            <div className="invalid-feedback">{error.password}</div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                            <button 
                            type="submit"
                            className="btn btn-primary btn-block" 
                            style={{height: '50px'}}>
                            <i className="fa fa-edit" />
                             Save
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                        <span 
                        className="btn btn-danger btn-block"
                        onClick={this.handleCancelPassword}
                        style={{height: '50px', paddingTop: '11px', cursor: 'pointer'}}>
                        <i className="fa fa-close" />
                        Cancel
                        </span>
                        </div>
                    </div>
                   </div>
                </form> :

               <p className={isDoneEditingPass ? 'text-success' : ''}>
                <i className="fa fa-luck" />
                   &nbsp;
                    xxxx xxxx xxxx 
                    &nbsp;
                    &nbsp;
                <span onClick={this.handleEditPassword} 
                      title="Change Password"
                      style={{ cursor: 'pointer' }}>
                    <i className="fa fa-edit" />
                </span>
                </p>
                }
            <hr />
            <h4>{payload.request_type}</h4>
            <hr />
            </div>

            <div className="col-sm-4 justify-content-center align-self-center">
                {payload.avatar
                    ?
                    <AvatarPlaceholder
                        avatarSrc={payload.avatar}
                        avatarAlt={payload.first_name + ' ' + payload.last_name}
                        avatarClassName={'mx-auto d-block'}
                        avatarWidth={'100%'}
                        avatarHeight={''}
                        avatarMarginBottom={'5%'}
                        avatarMarginTop={'5%'}
                    />
                    :
                    <AvatarPlaceholder
                        avatarAlt={payload.first_name + ' ' + payload.last_name}
                        avatarClassName={'mx-auto d-block'}
                        avatarWidth={'100%'}
                        avatarHeight={''}
                        avatarMarginBottom={'5%'}
                        avatarMarginTop={'5%'}

                    />
                }
                <hr />
                <UserAvatarCard/>
            </div>
        </div>;
    }
}

function mapStateToProps(state, props) {
    return {
        serverErrors: state.formErrors.auth,
        isLoading: state.auth.isLoading,
        payload: state.auth
    };
}

const mapDispatchToProps = {
    updateAuthUserEmailRequest,
    updateAuthUserPasswordRequest,
    updateAuthUserProfileRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageDetailsCard);
