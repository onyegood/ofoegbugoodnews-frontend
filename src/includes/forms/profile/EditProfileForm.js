import React, { Component } from "react";
import {connect} from "react-redux";
import isEmail from "validator/lib/isEmail";
import {
    updateProfileRequest
} from "../../../store/actions/profile";
import SuccessAlert from "../../messages/alerts/SuccessAlert";

class EditProfileForm extends Component {
  state = {
    id: this.props.profl ? this.props.profl.id : null,
    first_name: this.props.profl ? this.props.profl.first_name : "",
    last_name: this.props.profl ? this.props.profl.last_name : "",
    profession: this.props.profl ? this.props.profl.profession : "",
    email: this.props.profl ? this.props.profl.email : "",
    state: this.props.profl ? this.props.profl.state : "",
    city: this.props.profl ? this.props.profl.city : "",
    phone: this.props.profl ? this.props.profl.phone : "",
    facebook: this.props.profl ? this.props.profl.facebook : "",
    linkedin: this.props.profl ? this.props.profl.linkedin : "",
    twitter: this.props.profl ? this.props.profl.twitter : "",
    instagram: this.props.profl ? this.props.profl.instagram : "",
    image: this.props.profl ? this.props.profl.image : "",

    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ isLoading: true });
      this.props.updateProfileRequest(
        this.state,
        this.props.data.match.params.id
      );
      this.setState({ msg: true });
    }
  };

  validate() {
    const errors = {};
    if (!isEmail(this.state.email)) errors.email = "Invalid email";
    if (!this.state.first_name) errors.first_name = "Can't be blank";
    if (!this.state.last_name) errors.last_name = "Can't be blank";
    if (!this.state.state) errors.state = "Can't be blank";
    if (!this.state.city) errors.city = "Can't be blank";
    if (!this.state.phone) errors.phone = "Can't be blank";
    if (!this.state.facebook) errors.facebook = "Can't be blank";
    if (!this.state.twitter) errors.twitter = "Can't be blank";
    if (!this.state.instagram) errors.instagram = "Can't be blank";
    if (!this.state.linkedin) errors.linkedin = "Can't be blank";

    return errors;
  }

  onChangeImage = e => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    this.createImage(files[0]);
  };

  createImage = file => {
    let reader = new FileReader();

    reader.onload = e => {
      this.setState({
        ...this.state,
        image: e.target.result
      });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { msg, isLoading } = this.state;
    const errors = this.state.errors || {};

    const form = (
      <form onSubmit={this.onSubmit}>
        {msg ? <SuccessAlert /> : ""}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={this.state.first_name}
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
                value={this.state.last_name}
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
                value={this.state.profession}
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
                value={this.state.email}
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
                value={this.state.state}
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
                value={this.state.city}
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
                value={this.state.phone}
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
                type="url"
                id="facebook"
                name="facebook"
                value={this.state.facebook}
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
                type="url"
                id="twitter"
                name="twitter"
                value={this.state.twitter}
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
              <label htmlFor="instagram">Instagram</label>
              <input
                type="url"
                id="instagram"
                name="instagram"
                value={this.state.instagram}
                onChange={this.onChange}
                className={
                  errors.instagram ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.facebook}</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="linkedin">Linkedin</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={this.state.linkedin}
                onChange={this.onChange}
                className={
                  errors.linkedin ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.facebook}</div>
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
            <button
              type="submit"
              className={isLoading ? "btn btn-success" : "btn btn-primary"}
            >
              {isLoading ? "Updated!" : "Update"}
            </button>
          </div>
        </div>
      </form>
    );

    return form;
  }
}

function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
        return {
            profl: state
                .profile
                .profile
                .find(item => item.id === parseInt(props.data.match.params.id))
        }
    }

    return {
        serverErrors: state.formErrors.customer,
        msg : state.profile.msg,
        isLoading : state.profile.isLoading,
        profl: null
    };
};

const mapDispatchToProps = {
  updateProfileRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
