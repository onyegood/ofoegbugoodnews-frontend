import React, {Component} from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import renderHTML from "react-render-html";
class PortfolioDetailCard extends Component {

    state = {
        isLoading: false,
        errors: null
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.serverErrors });
    };

    render(){

        const portfolio = this.props.portfolio || {};

        return(
            <div className="container-fluid">
                <div className = "row align-items-center">
                    <div className="col-md-12">
                        <img src={portfolio.image} alt={portfolio.title} className="img-fluid" />
                        <h1>{portfolio.title}</h1>
                        {renderHTML(portfolio.description)}
                        <hr/>
                        <Link to={portfolio.url}
                              target="_blank"
                              className="text-center btn btn-primary">
                             Visit Website
                        </Link>

                        <Link to={`/edit/portfolio/${portfolio.id}`}
                              className="text-center btn btn-success">
                            Edit
                        </Link>

                        <Link to="/all/portfolios"
                              className="text-center btn btn-outline-warning">
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}


PortfolioDetailCard.propTypes = {
    portfolio: propTypes.shape({
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        url: propTypes.string.isRequired,
        image: propTypes.string.isRequired
    }).isRequired
};

function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
        return {
            portfolio: state.portfolios.portfolios.find(
                item => item.id === parseInt(props.data.match.params.id)
            )
        }
    }

    return {
        serverErrors: state.formErrors.portfolio,
        isLoading: state.portfolio.isLoading,
        portfolio: null
    };
}


export default connect(mapStateToProps)(PortfolioDetailCard);
