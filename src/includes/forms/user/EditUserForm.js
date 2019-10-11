import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import isEmail from "validator/lib/isEmail";
import history from "../../../history";
import {
    updateUserRequest
} from "../../../store/actions/users";
import SuccessAlert from "../../../includes/messages/alerts/SuccessAlert";
import AvatarPlaceholder from "../../placeholders/AvatarPlaceholder";

class EditUserForm extends Component {
    state = {
            id: this.props.user
                ? this.props.user.id
                : null,
            first_name: this.props.user
                ? this.props.user.first_name
                : '',
            last_name: this.props.user
                ? this.props.user.last_name
                : '',
            email: this.props.user
                ? this.props.user.email
                : '',
            phone: this.props.user
                ? this.props.user.phone
                : '',
            avatar: this.props.user
                ? this.props.user.avatar
                : '',        
        errors: {},
        isEditable: false
    };

    onChange = e => this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state);
        this.setState({errors});
        
        if (Object.keys(errors).length === 0) {
            this.setState({isLoading: true});
            this.props.updateUserRequest(this.state, this.props.data.match.params.id);
            history.push('/all/users');
            this.setState({
                msg: true,
                isEditable: !this.state.isEditable
            });
        }
    };

    validate() {
        const errors = {};
        if(!isEmail(this.state.email))
        errors.email = "Invalid email";
        if(!this.state.first_name)
        errors.first_name = "First name is required!";
        if(!this.state.last_name)
        errors.last_name = "Last name is required!";
        if(!this.state.phone)
        errors.phone = "Phone number is required!";
        
        return errors;
    };

    handleEditable = () => {
        this.setState({
            isEditable: !this.state.isEditable
        })
    }

    handleCancel = () => {
        this.setState({
            isEditable: !this.state.isEditable
        })
    }
    render() {

        const {msg, isLoading, isEditable} = this.state;
        const errors = this.state.errors || {};


        const editForm = <form onSubmit={this.onSubmit}>
            <div className="row"> 
               <div className="col-sm-12"> 
                <div>
                      { this.state.avatar 
                        ? 
                        <AvatarPlaceholder
                            avatarSrc={this.state.avatar}
                            avatarAlt={this.state.first_name +' '+ this.state.last_name}
                            avatarClassName={'rounded mx-auto d-block'}
                            avatarWidth={'150px'}
                            avatarHeight={'150px'}
                            avatarMarginBottom={'5%'}
                            avatarMarginTop={'5%'}
                        /> 
                        : 
                        <AvatarPlaceholder
                            avatarAlt={this.state.first_name +' '+ this.state.last_name}
                            avatarClassName={'rounded mx-auto d-block'}
                            avatarWidth={'150px'}
                            avatarHeight={'150px'}
                            avatarMarginBottom={'5%'}
                            avatarMarginTop={'5%'}
                           
                        />
                    }
                 </div> 
               </div> 

               <div className="col-sm-6">
                <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={this.state.first_name}
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
                            value={this.state.last_name}
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
                        value={this.state.email}
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
                        value={this.state.phone}
                        onChange={this.onChange}
                        className={errors.phone
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.phone}</div>
                </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <button
                            type="submit" 
                            className={isLoading ? 'btn btn-success btn-block' : 'btn-block btn btn-info'}>
                            {isLoading ? 'Updated!' : 'Update'}
                        </button>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <span className={'btn-block btn btn-danger'} onClick={this.handleCancel}>
                            Cancel
                        </span>
                    </div>
                </div>
            </div>
        </form>;


        const readOnlyForm = <form>
            <div className="row">
                {msg ? <SuccessAlert /> : ''}
                <div className="col-sm-12">
                    <div>
                        {this.state.avatar
                            ?
                            <AvatarPlaceholder
                                avatarSrc={this.state.avatar}
                                avatarAlt={this.state.first_name + ' ' + this.state.last_name}
                                avatarClassName={'rounded mx-auto d-block'}
                                avatarWidth={'150px'}
                                avatarHeight={'150px'}
                                avatarMarginBottom={'5%'}
                                avatarMarginTop={'5%'}
                            />
                            :
                            <AvatarPlaceholder
                                avatarAlt={this.state.first_name + ' ' + this.state.last_name}
                                avatarClassName={'rounded mx-auto d-block'}
                                avatarWidth={'150px'}
                                avatarHeight={'150px'}
                                avatarMarginBottom={'5%'}
                                avatarMarginTop={'5%'}

                            />
                        }
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            readOnly
                            value={this.state.first_name}
                            className={'form-control disabled'} />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            readOnly
                            value={this.state.last_name}
                            className={'form-control disabled'} />
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            readOnly
                            value={this.state.email}
                            className={'form-control disabled'} />
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            readOnly
                            value={this.state.phone}
                            className={'form-control disabled'} />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <span className={'btn-block btn btn-dark'} onClick={this.handleEditable}>
                            Edit
                        </span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Link to="/all/users" className={'btn-block btn btn-primary'}>
                            All Users
                        </Link>
                    </div>
                </div>
            </div>
        </form>;

        return ( 
            isEditable ? editForm : readOnlyForm
        );

    }
}

function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
        return {
            user: state
                .users
                .users
                .find(item => item.id === parseInt(props.data.match.params.id))
        }
    }

    return {
        serverErrors: state.formErrors.user,
        msg : state.users.msg,
        isLoading : state.users.isLoading,
        user: null
    };
};

const mapDispatchToProps  = {
    updateUserRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);
