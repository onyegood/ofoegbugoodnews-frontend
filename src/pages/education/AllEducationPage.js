import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {
  fetchEducationRequest,
  deleteeducation,
  fetchEducationSuccess
} from "../../store/actions/schools";
import EducationListCard from "../../includes/cards/education/EducationListCard";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import DotLoader from "../../includes/loaders/DotLoader";
import SideBar from "../../includes/navigation/SideBar";
import { NavLink, Link } from "react-router-dom";
import Pagination from "../../includes/pagination/Pagination";

class AllEducationPage extends Component {
  componentWillMount() {
    if (this.props.isAuthenticated) this.props.fetchEducationRequest();
  }

  state = {
    schools: [],
    pageOfItems: []
  };

  onChangePage = pageOfItems => {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  };

  render() {
    const { pageOfItems } = this.state;
    const { schools, deleteeducation, isLoading, isAuthenticated } = this.props;

    if (isLoading) {
      return <DotLoader />;
    }

    return <div>
        <ExternalTopNav />
        <div className="main-inner" />
        <div className="container-fluid inner-bg">
          <div className="row">
            <SideBar />
            <div className="col-md-9">
                <div className="inner-white-card" onScroll={this.handleScroll} ref={scroller => {
                    this.scroller = scroller;
                  }}>
                  <EducationListCard schools={pageOfItems} deleteeducation={deleteeducation} />

                  <Pagination items={schools} onChangePage={this.onChangePage} />
                </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>;
  }
}
AllEducationPage.propTypes = {
  schools: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      course_of_study: propTypes.string.isRequired,
      school: propTypes.string.isRequired,
      certificate: propTypes.string.isRequired
    })
  ).isRequired,
  deleteeducation: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.schools.isLoading,
  schools: state.schools.schools,
  serverErrors: state.formErrors.school,
  isAuthenticated: !!state.auth.email
});

const mapDispatchToProps = {
  fetchEducationRequest,
  fetchEducationSuccess,
  deleteeducation
};
export default connect(mapStateToProps, mapDispatchToProps)(AllEducationPage);
