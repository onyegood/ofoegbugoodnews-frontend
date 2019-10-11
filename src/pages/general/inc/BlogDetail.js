import React, {Component} from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import classes from "../css/LayoutStyle.css";
import renderHTML from "react-render-html";

class BlogDetail extends Component {

    state = {
        isLoading: false,
        errors: null
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.serverErrors });
    };

    render(){

        const payload = this.props.payload || {};

        return(
            <div>
                <div className={classes.TopBanner}>
                    <div className="container">
                    <h1 className="text-center">{payload.title}</h1>
                    </div>
                </div>
                 <div className="col-10" style={{margin: 'auto'}}>

                    <img src={payload.image}
                         alt={payload.slug}
                         className="img-fluid"
                         style={{width: '100%'}}/>

                   <div className={classes.Description}>
                       
                    {renderHTML(payload.body)}

                   </div>
                </div>

          </div>
        );
    }
}


function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
        return {
            payload: state.blogs.payload.find(
                item => item.id === parseInt(props.data.match.params.id)
            )
        }
    }

    return {
        payload: null
    };
}


export default connect(mapStateToProps)(BlogDetail);
