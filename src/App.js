import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import AddCustomerPage from './pages/customer/AddCustomerPage';
import AllCustomersPage from './pages/customer/AllCustomersPage';
import EditCustomerPage from './pages/customer/EditCustomerPage';
import CustomerDetailPage from './pages/customer/CustomerDetailPage';
import SignupPage from './pages/user/SignupPage';
import LoginPage from './pages/user/LoginPage';
import AddUserPage from './pages/user/AddUserPage';
import DashboardPage from './pages/user/DashboardPage';
import EditUserPage from './pages/user/EditUserPage';
import AllUsersPage from './pages/user/AllUsersPage';
import UserDetailPage from './pages/user/UserDetailPage';
import AllPortfolioPage from "./pages/portfolio/AllPortfolioPage";
import PortfolioDetailPage from "./pages/portfolio/PortfolioDetailPage";
import EditPortfolioPage from "./pages/portfolio/EditPortfolioPage";
import AddPortfolioPage from "./pages/portfolio/AddPortfolioPage";
import ExternalPortfolioDetailPage from './pages/general/ExternalPortfolioDetailPage';
import UserRoute from "./routes/UserRoute";
import GuestRoute from "./routes/GuestRoute";
import {fetchCurrentUserRequest} from "./store/actions/auth";
import HomePage from './pages/general/HomePage';
import AllEducationPage from "./pages/education/AllEducationPage";
import AddEducationPage from './pages/education/AddEducationPage';
import EditEducationPage from "./pages/education/EditEducationPage";
import AllExperiencePage from "./pages/experience/AllExperiencePage";
import AddExperiencePage from "./pages/experience/AddExperiencePage";
import EditExperiencePage from "./pages/experience/EditExperiencePage";
import AllProfilePage from './pages/profile/AllProfilePage';
import AddProfilePage from "./pages/profile/AddProfilePage";
import EditProfilePage from "./pages/profile/EditProfilePage";
import AllStackPage from './pages/stack/AllStackPage';
import AddStackPage from "./pages/stack/AddStackPage";
import EditStackPage from "./pages/stack/EditStackPage";
import AllBlogsPage from "./pages/blog/AllBlogsPage";
import AddBlogPage from "./pages/blog/AddBlogPage";
import EditBlogPage from "./pages/blog/EditBlogPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import ExternalBlogDetailPage from "./pages/general/ExternalBlogDetailPage";
import ContactForm from "./pages/reduxForm/ContactForm";

//Exteranls
import PortfolioPage from "./pages/general/PortfolioPage";
import BlogPage from "./pages/general/BlogPage";
import AboutPage from "./pages/general/AboutPage";
import ContactMePage from "./pages/general/ContactMePage";
import PageNotFound from './pages/404/PageNotFound';
import AllRequestPage from './pages/contactme/AllRequestPage';
import MessageDetailsPage from './pages/contactme/MessageDetailsPage';
import AccountPage from './pages/user/AccountPage';


class App extends Component {
componentDidMount() {
  if (this.props.isAuthenticated) 
    this.props.fetchCurrentUserRequest();
}

  render() {

    const { location, isAuthenticated, loaded, lang } = this.props;

    const routerLinks = <Switch>

        <Route location={location} path="/" exact component={HomePage} />

        <Route location={location} path="/portfolio" exact component={PortfolioPage} />

        <Route location={location} path="/blog" exact component={BlogPage} />

        <Route location={location} path="/about" exact component={AboutPage} />

        <Route location={location} path="/contact/me" exact component={ContactMePage} />

        <Route location={location} path="/contact" exact component={ContactForm} />

        <Route location={location} path="/portfolio/more/:id/:slug" exact component={ExternalPortfolioDetailPage} />

        <Route location={location} path="/blog/:id/ext/:slug/:created_at" exact component={ExternalBlogDetailPage} />

        <UserRoute location={location} path="/user/dashboard" exact component={DashboardPage} />

        <UserRoute location={location} path="/all/customers" exact component={AllCustomersPage} />

        <UserRoute location={location} path="/new/customer" exact component={AddCustomerPage} />

        <UserRoute location={location} path="/customer/edit/:id" exact component={EditCustomerPage} />

        <UserRoute location={location} path="/customer/detail/:id/:first_name:last_name" exact component={CustomerDetailPage} />

        <UserRoute location={location} path="/user/detail/:id" exact component={UserDetailPage} />
      
        <UserRoute location={location} path="/user/accout" exact component={AccountPage} />

        <UserRoute location={location} path="/new/user" exact component={AddUserPage} />

        <UserRoute location={location} path="/all/users" exact component={AllUsersPage} />

        <UserRoute location={location} path="/edit/user/:id" exact component={EditUserPage} />

        <UserRoute location={location} path="/all/portfolios" exact component={AllPortfolioPage} />

        <UserRoute location={location} path="/portfolio/detail/:id/:slug" exact component={PortfolioDetailPage} />

        <UserRoute location={location} path="/edit/portfolio/:id" exact component={EditPortfolioPage} />

        <UserRoute location={location} path="/new/portfolio" exact component={AddPortfolioPage} />

        <GuestRoute location={location} path="/user/login" exact component={LoginPage} />

        <GuestRoute location={location} path="/user/signup" exact component={SignupPage} />

        <UserRoute location={location} path="/all/schools" exact component={AllEducationPage} />

        <UserRoute location={location} path="/new/school" exact component={AddEducationPage} />

        <UserRoute location={location} path="/edit/:id/school" exact component={EditEducationPage} />

        <UserRoute location={location} path="/all/experience" exact component={AllExperiencePage} />

        <UserRoute location={location} path="/new/experience" exact component={AddExperiencePage} />

        <UserRoute location={location} path="/edit/:id/experience" exact component={EditExperiencePage} />

        <UserRoute location={location} path="/all/profile" exact component={AllProfilePage} />

        <UserRoute location={location} path="/new/profile" exact component={AddProfilePage} />

        <UserRoute location={location} path="/edit/:id/profile" exact component={EditProfilePage} />

        <UserRoute location={location} path="/all/stacks" exact component={AllStackPage} />

        <UserRoute location={location} path="/new/stack" exact component={AddStackPage} />

        <UserRoute location={location} path="/edit/:id/stack" exact component={EditStackPage} />

        <UserRoute location={location} path="/all/blogs" exact component={AllBlogsPage} />

        <UserRoute location={location} path="/new/blog" exact component={AddBlogPage} />

        <UserRoute location={location} path="/blog/:id/edit/:slug/:created_at" exact component={EditBlogPage} />

        <UserRoute location={location} path="/blog/:id/detail/:slug/:created_at" exact component={BlogDetailPage} />

        <UserRoute location={location} path="/all/messages" exact component={AllRequestPage} />

        <UserRoute location={location} path="/read/:id/message" exact component={MessageDetailsPage} />


       <Route component={PageNotFound} />
      </Switch>;

    return (
        routerLinks   
    );
  }
}

App.propTypes = {
  location: PropTypes
    .shape({pathname: PropTypes.string.isRequired})
    .isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  fetchCurrentUserRequest: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!localStorage.token,
    loaded: state.auth.loaded
  };
}

export default connect(mapStateToProps, {fetchCurrentUserRequest})(App);
