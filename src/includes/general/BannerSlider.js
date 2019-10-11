import React from "react";
import {NavLink} from "react-router-dom";
import ExternalTopNavFadeIn from "../navigation/ExternalTopNavFadeIn";
import TopNavTransparent from "../navigation/TopNavTransparent";
import classes from "./css/LayoutStyle.css";



const BannerSlider = () => {
    return (
        <div>
            <div className="Banner">
                <TopNavTransparent/>
                <div className="container">
                    <h1 className="text-center lato-light">Hi, I'm Goodnews Ofoegbu</h1>
                    <h2 className="text-center lato-300">A Full Stack Developer</h2>
                    <div className="clearfix"></div>
                    <div className={classes.heroText}>
                        <NavLink to="/contact/me" className={classes.HeroButton}>GET IN TOUCH</NavLink>
                    </div>
                </div>
            </div>

            <ExternalTopNavFadeIn/>
        </div>
    );
}

export default BannerSlider;