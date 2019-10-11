import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { addBlogRequest } from "../../../store/actions/blog";
import DotLoader from "../../../includes/loaders/DotLoader";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
class AddBlogForm extends Component {
  state = {
    data: {
      title: "",
      body: "",
      image: "",
      short_text: ""
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
    if (!data.body) errors.body = "Can't be blank";
    if (!data.short_text) errors.short_text = "Can't be blank";
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

  handleEditorChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        body: e
      }
    })
  };

  render() {
    const { data, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>

        <div className="row">
          <div className="col-md-12">
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

          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="short_text">Short Text</label>
              <input
                type="text"
                id="short_text"
                name="short_text"
                value={data.short_text}
                onChange={this.onChange}
                className={
                  errors.short_text ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.short_text}</div>
            </div>
          </div>

          <div className="col-md-12">
              <ReactQuill
                modules={AddBlogForm.modules}
                formats={AddBlogForm.formats}
                value={data.body}
                onChange={this.handleEditorChange}
                className={
                  errors.body ? "is-invalid" : ""
                }/>
              <div className="invalid-feedback">{errors.body}</div>
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

AddBlogForm.propTypes = {
  submit: propTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    serverErrors: state.formErrors.experience,
    isLoading: state.isLoading
  };
}

AddBlogForm.modules = {
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

AddBlogForm.formats = [
  'header', 'font', 'size', 'bold', 'italic',
  'underline', 'strike', 'blockquote', 'list',
  'bullet', 'link', 'image', 'video', 'code-block',
  'clean'
]

export default connect(mapStateToProps, { submit: addBlogRequest })(
  AddBlogForm
);
