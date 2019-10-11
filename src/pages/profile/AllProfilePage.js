import React, {Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {fetchProfileRequest, deleteprofile, fetchProfileSuccess } from "../../store/actions/profile";
import ProfileListCard from "../../includes/cards/profile/ProfileListCard";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import DotLoader from "../../includes/loaders/DotLoader";
import SideBar from "../../includes/navigation/SideBar";
import {NavLink} from "react-router-dom";
import Pagination from "../../includes/pagination/Pagination";

class AllProfilePage extends Component {
    componentWillMount() {
        if (this.props.isAuthenticated)
            this.props.fetchProfileRequest();
    }

    state = {
        profile: [],
        pageOfItems: []
    }

    onChangePage = (pageOfItems) => {
        this.setState({pageOfItems: pageOfItems})
    }

    render() {

        const { profile, deleteprofile, isLoading, isAuthenticated } = this.props;
        const {pageOfItems} = this.state;

        if (isLoading) {
            return <DotLoader/>
        }

        return <div>
            <ExternalTopNav />
            <div className="main-inner" />
            <div className="container-fluid inner-bg">
              <div className="row">
                <SideBar />
                <div className="col-md-9">
                    <div className="inner-white-card">
                      <ProfileListCard profile={pageOfItems} deleteprofile={deleteprofile} />

                      <Pagination items={profile} onChangePage={this.onChangePage} />
                    </div>
                </div>
              </div>
            </div>
            <FooterSection />
          </div>;
    }
}
AllProfilePage.propTypes = {
  deleteprofile: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.profile.isLoading, 
    profile: state.profile.profile,
    serverErrors: state.formErrors.profile,
    isAuthenticated: !!state.auth.email
});

const mapDispatchToProps = {
  fetchProfileRequest,
  fetchProfileSuccess,
  deleteprofile
};
export default connect(mapStateToProps, mapDispatchToProps)(AllProfilePage);
