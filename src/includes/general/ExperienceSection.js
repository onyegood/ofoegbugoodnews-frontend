import React from "react";
import {Link} from "react-router-dom";
import classes from "./css/LayoutStyle.css";
import MyInfoCard from "../cards/exterals/MyInfoCard";
import StackProgressBar from "../cards/exterals/StackProgressBar";
import MyExperienceCard from "../cards/exterals/MyExperienceCard";
import MyEducationListCard from "../cards/exterals/MyEducationListCard";

const ExperienceSection = () => {
    return (
        <div className={classes.ContainerGrid}>
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-4">
                    <div className={classes.LeftColumn}>
                        <MyInfoCard />

                        <StackProgressBar />
                    </div>
                </div>
                <div className="col-md-8">
                    <MyExperienceCard />

                    <MyEducationListCard />
                </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;