import React, {Component} from "react";

  class ErrorAlert extends Component {

    static defaultProps = {
        alertMessage: "OOp!",
        alertOtherMessage: "",
        alertOnClickEvent: null,
        alertClassName: "alert alert-success alert-dismissible fade show"
    }
      render() {
          return <div className={this.props.alertClassName} role="alert">
              <strong>{this.props.alertMessage}</strong>
              {this.props.alertOtherMessage}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" onClick={this.props.alertOnClickEvent}>
                  &times;
                </span>
              </button>
            </div>;
      }
  }


  export default ErrorAlert;