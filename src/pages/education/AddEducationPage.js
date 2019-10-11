import React from "react";
import AddEducationForm from "../../includes/forms/education/AddEducationForm";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import SideBar from "../../includes/navigation/SideBar";
import { NavLink } from "react-router-dom";

const AddEducationPage = props => (
  <div>
    <ExternalTopNav />
    <div className="main-inner" />
    <div className="container-fluid inner-bg">
      <div className="row">
        <SideBar />
        <div className="col-md-9">
            <div className="inner-white-card">
              <AddEducationForm data={props} />
            </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
);

export default AddEducationPage;
