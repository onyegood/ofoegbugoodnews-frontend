import React from "react";
import AddExperienceForm from "../../includes/forms/experience/AddExperienceForm";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import SideBar from "../../includes/navigation/SideBar";
import { NavLink } from "react-router-dom";

const AddExperiencePage = (props) => (
  <div>
    <ExternalTopNav />
    <div className="main-inner"></div>
    <div className="container-fluid inner-bg">
        <div className="row">
            <SideBar />
            <div className="col-md-9">
                    <div className="inner-white-card">
                        <AddExperienceForm  data={props} />
                    </div>
            </div>
        </div>
      </div>
    <FooterSection />
  </div>
);

export default AddExperiencePage;
