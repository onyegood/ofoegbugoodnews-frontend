import React, {Component} from "react";
import { Link } from "react-router-dom";
import classes from "../../general/css/LayoutStyle.css";
import {connect} from "react-redux";
class MyInfoCard extends Component {
    state = {
        profiles: []
    }
    render(){

        const { profiles, isLoading } = this.props;

        if (isLoading) {
            return <p>loading...</p>
        }
        return (
            <div>
            { profiles.map(item => (<div key={item.id} >
                 <div className={classes.MyImageHolder}>
                            <img
                                src={item.image}
                                alt={item.first_name +'-'+ item.last_name} className="img-fluid"
                                style={{width: '100%'}}/>
                            <div className={classes.MyName}>
                                <h2>{item.first_name +' '+ item.last_name}</h2>
                            </div>
                        </div>
                        <div className={classes.MyInfoContainer}>
                            <p><i className="fa fa-briefcase"/> { item.profession } </p>
                            <p><i className="fa fa-map-marker"/> { item.city +', '+ item.state }</p>
                            <p><i className="fa fa-envelope"/> { item.email } </p>
                            <p><i className="fa fa-mobile fa-2x"/> { item.phone } </p>
                            <hr/>
                            <h4>Social Media</h4>
                            <hr/>
                            <p>
                                <Link to={item.linkedin} target="_blank">
                                <i className="fa fa-linkedin"/>
                                </Link>

                                <Link to={item.twitter} target="_blank">
                                    <i className="fa fa-twitter"/>
                                </Link>

                                <Link to={item.facebook} target="_blank">
                                    <i className="fa fa-facebook"/>
                                </Link>

                                <Link to={item.instagram} target="_blank">
                                    <i className="fa fa-instagram"/>
                                </Link>
                            </p>
                     </div>  
           </div>)) } 
           </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        profiles: state.profile.profile,
        isLoading: state.profile.isLoading
    }
}
export default connect(mapStateToProps)(MyInfoCard);