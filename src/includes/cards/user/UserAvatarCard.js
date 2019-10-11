import React, { Component } from 'react';
import propTypes from "prop-types";
import {connect} from "react-redux";
import {userAvatarUploadRequest} from "../../../store/actions/auth";
import classes from "../css/SwitchButton.css";

class FileUploadCard extends Component {
  state = {
    avatar: "",
    isDisabled: false
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.avatar);
    this.setState({
        isDisabled: !this.state.isDisabled,
        avatar: !this.state.avatar
    })
  };

  onChange = e => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    this.createImage(files[0]);
  };

  createImage = file => {
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({
        avatar: e.target.result
      });
    };
    reader.readAsDataURL(file);
  };

  handleUploadControl = () => {
      this.setState({
          isDisabled: !this.state.isDisabled
      })
      console.log("Control state", this.state.isDisabled);
  }
  render() {
      const {avatar} = this.props;
      console.log('Avatar', avatar)
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          style={{ display: "none" }}
          ref={fileInput => (this.fileInput = fileInput)}
          type="file"
          onChange={this.onChange}
        />

        <div className="col-12 mx-auto">
        
        <div className="row">
            <div className="col-sm-6">
                {
                    (avatar) ?
                    <p className="text-success font-weight-light" style={{fontSize: '11px'}}>Change profile image</p>
                    :
                    <p className="text-danger font-weight-light" style={{fontSize: '11px'}}>Upload profile image</p>
                }
            </div>
              <div className="col-ms-2 d-none d-md-block d-lg-block">
                 <label className={`${classes.switch}`}>
                   <input type="checkbox"
                     onChange={this.handleUploadControl}
                        defaultChecked={this.state.isDisabled} />
                        <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
            </div>
            <div className="col-ms-2 d-block d-sm-none mx-auto">
                <label className={`${classes.switch}`}>
                   <input type="checkbox"
                      onChange={this.handleUploadControl}
                      defaultChecked={this.state.isDisabled} />
                      <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
            </div>
        </div>


            {
                <div className={(!this.state.isDisabled) ? 'row displayNon' : 'row'}>
                    <div className="col-sm-6">
                    <div className="form-group">
                            <span
                            style={{ cursor: "pointer" }}
                            onClick={() => this.fileInput.click()}
                            className="btn btn-light btn-sm btn-block">
                            <i className="fa fa-image"></i> Select image
                            </span>
                    </div>
                    </div>

                    <div className="col-sm-6">
                    <div className="form-group">
                        <button
                            className={(this.state.avatar) ? 'btn btn-success btn-sm btn-block' : 'btn btn-danger btn-sm btn-block disabled'} >
                                <i className="fa fa-upload" /> 
                                upload now
                        </button>
                    </div>
                    </div>
                </div>
            }
        </div>
      </form>
    );
  }
}

FileUploadCard.propTypes = {
    submit: propTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        loaded: state.loaded,
        avatar: state.auth.avatar
    }
}

export default connect(mapStateToProps, {submit: userAvatarUploadRequest})(FileUploadCard);