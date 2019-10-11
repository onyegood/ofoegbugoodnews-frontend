import React, { Component } from "react";
import {connect} from "react-redux";
import SignupForm from "../../includes/forms/user/SignupForm";
import classes from "./css/Signup.css";
import { resetErrorMessage } from "../../store/actions/auth";
import Alert from "../../includes/messages/alerts/Alart";
import Spinner from "../../includes/loaders/Spinner";

import FacebookSocialAuth from "../../includes/social_login/facebook/FacebookSocialAuth";
import GoogleSocialAuth from "../../includes/social_login/google/GoogleSocialAuth";

class SignupPage extends Component {

  state = {

  }

  handleResetErrorAlartMessage = () => {
    this.props.resetErrorMessage();
  };

  render() {

    const {errors, loaded} = this.props;

    const registerPage = (
      <div className={classes.MainBGSignup}>
        <div className="align-items-center">
          <div className="col col-xs-12 col-sm-6 offset-sm-5 col-lg-4 offset-lg-8">
            <div className="card">
              <div className="card-body">
                <div className={classes.LoginCard}>
                  <h5 className="text-center">CREATE ACCOUNT</h5>
                  <SignupForm />

                  <GoogleSocialAuth />
                  <FacebookSocialAuth />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return (
         <div>
            {(errors) ? 
                <Alert alertMessage={'Oops!'} 
                alertOtherMessage={', Something went wrong.'}
                alertOnClickEvent={this.handleResetErrorAlartMessage}
                alertClassName={'alert alert-danger alert-dismissible fade show'} /> 
                : ''}
            {(loaded) ? <Spinner/> : registerPage}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loaded: state.auth.loaded,
    errors: state.auth.signup
  };
}

export default connect(mapStateToProps, { resetErrorMessage })(SignupPage);
