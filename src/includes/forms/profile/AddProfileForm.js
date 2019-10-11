import React, { Component } from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import {addProfileRequest} from "../../../store/actions/profile";
import DotLoader from "../../loaders/DotLoader";

class AddProfileForm extends Component {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      state: "",
      city: "",
      phone: "",
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
      image: "",
      profession: ""
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
    if (!data.profession) errors.profession = "Can't be blank";
    if (!data.state) errors.state = "Can't be blank";
    if (!data.city) errors.city = "Can't be blank";
    if (!data.phone) errors.phone = "Can't be blank";
    if (!data.facebook) errors.facebook = "Can't be blank";
    if (!data.twitter) errors.twitter = "Can't be blank";
    if (!data.linkedin) errors.linkedin = "Can't be blank";
    if (!data.instagram) errors.instagram = "Can't be blank";

    return errors;
  };

  onChangeImage = e => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    this.createImage(files[0]);
  };

  createImage = file => {
    let reader = new FileReader();

    reader.onload = e => {
      this.setState({
        data: {
          ...this.state.data,
          image: e.target.result
        }
      });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { data, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-md-6">
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
          </div>

          <div className="col-md-6">
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
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="profession">Profession</label>
              <input
                type="profession"
                id="profession"
                name="profession"
                value={data.profession}
                onChange={this.onChange}
                className={
                  errors.profession ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.profession}</div>
            </div>
          </div>

          <div className="col-md-12">
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
          </div>

          <div className="col-md-6">
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
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={data.city}
                onChange={this.onChange}
                className={
                  errors.city ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.city}</div>
            </div>
          </div>

          <div className="col-md-12">
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
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="facebook">Facebook</label>
              <input
                type="text"
                id="facebook"
                name="facebook"
                value={data.facebook}
                onChange={this.onChange}
                className={
                  errors.facebook ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.facebook}</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="twitter">Twitter</label>
              <input
                type="text"
                id="twitter"
                name="twitter"
                value={data.twitter}
                onChange={this.onChange}
                className={
                  errors.twitter ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.twitter}</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="linkedin">Linkedin</label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                value={data.linkedin}
                onChange={this.onChange}
                className={
                  errors.linkedin ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.linkedin}</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="instagram">Instagram</label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={data.instagram}
                onChange={this.onChange}
                className={
                  errors.instagram ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.instagram}</div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <input
                style={{ display: "none" }}
                ref={fileInput => (this.fileInput = fileInput)}
                type="file"
                onChange={this.onChangeImage}
              />
              <span
                style={{ cursor: "pointer" }}
                onClick={() => this.fileInput.click()}
                className="btn btn-default fa fa-upload"
              />
            </div>
          </div>

          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              {isLoading ? <span className="fa fa-spinner fa-spin" /> : ""}
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}

AddProfileForm.propTypes = {
    submit: propTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        serverErrors: state.formErrors.customer, 
        isLoading: state.isLoading
    };
}

export default connect(mapStateToProps, {submit: addProfileRequest})(AddProfileForm);
