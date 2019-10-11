import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from '../css/SwitchButton.css';

const ContactMeCard = ({ payload, deletecontactme }) => {

  return (
    <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col">SN</th>
        <th scope="col">Company</th>
        <th scope="col">Job Title</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {payload.map((item, i) => 
          <tr key={item.id}>
            <th scope="row">{i + 1}</th>
            <td>{item.name}</td>
            <td>{item.title}</td>
            <td>
              <label className={classes.switch}>
                <input type="checkbox" />
                <span className={`${classes.slider} ${classes.round}`} />
              </label>
            </td>

              <td>
              <div className="dropdown">
                <button className="btn-sm
                btn-secondary dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  Select Action
                  </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to={`/read/${item.id}/message`}>
                  <i className="fa fa-edit" /> Read Message
                </Link>
                <span className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => deletecontactme(item.id)}>
                    <i className="fa fa-close" /> Delete
                  </span>
                </div>
              </div>
            </td>
          </tr>)}
    </tbody>
  </table>
    )
}

ContactMeCard.propTypes = {
    payload: propTypes
        .arrayOf(propTypes.shape({
            id: propTypes.number.isRequired, 
            title: propTypes.string.isRequired, 
            name: propTypes.string.isRequired
        })).isRequired,
    deletecontactme: propTypes.func.isRequired
};

export default ContactMeCard;