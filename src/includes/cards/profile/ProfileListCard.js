import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from '../css/SwitchButton.css';

const ProfileListCar = ({ profile, deleteprofile }) => {

    
    var i = 1;
    var b = i >= 1;

    return <div className="row align-items-center" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            { profile.map(profl => <tr key={profl.id}>
                    <th scope="row">{b++}</th>
                    <td>{profl.first_name}</td>
                    <td>{profl.last_name}</td>
                    <td>{profl.email}</td>
                    <td>{profl.state}</td>
                    <td>{profl.city}</td>
                <td>
                <Link to={`/edit/${profl.id}/profile`}>
                    <i className="fa fa-edit" />
                </Link>
                </td>
                <td>
                  <span
                    style={{cursor: 'pointer'}}
                    onClick={() => deleteprofile(profl.id)}>
                    Delete
                  </span>
                </td>
                <td>
                <label className={classes.switch}>
                    <input type="checkbox" />
                    <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>;
        }

ProfileListCar.propTypes = {
    profile: propTypes
        .arrayOf(propTypes.shape({
            id: propTypes.number.isRequired, 
            first_name: propTypes.string.isRequired, 
            last_name: propTypes.string.isRequired, 
            email: propTypes.string.isRequired,
            state: propTypes.string.isRequired,
            city: propTypes.string.isRequired,
        })).isRequired,
    deleteprofile: propTypes.func.isRequired
};

export default ProfileListCar;
