import React, { Component } from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import classes from "./css/LayoutStyle.css";
import ContactMeForm from "../../includes/forms/contactme/ContactMeForm";
import MySocialLink from "../../includes/social_links/MySocialLinks";
import Alert from "../../includes/messages/alerts/Alart";
import DotLoader from "../../includes/loaders/Spinner";

class ContactMePage extends Component{

  state = {
    success: false,
    message: ""
  }
componentWillReceiveProps(nextProps) {
  const payload = nextProps.payload
  payload.forEach(succ => {
      if (succ) {
        this.setState({
          success: succ.success,
          message: succ.message
        });
      }
    });
  }

  

  render () {

    const { success, message} = this.state;

    const { isLoading } = this.props;
    console.log('Is loading', isLoading);

    const contactPage = <div className={classes.WhiteBG}>
      <ExternalTopNav />
      <div className={classes.TopBanner}>
        <div className="container">
          <h1 className="text-center">Contact Me</h1>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-8 justify-content-center align-self-center">

            {success ?
              <Alert alertMessage={message}
                alertOtherMessage={''}
                alertOnClickEvent={this.handleResetErrorAlartMessage}
                alertClassName={'alert alert-success alert-dismissible fade show'} />
              : ''}
            <ContactMeForm />
          </div>
          <div className="col-md-4 justify-content-top align-self-top">
            <div className="blanck"></div>
            <p><i className="fa fa-phone" /> +234(0)7031002066</p>
            <p><i className="fa fa-envelope" /> hello@ofoegbugoodnews.com, goodmomen@gmail.com</p>

            <MySocialLink />
          </div>
        </div>
      </div>

      <div className={classes.BottomSpace} />

      <FooterSection />
    </div>

  return (
    isLoading ? <DotLoader/> : contactPage
  )
}
};

function mapStateToProps(state, props) {
  return {
    payload: state.contactme.payload,
    isLoading: state.contactme.isLoading
  }
}

export default connect(mapStateToProps)(ContactMePage);
