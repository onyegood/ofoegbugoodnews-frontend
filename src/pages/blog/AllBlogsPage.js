import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {
  fetchBlogsRequest,
  deleteblog,
  fetchBlogsSuccess
} from "../../store/actions/blog";
import BlogListCard from "../../includes/cards/blog/BlogListCard";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import DotLoader from "../../includes/loaders/DotLoader";
import SideBar from "../../includes/navigation/SideBar";
import { NavLink } from "react-router-dom";
import Pagination from "../../includes/pagination/Pagination";

class AllBlogPage extends Component {
  componentWillMount() {
    if (this.props.isAuthenticated) this.props.fetchBlogsRequest();
  }

  state = {
    payload: [],
    pageOfItems: []
  };

  onChangePage = pageOfItems => {
    this.setState({ pageOfItems: pageOfItems });
  };

  render() {
    const { payload, deleteblog, isLoading, isAuthenticated } = this.props;
    const { pageOfItems } = this.state;

    if (isLoading) {
      return <DotLoader />;
    }

    return (
      <div>
        <ExternalTopNav />
        <div className="main-inner" />
        <div className="container-fluid inner-bg">
          <div className="row">
            <SideBar />
            <div className="col-md-9">
              <div className="page-header">
                <NavLink to="/new/blog" className="pull-right">
                  <i className="fa fa-plus py-2 p-1" />
                  Add Blog
                </NavLink>
              </div>
              <div className="clearfix" />
              <hr />
                <div className="inner-white-card">
                  <BlogListCard
                    payload={pageOfItems}
                    deleteblog={deleteblog}
                  />

                  <Pagination
                    items={payload}
                    onChangePage={this.onChangePage}
                  />
                </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }
}
AllBlogPage.propTypes = {
  deleteblog: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.stacks.isLoading,
  payload: state.blogs.payload,
  serverErrors: state.formErrors.blog,
  isAuthenticated: !!state.auth.email
});

const mapDispatchToProps = {
  fetchBlogsRequest,
  fetchBlogsSuccess,
  deleteblog
};
export default connect(mapStateToProps, mapDispatchToProps)(AllBlogPage);
