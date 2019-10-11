import React from "react";
import { connect } from "react-redux";
import { getFormValues } from "redux-form";
import {Link} from "react-router-dom";
import classes from "../../includes/cards/css/SwitchButton.css";

const DisplayFormData = ({ values = {members: []} }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">SN</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {values.members.map((item, index) => (
          <tr key={index}>
            <th scope="row">1</th>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>
              <Link to={`/edit/${index}/school`}>
                <i className="fa fa-edit" />
              </Link>
            </td>
            <td>
              <span style={{ cursor: "pointer" }} onClick={""}>
                Delete
              </span>
            </td>
            <td>
              <label className={classes.switch}>
                <input type="checkbox" />
                <span className={`${classes.slider} ${classes.round}`} />
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default connect(state => ({
  values: getFormValues('fieldArrays')(state)
}))(DisplayFormData);
