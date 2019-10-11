import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import ReactQuill from "react-quill";
import { addExperienceRequest } from "../../../store/actions/experience";
import DotLoader from "../../../includes/loaders/DotLoader";
import classes from "../../cards/css/SwitchButton.css";
import DatePicker from "react-datepicker";
import moment from "moment";


class AddExperienceForm extends Component {
  state = {
    data: {
      job_title: "",
      achievement: "",
      company: "",
      start_date: "",
      end_date: "",
      active: false
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

    if (!data.job_title) errors.job_title = "Can't be blank";
    if (!data.company) errors.company = "Can't be blank";
    if (!data.achievement) errors.achievement = "Can't be blank";
    if (!data.start_date) errors.start_date = "Can't be blank";
    if (!data.end_date) errors.end_date = "Can't be blank";
    return errors;
  };

  handleEditorChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        achievement: e
      }
    });
  };

  handleCheckBox = () => {
    this.setState({
      data: {
        ...this.state.data,
        active: !this.state.data.active
      }
    });
  };
  /* //react-datepicker methods and Implementations
  handleStartDate = date => {
    this.setState({
      data: {
        ...this.state.data,
        start_date: date
      }
      
    });
  };

  handleEndDate = date => {
    this.setState({
      data: {
        ...this.state.data,
        end_date: date
      }
    });
  };

  <DatePicker
                selected={this.state.data.start_date}
                onChange={this.handleStartDate}
                className="form-control"
              />
 <DatePicker
                selected={this.state.data.end_date}
                onChange={this.handleEndDate}
                className="form-control"
              />             
*/
  render() {
    const { data, errors, isLoading } = this.state;
    console.log("Real State", data);

    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="job_title">Job Title</label>
              <input
                type="text"
                id="job_title"
                name="job_title"
                value={data.job_title}
                onChange={this.onChange}
                className={
                  errors.job_title ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.job_title}</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={data.company}
                onChange={this.onChange}
                className={
                  errors.company ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.company}</div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="achievement">Achievement</label>
              <textarea
                id="achievement"
                name="achievement"
                row="10"
                value={data.achievement}
                onChange={this.onChange}
                className={
                  errors.achievement ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.achievement}</div>
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
                className={
                  errors.start_date ? "form-control is-invalid" : "form-control"
                }
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
                className={
                  errors.end_date ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.end_date}</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              I currently work here
              <label className={classes.switch}>
                <input
                  type="checkbox"
                  checked={data.active}
                  onChange={this.handleCheckBox}
                />
                <span className={`${classes.slider} ${classes.round}`} />
              </label>
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

AddExperienceForm.propTypes = {
  submit: propTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    serverErrors: state.formErrors.experience,
    isLoading: state.isLoading
  };
}

AddExperienceForm.modules = {
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

AddExperienceForm.formats = [
  'header', 'font', 'size', 'bold', 'italic',
  'underline', 'strike', 'blockquote', 'list',
  'bullet', 'link', 'image', 'video', 'code-block',
  'clean'
]
export default connect(mapStateToProps, { submit: addExperienceRequest })(
  AddExperienceForm
);
