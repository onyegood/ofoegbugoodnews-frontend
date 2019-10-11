import React, {Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {
    fetchExperiencesRequest, 
    deleteexperience, 
    fetchExperiencesSuccess 
} from "../../store/actions/experience";
import ExperienceListCard from "../../includes/cards/experience/ExperienceListCard";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import DotLoader from "../../includes/loaders/DotLoader";
import SideBar from "../../includes/navigation/SideBar";
import {NavLink} from "react-router-dom";
import Pagination from "../../includes/pagination/Pagination";


class AllExperiencePage extends Component {
    componentWillMount() {
        if (this.props.isAuthenticated)
            this.props.fetchExperiencesRequest();
    }

    state = {
        experiences: [],
        pageOfItems: [],
        current: false
    }

    onChangePage = (pageOfItems) => {
        this.setState({pageOfItems: pageOfItems})
    }

    render() {

        const { experiences, deleteexperience, isLoading, isAuthenticated } = this.props;
        const {pageOfItems, current} = this.state;

        console.log('I work here', current);
        console.log('State', this.state);
        console.log('Props', this.props);

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
                      <ExperienceListCard experiences={pageOfItems} 
                      deleteexperience={deleteexperience}
                      />

                      <Pagination items={experiences} onChangePage={this.onChangePage} />
                    </div>
                </div>
              </div>
            </div>
            <FooterSection />
          </div>;
    }
}
AllExperiencePage.propTypes = {
  deleteexperience: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.experiences.isLoading, 
    experiences: state.experiences.experiences,
    serverErrors: state.formErrors.experience,
    isAuthenticated: !!state.auth.email
});

const mapDispatchToProps = {
  fetchExperiencesRequest,
  fetchExperiencesSuccess,
  deleteexperience
};
export default connect(mapStateToProps, mapDispatchToProps)(AllExperiencePage);
