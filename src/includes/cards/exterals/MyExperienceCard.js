import React, {Component} from "react";
import { Link } from "react-router-dom";
import classes from "../../general/css/LayoutStyle.css";
import {connect} from "react-redux";
import renderHTML from "react-render-html";
class MyExperienceCard extends Component {
    state = {
        experiences: []
    }
    render(){

        const { experiences, isLoading } = this.props;

        if (isLoading) {
            return <p>loading...</p>
        }
        return (<div className={classes.RightColumn}>
                    <h3><i className="fa fa-briefcase"/> Work Experience</h3>
                    { 
                        experiences && experiences.filter(x => x.active === 1).map(experience => 
                            <div className={classes.MyExperience} key={experience.id}>
                            <h4><strong>{experience.job_title +' / '+ experience.company}</strong></h4>
                            <p className={classes.date}>
                                <i className="fa fa-calendar"/> 
                                { experience.start_date +' / '} { (experience.current === '1') ?  <span className="badge">Current </span> : experience.end_date } 
                            </p>
                            {renderHTML(experience.achievement)}
                            <hr/>
                        </div>)
                    }
                </div>)
    }
}

function mapStateToProps(state, props) {
    return {
        experiences: state.experiences.experiences,
        isLoading: state.experiences.isLoading
    }
}
export default connect(mapStateToProps)(MyExperienceCard);