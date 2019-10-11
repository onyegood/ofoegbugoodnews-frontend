import React, { Component } from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import {addCustomerRequest} from "../../../store/actions/customer";
import DotLoader from "../../loaders/DotLoader";
import ReactQuill from "react-quill";

class AddCustomerForm extends Component {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      state: "",
      city: "",
      phone: ""
    },
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.serverErrors });
  }

  onChange = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    this.setState({ isLoading: true });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};

    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.first_name) errors.first_name = "Can't be blank";
    if (!data.last_name) errors.last_name = "Can't be blank";
    if (!data.address) errors.address = "Can't be blank";
    if (!data.state) errors.state = "Can't be blank";
    if (!data.city) errors.city = "Can't be blank";
    if (!data.phone) errors.phone = "Can't be blank";

    return errors;
  };

  handleEditorChange = e => {
    this.setState({
        data: {
            ...this.state.data,
            address: e
        }
    });
  };

  render() {
    const { data, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={data.first_name}
            onChange={this.onChange}
            className={
              errors.first_name ? "form-control is-invalid" : "form-control"
            }
          />
          <div className="invalid-feedback">{errors.first_name}</div>
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={data.last_name}
            onChange={this.onChange}
            className={
              errors.last_name ? "form-control is-invalid" : "form-control"
            }
          />
          <div className="invalid-feedback">{errors.last_name}</div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={this.onChange}
            className={
              errors.email ? "form-control is-invalid" : "form-control"
            }
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={data.state}
            onChange={this.onChange}
            className={
              errors.state ? "form-control is-invalid" : "form-control"
            }
          />
          <div className="invalid-feedback">{errors.state}</div>
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={data.city}
            onChange={this.onChange}
            className={errors.city ? "form-control is-invalid" : "form-control"}
          />
          <div className="invalid-feedback">{errors.city}</div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={this.onChange}
            className={
              errors.phone ? "form-control is-invalid" : "form-control"
            }
          />
          <div className="invalid-feedback">{errors.phone}</div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <ReactQuill
              modules={AddCustomerForm.modules}
              formats={AddCustomerForm.formats}
              value={data.address}
              onChange={this.handleEditorChange}
              className={errors.address ? "is-invalid" : ""}
            />
          <div className="invalid-feedback">{errors.address}</div>
        </div>

        <button type="submit" className="btn btn-primary">
          {isLoading ? <span className="fa fa-spinner fa-spin" /> : ""}
          Save
        </button>
      </form>
    );
  }
}

AddCustomerForm.propTypes = {
    submit: propTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        serverErrors: state.formErrors.customer, 
        isLoading: state.isLoading
    };
}

//Text Editor configurations
AddCustomerForm.modules = {
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

AddCustomerForm.formats = [
  'header', 'font', 'size', 'bold', 'italic',
  'underline', 'strike', 'blockquote', 'list',
  'bullet', 'link', 'image', 'video', 'code-block',
  'clean'
]

export default connect(mapStateToProps, {submit: addCustomerRequest})(AddCustomerForm);
