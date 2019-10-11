import React, {Component} from "react";
import  {connect} from "react-redux";
import LoginForm from "../../includes/forms/user/LoginForm";
import classes from "./css/Signup.css";
import Spinner from "../../includes/loaders/Spinner";
import {resetErrorMessage} from "../../store/actions/auth";
import Alert from "../../includes/messages/alerts/Alart";

import FacebookSocialAuth from "../../includes/social_login/facebook/FacebookSocialAuth";
import GoogleSocialAuth from "../../includes/social_login/google/GoogleSocialAuth";
class LoginPage extends Component {

    handleResetErrorAlartMessage = () => {
       this.props.resetErrorMessage();
    }
    
    render(){
        const {loaded, error} = this.props;

        const loginPage = <div className={classes.MainBGSignin}>
            <div className="align-items-center">
              <div className="col col-xs-12 col-sm-6 offset-sm-5 col-lg-4 offset-lg-8">
                <div className="card">
                  <div className="card-body">
                    <div className={classes.LoginCard}>
                      <h5 className="text-center">WELCOME BACK</h5>
                      <p className="text-center">Please sign in</p>
                      <LoginForm />

                       <GoogleSocialAuth />
                       <FacebookSocialAuth />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
    return (
        <div>
            {(error) ? 
                <Alert alertMessage={error} 
                alertOtherMessage={'!, Please check username and password.'} 
                alertOnClickEvent={this.handleResetErrorAlartMessage}
                alertClassName={'alert alert-danger alert-dismissible fade show'} /> 
                : ''}
            {(loaded) ? <Spinner/> : loginPage}
        </div>
    )
}
};

function mapStateToProps(state) {
    return {
        loaded: state.auth.loaded,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, {resetErrorMessage})(LoginPage);
