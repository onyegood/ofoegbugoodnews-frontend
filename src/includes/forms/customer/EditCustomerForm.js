import React, { Component } from "react";
import {connect} from "react-redux";
import isEmail from "validator/lib/isEmail";
import {
    updateCustomerRequest
} from "../../../store/actions/customer";
import SuccessAlert from "../../messages/alerts/SuccessAlert";
import ReactQuill from "react-quill";

class EditCustomerForm extends Component {
    state = {
            id: this.props.customer
                ? this.props.customer.id
                : null,
            first_name: this.props.customer
                ? this.props.customer.first_name
                : '',
            last_name: this.props.customer
                ? this.props.customer.last_name
                : '',
            email: this.props.customer
                ? this.props.customer.email
                : '',
            address: this.props.customer
                ? this.props.customer.address
                : '',
            state: this.props.customer
                ? this.props.customer.state
                : '',
            city: this.props.customer
                ? this.props.customer.city
                : '',
            phone: this.props.customer
                ? this.props.customer.phone
                : '',
        errors: {}
    };

    // componentWillReceiveProps(nextProps) {
    //     this.setState({errors: nextProps.serverErrors});

    //     this.setState({
    //             id: nextProps.customer.id,
    //             first_name: nextProps.customer.first_name,
    //             last_name: nextProps.customer.last_name,
    //             email: nextProps.customer.email,
    //             address: nextProps.customer.address,
    //             state: nextProps.customer.state,
    //             city: nextProps.customer.city,
    //             phone: nextProps.customer.phone
    //         });
        
    // };

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
            this.props.updateCustomerRequest(this.state, this.props.data.match.params.id);
            this.setState({msg: true});
        }
    };

    validate() {
        const errors = {};
        if (!isEmail(this.state.email)) 
            errors.email = "Invalid email";
        if (!this.state.first_name) 
            errors.first_name = "Can't be blank";
        if (!this.state.last_name) 
            errors.last_name = "Can't be blank";
        if (!this.state.address) 
            errors.address = "Can't be blank";
        if (!this.state.state) 
            errors.state = "Can't be blank";
        if (!this.state.city) 
            errors.city = "Can't be blank";
        if (!this.state.phone) 
            errors.phone = "Can't be blank";
        
        return errors;
    };

    handleEditorChange = e => {
    this.setState({
        ...this.state,
        address: e
    });
  };
    render() {

        const {msg, isLoading} = this.state;
        const errors = this.state.errors || {};


        const form = <form onSubmit={this.onSubmit}>
                { msg ? <SuccessAlert /> : '' }
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

                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={this.state.state}
                        onChange={this.onChange}
                        className={errors.state
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.state}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={this.state.city}
                        onChange={this.onChange}
                        className={errors.city
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.city}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChange}
                        className={errors.phone
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.phone}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <ReactQuill
                        modules={EditCustomerForm.modules}
                        formats={EditCustomerForm.formats}
                        value={this.state.address}
                        onChange={this.handleEditorChange}
                        className={errors.address ? "is-invalid" : ""}
                    />
                    <div className="invalid-feedback">{errors.address}</div>
                </div>

                <button 
                    type="submit" 
                    className={isLoading ? 'btn btn-success' : 'btn btn-primary'}>
                    {isLoading ? 'Updated!' : 'Update'}
                </button>

        </form>;

        return ( 
            form
        );

    }
}

function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
        return {
            customer: state
                .customers
                .customers
                .find(item => item.id === parseInt(props.data.match.params.id))
        }
    }

    return {
        serverErrors: state.formErrors.customer,
        msg : state.customers.msg,
        isLoading : state.customers.isLoading,
        customer: null
    };
};

const mapDispatchToProps  = {
    updateCustomerRequest
}


//Text Editor configurations
EditCustomerForm.modules = {
  toolbar: [
    [
      { header: '1' }, 
      { header: '2' },
      { font: [] }
    ],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
  ]
};

EditCustomerForm.formats = [
  'header', 'font', 'size', 'bold', 'italic',
  'underline', 'strike', 'blockquote', 'list',
  'bullet', 'link', 'image', 'video', 'code-block',
  'clean'
]
export default connect(mapStateToProps, mapDispatchToProps)(EditCustomerForm);
