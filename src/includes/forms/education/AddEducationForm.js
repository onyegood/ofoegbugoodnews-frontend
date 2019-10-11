import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { addEducationRequest } from "../../../store/actions/schools";
import DotLoader from "../../../includes/loaders/DotLoader";

class AddEducationForm extends Component {
  state = {
    data: {
      course_of_study: "",
      school: "",
      certificate: "",
      start_date: "",
      end_date: ""
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

  onChangeImage = e => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    this.createImage(files[0]);
  };

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

    if (!data.course_of_study) errors.course_of_study = "Can't be blank";
    if (!data.school) errors.school = "Can't be blank";
    if (!data.certificate) errors.certificate = "Can't be blank";
    if (!data.start_date) errors.start_date = "Can't be blank";
    if (!data.end_date) errors.end_date = "Can't be blank";
    return errors;
  };


  render() {
    const { data, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>

      <div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="course_of_study">Course of study</label>
          <input
            type="text"
            id="course_of_study"
            name="course_of_study"
            value={data.course_of_study}
            onChange={this.onChange}
            className={
              errors.course_of_study ? "form-control is-invalid" : "form-control"
            }
          />
          <div className="invalid-feedback">{errors.course_of_study}</div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            value={data.school}
            onChange={this.onChange}
            className={errors.school ? "form-control is-invalid" : "form-control"}
          />
          <div className="invalid-feedback">{errors.school}</div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="certificate">Certificate</label>
          <input
            type="text"
            id="certificate"
            name="certificate"
            value={data.certificate}
            onChange={this.onChange}
            className={errors.certificate ? "form-control is-invalid" : "form-control"}
          />
          <div className="invalid-feedback">{errors.certificate}</div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            value={data.start_date}
            onChange={this.onChange}
            className={errors.start_date ? "form-control is-invalid" : "form-control"}
          />
          <div className="invalid-feedback">{errors.start_date}</div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="end_date">End Date</label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            value={data.end_date}
            onChange={this.onChange}
            className={errors.end_date ? "form-control is-invalid" : "form-control"}
          />
          <div className="invalid-feedback">{errors.end_date}</div>
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

AddEducationForm.propTypes = {
  submit: propTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    serverErrors: state.formErrors.customer,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps, { submit: addEducationRequest })(
  AddEducationForm
);
