import React, {Component} from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import classes from "../css/LayoutStyle.css";
import renderHTML from "react-render-html";

class PortfolioDetail extends Component {

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
            <div>
                <div className={classes.TopBanner}>
                    <h1 className="text-center">{portfolio.title}</h1>
                </div>
                 <div className="col-10" style={{margin: 'auto'}}>


                    <img src={portfolio.image}
                         alt={portfolio.title}
                         className="img-fluid"
                         style={{width: '100%'}}/>

                   <div className={classes.Description}>
                       
                    {renderHTML(portfolio.description)}
                       
                       <br/>
                       <Link 
                       className="btn btn-primary text-center" 
                       to={portfolio.url} target="_blank">Visit Website</Link>
                   </div>
                </div>

          </div>
        );
    }
}


function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
        return {
            portfolio: state.portfolios.portfolios.find(
                item => item.id === parseInt(props.data.match.params.id)
            )
        }
    }

    return {
        portfolio: null
    };
}


export default connect(mapStateToProps)(PortfolioDetail);
