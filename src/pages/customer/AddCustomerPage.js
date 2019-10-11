import React from "react";
import AddCustomerForm from "../../includes/forms/customer/AddCustomerForm";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import SideBar from "../../includes/navigation/SideBar";
import { NavLink } from "react-router-dom";

const AddCustomerPage = (props) => (
  <div>
    <ExternalTopNav />
    <div className="main-inner"></div>
    <div className="container-fluid inner-bg">
        <div className="row">
            <SideBar />
            <div className="col-md-9">
                    <div className="inner-white-card">
                        <AddCustomerForm  data={props} />
                    </div>
            </div>
        </div>
      </div>
    <FooterSection />
  </div>
);

export default AddCustomerPage;
