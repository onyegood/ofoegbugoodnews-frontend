import React, { Component } from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "../css/SwitchButton.css";
import { activateEducationRequest } from "../../../store/actions/schools";
class EducationListCard extends Component {
  state = {
    id: null,
    active: 0
  };

  handleSubmitActive = () => {
    console.log("submited", this.state.current);
    this.props.activateEducationRequest(
      {
        ...this.state,
        active: this.state.active
      },
      this.state.id
    );
    console.log("State here", this.state);
  };
  handleActiveEvent = () => {
    setTimeout(() => {
      this.handleSubmitActive();
    }, 1000);
  };

  render() {
    const { schools, deleteeducation } = this.props;

    return (
      <div
        className="row align-items-center"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Course of Study</th>
              <th scope="col">School</th>
              <th scope="col">Certificate</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col" />
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {schools.map((school, i) => (
              <tr key={school.id}>
                <td>{i + 1}</td>
                <td>{school.course_of_study}</td>
                <td>{school.school}</td>
                <td>{school.certificate}</td>
                <td>{school.start_date}</td>
                <td>{school.end_date}</td>
                <td>
                  <Link to={`/edit/${school.id}/school`}>
                    <i className="fa fa-edit" />
                  </Link>
                </td>
                <td>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteeducation(school.id)}
                  >
                    Delete
                  </span>
                </td>
                <td>
                  <label className={classes.switch}>
                    <input
                      type="checkbox"
                      defaultChecked={school.active === "1" ? "checked" : ""}
                      onChange={() =>
                        this.handleActiveEvent(
                          this.setState({
                            ...this.state,
                            active: school.active === "1" ? "0" : "1",
                            id: school.id
                          })
                        )
                      }
                      onSubmit={this.handleSubmitActive}
                    />
                    <span className={`${classes.slider} ${classes.round}`} />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

EducationListCard.propTypes = {
  schools: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      course_of_study: propTypes.string.isRequired,
      school: propTypes.string.isRequired,
      certificate: propTypes.string.isRequired,
      start_date: propTypes.string.isRequired,
      end_date: propTypes.string.isRequired
    })
  ).isRequired,
  deleteeducation: propTypes.func.isRequired
};

function mapStateToProps(state, props) {
  return {  }
}

const mapDispatchToProps = {
  activateEducationRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(EducationListCard);
