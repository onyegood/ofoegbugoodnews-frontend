import React from "react";
import PortfolioDetail from "./inc/PortfolioDetail";
import { NavLink } from "react-router-dom";
import FooterSection from "../../includes/general/FooterSection";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import classes from "./css/LayoutStyle.css";

const ExternalPortfolioDetailPage = (props) => (
    <div className={classes.WhiteBG}>
        <ExternalTopNav />
            <div className="clearfix"></div>
                <PortfolioDetail  data={props} />
            <div className="clearfix"></div>
        <FooterSection />
    </div>
);

export default ExternalPortfolioDetailPage;
