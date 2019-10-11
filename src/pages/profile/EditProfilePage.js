import React from "react";
import EditProfileForm from "../../includes/forms/profile/EditProfileForm";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import SideBar from "../../includes/navigation/SideBar";
import {NavLink} from "react-router-dom";

const EditProfilePage = (props) => (
    <div>
        <ExternalTopNav/>
        <div className="main-inner"></div>
        <div className="container-fluid inner-bg">
            <div className="row">
                <SideBar/>
                <div className="col-md-9">
                        <div className="inner-white-card">
                            <EditProfileForm data={props}/>
                        </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>

        <FooterSection/>
    </div>
);

export default EditProfilePage;