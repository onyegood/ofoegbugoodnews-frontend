import React, { Component } from "react";
import {connect} from "react-redux";
import {
    updateStackRequest
} from "../../../store/actions/stack";
import SuccessAlert from "../../messages/alerts/SuccessAlert";
import ReactQuill from "react-quill";

class EditStackForm extends Component {
  state = {
    id: this.props.stack ? this.props.stack.id : null,
    title: this.props.stack ? this.props.stack.title : "",
    rate: this.props.stack ? this.props.stack.rate : "",
    brief: this.props.stack ? this.props.stack.brief : "",
    icon: this.props.stack ? this.props.stack.icon : "",
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
      this.props.updateStackRequest(
        this.state,
        this.props.data.match.params.id
      );
      this.setState({ msg: true });
    }
  };

  validate() {
    const errors = {};
    if (!this.state.title) errors.title = "Can't be blank";
    if (!this.state.rate) errors.rate = "Can't be blank";
    if (!this.state.brief) errors.brief = "Can't be blank";

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
        icon: e.target.result
      });
    };
    reader.readAsDataURL(file);
  };

  handleEditorChange = e => {
    this.setState({
        ...this.state,
        brief: e
    });
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

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="rate">Rate</label>
              <select
                id="rate"
                name="rate"
                value={this.state.rate}
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
                modules={EditStackForm.modules}
                formats={EditStackForm.formats}
                value={this.state.brief}
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
            stack: state.stacks.stacks.find(item => item.id === parseInt(props.data.match.params.id))
            
        }
    }

    return {
        serverErrors: state.formErrors.stack,
        msg : state.stacks.msg,
        isLoading : state.stacks.isLoading,
        stacks: null
    };
};

const mapDispatchToProps = {
  updateStackRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStackForm);