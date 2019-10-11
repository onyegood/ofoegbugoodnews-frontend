import React, {Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from '../css/SwitchButton.css';
import { chownSync } from "fs";
import { activateStackRequest } from "../../../store/actions/stack";

class StackListCard extends Component {

    
 state = {
    active: 0,
    id: null
  };

  handleSubmitActive = () => {
    console.log("submited", this.state.current);
    this.props.activateStackRequest({ ...this.state, active: this.state.active }, this.state.id);
    console.log("State here", this.state);
  };
  handleActiveEvent = () => {
    setTimeout(() => {
      this.handleSubmitActive();
    }, 1000);
  };

  render(){

    const { deletestack, stacks } = this.props;

    return <div className="row align-items-center" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Title</th>
              <th scope="col">Rate</th>
              <th scope="col">Brief</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
                stacks.map( (stack, i) => <tr key={stack.id}>
                <th scope="row">{i + 1}</th>
                <td>{stack.title}</td>
                <td>{stack.rate}</td>
                <td>{stack.brief}</td>
                <td>
                <Link to={`/edit/${stack.id}/stack`}>
                    <i className="fa fa-edit" />
                </Link>
                </td>
                <td>
                  <span
                    style={{cursor: 'pointer'}}
                    onClick={() => deletestack(stack.id)}>
                    Delete
                  </span>
                </td>
                <td>
                <label className={`${classes.switch} pull-right mt-2`}>
                  <input type="checkbox" 
                  defaultChecked={stack.active === "1" ? "checked" : ""} 
                  onChange={() => this.handleActiveEvent(this.setState(
                          {
                            ...this.state,
                            active: stack.active === "1" ? "0" : "1",
                            id: stack.id
                          }
                        ))} onSubmit={this.handleSubmitActive} />
                  <span className={`${classes.slider} ${classes.round}`} />
                </label>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>;
    }
  }

StackListCard.propTypes = {
    stacks: propTypes
        .arrayOf(propTypes.shape({
            id: propTypes.number.isRequired, 
            title: propTypes.string.isRequired, 
            rate: propTypes.string.isRequired, 
            brief: propTypes.string.isRequired,
        })).isRequired,
    deletestack: propTypes.func.isRequired
};

const mapDispatchToProps = {
  activateStackRequest
};

export default connect(null, mapDispatchToProps)(StackListCard);
