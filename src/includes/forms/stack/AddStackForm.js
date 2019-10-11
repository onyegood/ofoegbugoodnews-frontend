import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { addStackRequest } from "../../../store/actions/stack";
import DotLoader from "../../../includes/loaders/DotLoader";
import ReactQuill from "react-quill";

class AddStackForm extends Component {
  state = {
    data: {
      title: "",
      rate: "",
      brief: "",
      icon: ""
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

    if (!data.title) errors.title = "Can't be blank";
    if (!data.rate) errors.rate = "Can't be blank";
    if (!data.brief) errors.brief = "Can't be blank";
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
          icon: e.target.result
        }
      });
    };
    reader.readAsDataURL(file);
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
    const { data, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={data.title}
                onChange={this.onChange}
                className={
                  errors.title ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.title}</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="rate">Rate</label>
              <select
                id="rate"
                name="rate"
                value={data.rate}
                onChange={this.onChange}
                className={
                  errors.rate ? "form-control is-invalid" : "form-control"
                }
              >
                <option value="">[Select]</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </select>
              <div className="invalid-feedback">{errors.rate}</div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="brief">Brief</label>
              <ReactQuill
                modules={AddStackForm.modules}
                formats={AddStackForm.formats}
                value={data.brief}
                onChange={this.handleEditorChange}
                className={
                  errors.brief ? "is-invalid" : ""
                }/>
              <div className="invalid-feedback">{errors.brief}</div>
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

AddStackForm.propTypes = {
  submit: propTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    serverErrors: state.formErrors.experience,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps, { submit: addStackRequest })(
  AddStackForm
);
