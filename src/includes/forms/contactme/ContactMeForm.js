import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { addContactMeRequest } from "../../../store/actions/contactme";
import isEmail from "validator/lib/isEmail";
import ReactQuill from "react-quill";

class ContactMeForm extends Component {
  state = {
    data: {
      title: "",
      request_type: "",
      brief: "",
      email: "",
      name: "",
      phone: "",
      robotCheck: 0
    },
    errors: {}
    
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.serverErrors });
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors, isLoading: false });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};

    if (!data.title) errors.title = "Title is required!";
    if (!data.request_type) errors.request_type = "Request Type is required!";
    if (!data.brief) errors.brief = "Brief is required!";
    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.phone) errors.phone = "Phone number is required!";
    if (!data.name) errors.name = "Name is required!";
    return errors;
  };


  handleEditorChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        brief: e
      }
    });
  };

  render() {
    const { data, errors, isLoading} = this.state;

    const botCheckSuccess = 1;
    const solution = botCheckSuccess === parseFloat(data.robotCheck);

    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="name">Your Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={this.onChange}
                className={
                  errors.name ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.name}</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Your Email Address</label>
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
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone">Your Phone Number</label>
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
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="request_type">What can I do for you?</label>
              <select
                id="request_type"
                name="request_type"
                value={data.request_type}
                onChange={this.onChange}
                className={
                  errors.request_type ? "form-control is-invalid" : "form-control"
                }
              >
                <option value="">[Select]</option>
                <option value="Web App Development">Web App Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Contract">Contract</option>
                <option value="Other">Other</option>
              </select>
              <div className="invalid-feedback">{errors.request_type}</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="title">Title?</label>
              <select
                id="title"
                name="title"
                value={data.title}
                onChange={this.onChange}
                className={
                  errors.title ? "form-control is-invalid" : "form-control"
                }
              >
                <option value="">[Select]</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Master">Master</option>
                <option value="Dr">Dr</option>
                <option value="Other">Other</option>
              </select>
              <div className="invalid-feedback">{errors.title}</div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="brief">Brief</label>
              <ReactQuill
                modules={ContactMeForm.modules}
                formats={ContactMeForm.formats}
                value={data.brief}
                onChange={this.handleEditorChange}
                className={
                  errors.brief ? "is-invalid" : ""
                }/>
              <div className="invalid-feedback">{errors.brief}</div>
            </div>
          </div>


          <div className="col-md-3 justify-content-center align-self-center">
            <div className="form-group">
              <h3><strong>2 + 3 - 4 =</strong></h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                name="robotCheck"
                id="robotCheck"
                required
                value={data.robotCheck}
                onChange={this.onChange}
                className={"form-control"}
              />
            </div>
          </div>

          <div className="col-md-5 justify-content-center align-self-center">
            <div className="form-group">
              <i className={
                solution ? 'fa fa-check text-success text-center' 
                : 'fa fa-spinner fa-spin text-danger text-center'} />
              { solution 
                ? <small className="text-success"> Wow! Good one, now you can procced</small>  
                : <small className="text-danger"> Waiting for your correct answer</small> 
              }
            </div>
          </div>

          <div className="col-md-12">
            <button type="submit" 
              className={solution ? 'btn btn-primary btn-block' : 'btn btn-primary btn-block displayNon'}>
              {isLoading ? <span className="fa fa-spinner fa-spin" /> : ""}
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

ContactMeForm.propTypes = {
  submit: propTypes.func.isRequired
};

function mapStateToProps(state, props) {
  return {
    serverErrors: state.formErrors.payload,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps, { submit: addContactMeRequest })(
  ContactMeForm
);
