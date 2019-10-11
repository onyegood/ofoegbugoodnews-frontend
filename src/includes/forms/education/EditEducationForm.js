import React, { Component } from "react";
import {connect} from "react-redux";
import {
    updateEducationRequest
} from "../../../store/actions/schools";
import SuccessAlert from "../../messages/alerts/SuccessAlert";

class EditEducationForm extends Component {
    state = {
            id: this.props.school
                ? this.props.school.id
                : null,
            course_of_study: this.props.school
                ? this.props.school.course_of_study
                : '',
            school: this.props.school
                ? this.props.school.school
                : '',
            certificate: this.props.school
                ? this.props.school.certificate
                : '',
            start_date: this.props.school
                ? this.props.school.start_date
                : '',
            end_date: this.props.school
                ? this.props.school.end_date
                : '',    
        errors: {}
    };


    onChange = e => this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state);
        this.setState({errors});
        
        if (Object.keys(errors).length === 0) {
            this.setState({isLoading: true});
            this.props.updateEducationRequest(this.state, this.props.data.match.params.id);
            this.setState({msg: true});
        }
    };

    validate() {
        const errors = {};
        if (!this.state.course_of_study) errors.course_of_study = "Can't be blank";
        if (!this.state.school) errors.school = "Can't be blank";
        if (!this.state.certificate) errors.certificate = "Can't be blank";
        if (!this.state.start_date) errors.start_date = "Can't be blank";
        if (!this.state.end_date) errors.end_date = "Can't be blank";
        
        return errors;
    };

    render() {

        const {msg, isLoading} = this.state;
        const errors = this.state.errors || {};


        const form = <form onSubmit={this.onSubmit}>
                { msg ? <SuccessAlert /> : '' }
                <div className="row">

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="course_of_study">Title</label>
              <input
                type="text"
                id="course_of_study"
                name="course_of_study"
                value={this.state.course_of_study}
                onChange={this.onChange}
                className={
                  errors.course_of_study
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.course_of_study}</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="school">School</label>
              <input
                type="text"
                id="school"
                name="school"
                value={this.state.school}
                onChange={this.onChange}
                className={
                  errors.school ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.school}</div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="certificate">Certificate</label>
              <input
                type="text"
                id="certificate"
                name="certificate"
                value={this.state.certificate}
                onChange={this.onChange}
                className={
                  errors.certificate
                    ? "form-control is-invalid"
                    : "form-control"
                } />
              <div className="invalid-feedback">{errors.certificate}</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="start_date">Start Date</label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                value={this.state.start_date}
                onChange={this.onChange}
                className={
                  errors.start_date ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.start_date}</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="end_date">End Date</label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                value={this.state.end_date}
                onChange={this.onChange}
                className={
                  errors.end_date ? "form-control is-invalid" : "form-control"
                }
              />
              <div className="invalid-feedback">{errors.end_date}</div>
            </div>
          </div>

          <div className="col-md-12">
            <button 
                type="submit" 
                className={isLoading ? 'btn btn-success' : 'btn btn-primary'}>
               {isLoading ? 'Updated!' : 'Update'}
            </button>
          </div>
        </div>
                

        </form>;

        return ( 
            form
        );

    }
}

function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
        return {
            school: state.schools.schools.find(item => item.id === parseInt(props.data.match.params.id))
            
        }
    }

    return {
        serverErrors: state.formErrors.school,
        msg : state.schools.msg,
        isLoading : state.schools.isLoading,
        school: null
    };
};

const mapDispatchToProps  = {
    updateEducationRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEducationForm);