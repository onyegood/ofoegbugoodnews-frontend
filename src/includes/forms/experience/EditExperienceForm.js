import React, { Component } from "react";
import {connect} from "react-redux";
import ReactQuill from "react-quill";
import {
    updateExperienceRequest
} from "../../../store/actions/experience";
import SuccessAlert from "../../messages/alerts/SuccessAlert";

class EditExperienceForm extends Component {
  state = {
    id: this.props.experience ? this.props.experience.id : null,
    job_title: this.props.experience ? this.props.experience.job_title : "",
    company: this.props.experience ? this.props.experience.company : "",
    achievement: this.props.experience ? this.props.experience.achievement : "",
    start_date: this.props.experience ? this.props.experience.start_date : "",
    end_date: this.props.experience ? this.props.experience.end_date : "",
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
      this.props.updateExperienceRequest(
        this.state,
        this.props.data.match.params.id
      );
      this.setState({ msg: true });
    }
  };

  validate() {
    const errors = {};
    if (!this.state.job_title) errors.job_title = "Can't be blank";
    if (!this.state.company) errors.company = "Can't be blank";
    if (!this.state.achievement) errors.achievement = "Can't be blank";
    if (!this.state.start_date) errors.start_date = "Can't be blank";
    if (!this.state.end_date) errors.end_date = "Can't be blank";

    return errors;
  }

  handleEditorChange = e => {
    this.setState({
        ...this.state,
        achievement: e
    });
  };

  render() {
    const { msg, isLoading } = this.state;
    const errors = this.state.errors || {};

    const form = (
      <form onSubmit={this.onSubmit}>
        {msg ? <SuccessAlert /> : ""}
        <div className="row">
          {console.log("Hello this is job title", this.state.job_title)}

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="job_title">Job Title</label>
              <input
                type="text"
                id="job_title"
                name="job_title"
                value={this.state.job_title}
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
                value={this.state.company}
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
                value={this.state.achievement}
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
                value={this.state.start_date}
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
                value={this.state.end_date}
                onChange={this.onChange}
                className={
                  errors.end_date ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.end_date}</div>
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
        console.log("Hello", props.data.match.params.id);
        return {
            experience: state.experiences.experiences.find(item => item.id === parseInt(props.data.match.params.id))
            
        }
    }

    return {
        serverErrors: state.formErrors.experience,
        msg : state.experiences.msg,
        isLoading : state.experiences.isLoading,
        experience: null
    };
};

const mapDispatchToProps  = {
    updateExperienceRequest
}


EditExperienceForm.modules = {
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

EditExperienceForm.formats = [
  'header', 'font', 'size', 'bold', 'italic',
  'underline', 'strike', 'blockquote', 'list',
  'bullet', 'link', 'image', 'video', 'code-block',
  'clean'
]
export default connect(mapStateToProps, mapDispatchToProps)(EditExperienceForm);