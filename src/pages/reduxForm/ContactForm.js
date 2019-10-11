import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import classes from "../general/css/LayoutStyle.css";
import DisplayFormData from "./DisplayFormData";


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        type={type}
        placeholder={label}
        className="form-control"
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <div>
      <button
      className="btn btn-success"
      type="button" 
      onClick={() => fields.push({})}>
        Add Member
      </button>
      {submitFailed && error && <span>{error}</span>}
    </div>
    {fields.map((member, index) => (
      <div key={index}>
        <button
          type="button"
          title="Remove Member"
          className="btn btn-danger fa fa-close"
          onClick={() => fields.remove(index)}
        />
        <h4>Member #{index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={renderField}
          label="First Name"
          className="form-control"
        />
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"
          className="form-control"
        />
      </div>
    ))}
  </div>
);

const FieldArraysForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return <div className={classes.WhiteBG}>
      <ExternalTopNav />
      <div className={classes.TopBanner}>
        <div className="container">
          <h1 className="text-center">Redux Form Fiel Array</h1>
        </div>
      </div>

      <div className={classes.AboutMe}>
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <FieldArray name="members" component={renderMembers} />
                <div>
                  <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>
                    Submit
                  </button>
                  <button type="button" className="btn btn-warning" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                  </button>
                </div>
              </form>

              <DisplayFormData />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.BottomSpace} />

      <FooterSection />
    </div>;
};

export default reduxForm({
  form: 'fieldArrays'
})(FieldArraysForm)