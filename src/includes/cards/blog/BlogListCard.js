import React, {Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "../css/SwitchButton.css";
import { activateBlogRequest } from "../../../store/actions/blog";
import TextTruncate from 'react-text-truncate';


class BlogListCard extends Component {
  state = {
    active: 0,
    id: null
  };

  handleSubmitActive = () => {
    console.log("submited", this.state.current);
    this.props.activateBlogRequest({ ...this.state, active: this.state.active }, this.state.id);
    console.log("State here", this.state);
  };
  handleActiveEvent = () => {
    setTimeout(() => {
      this.handleSubmitActive();
    }, 1000);
  };

  render() {
    const { payload, deleteblog } = this.props;

    return <div className="row align-items-center" 
    style={{ marginTop: "30px", marginBottom: "30px" }} 
    onScroll={this.handleScroll} ref={scroller => {
          this.scroller = scroller;
        }}>
        {payload.map(item => <div className="col-md-4" key={item.id}>
            <div className="card">
              <div className="card-header">
                <img src={item.image} alt={item.slug} className="img-fluid" />
                <h5>{item.title}</h5>
                <label className={`${classes.switch} pull-right mt-2`}>
                  <input type="checkbox" 
                  defaultChecked={item.active === "1" ? "checked" : ""} 
                  onChange={() => this.handleActiveEvent(this.setState(
                          {
                            ...this.state,
                            active: item.active === "1" ? "0" : "1",
                            id: item.id
                          }
                        ))} onSubmit={this.handleSubmitActive} />
                  <span className={`${classes.slider} ${classes.round}`} />
                </label>
              </div>
              <div className="card-body">
                <TextTruncate line={3} truncateText="…" text={item.short_text} />
              </div>

              <div className="card-footer">
                <Link to={`/blog/${item.id}/detail/${item.slug}/${item.created_at}`} 
                className="btn btn-primary">
                  Detail
                </Link>

                <button onClick={() => deleteblog(item.id)} className="btn btn-danger">
                  Delete
                </button>

                <Link to={`/blog/${item.id}/edit/${item.slug}/${item.created_at}`} 
                className="btn btn-success">
                  Edit
                </Link>
              </div>
            </div>
          </div>)}
      </div>;
  }
};

BlogListCard.propTypes = {
  payload: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      slug: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
      image: propTypes.string.isRequired
    })
  ).isRequired,
  deleteblog: propTypes.func.isRequired
};

const mapDispatchToProps = {
  activateBlogRequest
};

export default connect(null, mapDispatchToProps)(BlogListCard);