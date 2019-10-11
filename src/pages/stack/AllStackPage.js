import React, {Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {fetchStackRequest, deletestack, fetchStackSuccess } from "../../store/actions/stack";
import StackListCard from "../../includes/cards/stack/StackListCard";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import DotLoader from "../../includes/loaders/DotLoader";
import SideBar from "../../includes/navigation/SideBar";
import {NavLink} from "react-router-dom";
import Pagination from "../../includes/pagination/Pagination";

class AllStackPage extends Component {
    componentWillMount() {
        if (this.props.isAuthenticated) this.props.fetchStackRequest();
    }

    state = {
        stacks: [],
        pageOfItems: []
    }

    onChangePage = (pageOfItems) => {
        this.setState({pageOfItems: pageOfItems})
    }

    render() {

        const { stacks, deletestack, isLoading, isAuthenticated } = this.props;
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
                  <div className="page-header">
                    <NavLink to="/new/stack" className="pull-right">
                      <i className="fa fa-plus py-2 p-1" />
                      Add Stack
                    </NavLink>
                  </div>
                  <hr />
                    <div className="inner-white-card">
                      <StackListCard stacks={pageOfItems} deletestack={deletestack} />

                      <Pagination items={stacks} onChangePage={this.onChangePage} />
                    </div>
                </div>
              </div>
            </div>
            <FooterSection />
          </div>;
    }
}
AllStackPage.propTypes = {
  deletestack: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.stacks.isLoading, 
    stacks: state.stacks.stacks,
    serverErrors: state.formErrors.stack,
    isAuthenticated: !!state.auth.email
});

const mapDispatchToProps = {
  fetchStackRequest,
  fetchStackSuccess,
  deletestack
};
export default connect(mapStateToProps, mapDispatchToProps)(AllStackPage);
