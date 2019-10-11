import React, { Component } from "react";
import {connect} from "react-redux";
import {
    updatePortfolioRequest
} from "../../../store/actions/portfolio";
import SuccessAlert from "../../messages/alerts/SuccessAlert";
import ReactQuill from "react-quill";

class EditPortfolioForm extends Component {
  state = {
    id: this.props.portfolio ? this.props.portfolio.id : null,
    title: this.props.portfolio ? this.props.portfolio.title : "",
    description: this.props.portfolio ? this.props.portfolio.description : "",
    url: this.props.portfolio ? this.props.portfolio.url : "",
    image: this.props.portfolio ? this.props.portfolio.image : "",
    short_text: this.props.portfolio ? this.props.portfolio.short_text : "",
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
      this.props.updatePortfolioRequest(
        this.state,
        this.props.data.match.params.id
      );
      this.setState({ msg: true });
    }
  };

  validate() {
    const errors = {};
    if (!this.state.title) errors.title = "Can't be blank";
    if (!this.state.description) errors.description = "Can't be blank";
    if (!this.state.url) errors.url = "Can't be blank";
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
    this.setState({ ...this.state, description: e });
  };

  render() {
    const { msg, isLoading } = this.state;
    const errors = this.state.errors || {};

    const form = (
      <form onSubmit={this.onSubmit}>
      <div className="row">
        {msg ? <SuccessAlert /> : ""}
        <img
          src={this.state.image}
          alt={this.state.title}
          className="img-fluid"
        />

        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="first_name">Title</label>
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
          <div className="form-group">
            <label htmlFor="email">Website URL</label>
            <input
              type="url"
              id="url"
              name="url"
              value={this.state.url}
              onChange={this.onChange}
              className={errors.url ? "form-control is-invalid" : "form-control"}
            />
            <div className="invalid-feedback">{errors.url}</div>
          </div>
        </div>


        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="last_name">Description</label>
            <ReactQuill
              modules={EditPortfolioForm.modules}
              formats={EditPortfolioForm.formats}
              value={this.state.description}
              onChange={this.handleEditorChange}
              className={errors.description ? "is-invalid" : ""}
            />

            <div className="invalid-feedback">{errors.description}</div>
          </div>
        </div>

        <div className="col-12">
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
            portfolio: state
                .portfolios
                .portfolios
                .find(item => item.id === parseInt(props.data.match.params.id))
        }
    }

    return {
        serverErrors: state.formErrors.customer,
        msg : state.portfolios.msg,
        isLoading : state.portfolios.isLoading,
        portfolio: null
    };
};

const mapDispatchToProps  = {
    updatePortfolioRequest
}

//Text Editor configurations
EditPortfolioForm.modules = {
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

EditPortfolioForm.formats = [
  'header', 'font', 'size', 'bold', 'italic',
  'underline', 'strike', 'blockquote', 'list',
  'bullet', 'link', 'image', 'video', 'code-block',
  'clean'
]

export default connect(mapStateToProps, mapDispatchToProps)(EditPortfolioForm);
