import React, {Component} from "react";
import { Link } from "react-router-dom";
import classes from "../../general/css/LayoutStyle.css";
import {connect} from "react-redux";
import renderHTML from "react-render-html";
class MyEducationListCard extends Component {
    state = {
        schools: []
    }
    render(){

        const { schools, isLoading } = this.props;

        if (isLoading) {
            return <p>loading...</p>
        }
        return (<div className={classes.RightColumn}>
                    <h3><i className="fa fa-certificate"/> Education</h3>
                    { 
                        schools && schools.filter(x => x.active === 1).map(school => 
                            <div className={classes.MyExperience} key={school.id}>
                                <h4><strong>{school.course_of_study } / { school.school }</strong></h4>
                                <p className={classes.date}>
                                    <i className="fa fa-calendar"/> 
                                    {school.end_date}
                                </p>
                                <p>{school.certificate}</p>
                                <hr/>
                            </div>)
                    }
                </div>)
    }
}

function mapStateToProps(state, props) {
    return {
        schools: state.schools.schools,
        isLoading: state.schools.isLoading
    }
}
export default connect(mapStateToProps)(MyEducationListCard);