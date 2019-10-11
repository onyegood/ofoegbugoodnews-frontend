import React from "react";
import AddBlogForm from "../../includes/forms/blog/AddBlogForm";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import SideBar from "../../includes/navigation/SideBar";
import { NavLink } from "react-router-dom";

const AddBlogPage = props => (
  <div>
    <ExternalTopNav />
    <div className="main-inner" />
    <div className="container-fluid inner-bg">
      <div className="row">
        <SideBar />
        <div className="col-md-9">
            <div className="col-lg-12 inner-white-card">
              <AddBlogForm data={props} />
            </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
);

export default AddBlogPage;
