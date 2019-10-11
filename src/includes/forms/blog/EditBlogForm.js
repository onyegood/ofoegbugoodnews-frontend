import React, { Component } from "react";
import {connect} from "react-redux";
import {
    updateBlogRequest
} from "../../../store/actions/blog";
import ReactQuill from "react-quill";
import SuccessAlert from "../../messages/alerts/SuccessAlert";
import { encode } from "punycode";

class EditBlogForm extends Component {
  state = {
    id: this.props.blog ? this.props.blog.id : null,
    title: this.props.blog ? this.props.blog.title : "",
    body: this.props.blog ? this.props.blog.body : "",
    image: this.props.blog ? this.props.blog.image : "",
    short_text: this.props.blog ? this.props.blog.short_text : "",
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
      this.props.updateBlogRequest(this.state, this.props.data.match.params.id);
      this.setState({ msg: true });
    }
  };

  validate() {
    const errors = {};
    if (!this.state.title) errors.title = "Can't be blank";
    if (!this.state.body) errors.body = "Can't be blank";
    if (!this.state.short_text) errors.short_text = "Can't be blank";

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

  handleEditorChange = e => {
    this.setState({
      ...this.state,
      body: e
    });
  };

  render() {
    const { msg, isLoading } = this.state;
    const errors = this.state.errors || {};

    console.log('State data', this.state);

    const form = (
      <form onSubmit={this.onSubmit}>
        {msg ? <SuccessAlert /> : ""}
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={this.state.title}
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
                value={this.state.short_text}
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
              modules={EditBlogForm.modules}
              formats={EditBlogForm.formats}
              value={this.state.body}
              onChange={this.handleEditorChange}
              className={errors.body ? "is-invalid" : ""}
            />
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
            blog: state.blogs.payload.find(item => item.id === parseInt(props.data.match.params.id))
            
        }
    }

    return {
        serverErrors: state.formErrors.blog,
        msg : state.blogs.msg,
        isLoading : state.blogs.isLoading,
        blog: null
    };
};

const mapDispatchToProps = {
  updateBlogRequest
};


//Text Editor configurations
EditBlogForm.modules = {
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

EditBlogForm.formats = [
  'header', 'font', 'size', 'bold', 'italic',
  'underline', 'strike', 'blockquote', 'list',
  'bullet', 'link', 'image', 'video', 'code-block',
  'clean'
]
export default connect(mapStateToProps, mapDispatchToProps)(EditBlogForm);