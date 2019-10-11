import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class MySocialLink extends Component {

    state = {
        profiles: []
    }
    render(){

   const { profiles } = this.props;

    return <div className="socials">
            {profiles.map(item => <ul key={item.id}>
                <li>
                    <Link to={item.facebook} target="_new">
                        <i className="fa fa-facebook"></i>
                    </Link>
                </li>
                <li>
                    <Link to={item.linkedin} target="_new">
                        <i className="fa fa-linkedin"></i>
                    </Link>
                </li>
                <li>
                    <Link to={item.twitter} target="_new">
                        <i className="fa fa-twitter"></i>
                    </Link>
                </li>
                <li>
                    <Link to={item.instagram} target="_new">
                        <i className="fa fa-google"></i>
                    </Link>
                </li>
            </ul>)}
        </div>;
}
}

function mapStateToProps(state, props) {
  return {
    profiles: state.profile.profile
  };
}

export default connect(mapStateToProps)(MySocialLink)