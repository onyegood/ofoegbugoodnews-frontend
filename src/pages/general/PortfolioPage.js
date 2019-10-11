import React from "react";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import PortfolioSection from "../../includes/general/PortfolioSection";
import FooterSection from "../../includes/general/FooterSection";
import classes from "./css/LayoutStyle.css";

const PortfolioPage = () => {
    return <div className={classes.WhiteBG}>
        <ExternalTopNav />
        <div className={classes.TopBanner}>
          <div className="container">
            <h1 className="text-center">My Projects Portfolio</h1>
          </div>
        </div>
        <PortfolioSection />

        <div className={classes.BottomSpace} />

        <FooterSection />
      </div>;
}

export default PortfolioPage;