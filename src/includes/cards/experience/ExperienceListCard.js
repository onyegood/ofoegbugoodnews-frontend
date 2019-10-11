import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from '../css/SwitchButton.css';

import {
  ChangeCurrentExperienceRequest,
  ChangeStatusExperienceRequest
} from "../../../store/actions/experience";

class ExperienceListCard extends Component {


  state = {
    current: 0,
    id: null,
    active: 0
  }

  handleSubmitCurrent = () => {
    this.props.ChangeCurrentExperienceRequest({
      ...this.state,
      current: this.state.current
    }, this.state.id );
  }
  handleCurrentJob = () => {
    setTimeout(() => {
      this.handleSubmitCurrent();
    }, 1000)
  }

  handleSubmitStatus = () => {
    console.log('submited', this.state.current);
    this.props.ChangeStatusExperienceRequest({
      ...this.state,
      active: this.state.active
    }, this.state.id );
    console.log('State here', this.state);
  }
  handleStatusEvent = () => {
    setTimeout(() => {
      this.handleSubmitStatus();
    }, 1000)
  }



  render() {


    const { experiences, deleteexperience } = this.props;

    console.log('current state', this.state)


    return (
      <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col">SN</th>
        <th scope="col">Company</th>
        <th scope="col">Job Title</th>
        <th scope="col">Current</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {experiences.map((item, i) => 
          <tr key={item.id}>
            <th scope="row">{i + 1}</th>
            <td>{item.company}</td>
            <td>{item.job_title}</td>
            <td>
            <label className={classes.switch}>
                <input
                  type='checkbox'
                  defaultChecked={
                    item.current === '1' ? 'checked' : ''
                  }
                  onChange={() => this.handleCurrentJob(this.setState({
                    ...this.state,
                      current: item.current === '1' ? '0' : '1', 
                      id: item.id 
                  }))}
                  onSubmit={this.handleSubmitCurrent}
                 />
                <span className={`${classes.slider} ${classes.round}`} />
              </label>
              
            </td>
            <td>
              <label className={classes.switch}>
                <input 
                  type='checkbox'
                  defaultChecked={
                    item.active === '1' ? 'checked' : ''
                  }
                  onChange={() => this.handleStatusEvent(this.setState({
                    ...this.state,
                      active: item.active === '1' ? '0' : '1', 
                      id: item.id 
                  }))}
                  onSubmit={this.handleSubmitStatus}
                 />
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
                  <Link className="dropdown-item" to={`/edit/${item.id}/experience`}>
                  <i className="fa fa-edit" /> Edit
                </Link>
                  <span className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => deleteexperience(item.id)}>
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
}

ExperienceListCard.propTypes = {
    experiences: propTypes
        .arrayOf(propTypes.shape({
            id: propTypes.number.isRequired, 
            job_title: propTypes.string.isRequired, 
            achievement: propTypes.string.isRequired, 
            company: propTypes.string.isRequired
        })).isRequired,
    deleteexperience: propTypes.func.isRequired
};

function mapStateToProps(state, props) {
    return {
      
    };
}

const mapDispatchToProps = {
  ChangeCurrentExperienceRequest,
  ChangeStatusExperienceRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceListCard);
