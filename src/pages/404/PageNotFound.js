import React from "react";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import { NavLink } from "react-router-dom";

const PageNotFound = props => (
  <div>
    <ExternalTopNav />
    <div className="main-inner" />
    <div className="container-fluid inner-bg">
      <div className="row">
        <div className="col-md-6 mx-auto text-center mb3">
            <div className="inner-white-card">
                <h1>Ooops!</h1>
                <h2>The page you requested for does not exit</h2>
            </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
);

export default PageNotFound;
