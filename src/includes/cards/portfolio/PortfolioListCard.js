import React, {Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';
import classes from "../css/SwitchButton.css";
import { activatePortfolioRequest } from "../../../store/actions/portfolio";

class PortfolioListCard extends Component {
  state = {
    active: 0,
    id: null
  };

  handleSubmitActive = () => {
    this.props.activatePortfolioRequest(
      {
        ...this.state,
        active: this.state.active
      },
      this.state.id
    );
  };
  handleActiveEvent = () => {
    setTimeout(() => {
      this.handleSubmitActive();
    }, 1000);
  };
  render() {
    const { portfolios, deleteportfolio } = this.props;

    return <div className="row align-items-center" style={{ marginTop: "30px", marginBottom: "30px" }}>
        {portfolios.map(portfolio => (
          <div className="col-6" key={portfolio.id}>
            <div className="card">
              <div className="card-header">
                <h5 className="pull-left">{portfolio.title}</h5>

                <label className={`${classes.switch} pull-right mt-2`}>
                  <input
                    type="checkbox"
                    defaultChecked={
                      portfolio.active === "1" ? "checked" : ""
                    }
                    onChange={() =>
                      this.handleActiveEvent(
                        this.setState({
                          ...this.state,
                          active: portfolio.active === "1" ? "0" : "1",
                          id: portfolio.id
                        })
                      )
                    }
                    onSubmit={this.handleSubmitActive}
                  />
                  <span className={`${classes.slider} ${classes.round}`} />
                </label>
              </div>
              <div className="card-body">
                <TextTruncate
                  line={3}
                  truncateText="…"
                  text={portfolio.short_text}
                />
              </div>

              <div className="card-footer">
                <div className="row">
                  <div className="col-md">
                    <Link
                      to={`/portfolio/detail/${portfolio.id}/${
                        portfolio.slug
                      }`}
                      className="btn-sm btn-primary btn-block text-center"
                    >
                      Detail
                    </Link>
                  </div>
                  <div className="col-md">
                    <Link
                      to={`/edit/portfolio/${portfolio.id}`}
                      className="btn-sm btn-success btn-block text-center"
                    >
                      Edit
                    </Link>
                  </div>

                  <div className="col-md">
                    <button
                      onClick={() => deleteportfolio(portfolio.id)}
                      className="btn-sm btn-danger btn-block"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>;
  }
}

PortfolioListCard.propTypes = {
    portfolios: propTypes
        .arrayOf(propTypes.shape({
            id: propTypes.number.isRequired, 
            title: propTypes.string.isRequired, 
            description: propTypes.string.isRequired, 
            url: propTypes.string.isRequired,
            slug: propTypes.string.isRequired,
        })).isRequired,
    deleteportfolio: propTypes.func.isRequired
};

const mapDispatchToProps = {
  activatePortfolioRequest
};
export default connect(null, mapDispatchToProps)(PortfolioListCard);
