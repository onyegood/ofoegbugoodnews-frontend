import React, {Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {fetchAllUsersSuccess, deleteuser, fetchAllUsersRequest} from "../../store/actions/users";
import UsersListCard from "../../includes/cards/user/UsersListCard";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import DotLoader from "../../includes/loaders/DotLoader";
import SideBar from "../../includes/navigation/SideBar";
import {NavLink} from "react-router-dom";
import Pagination from "../../includes/pagination/Pagination";

class AllUsersPage extends Component {

    componentWillMount(){
        if (this.props.isAuthenticated)
        this.props.fetchAllUsersRequest();
    }

    state = {
        users: [],
        pageOfItems: []
    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {

        const {users, isLoading, deleteuser} = this.props;
        const {pageOfItems} = this.state;

        if (isLoading) {
            return <DotLoader/>
        }

        return (

            <div>
                <ExternalTopNav/>
                <div className="main-inner"></div>
                <div className="container-fluid inner-bg">
                    <div className="row">
                        <SideBar/>
                        <div className="col-md-9">
                                <div className="inner-white-card">
                                    <UsersListCard
                                        users={pageOfItems}
                                        deleteuser={deleteuser}/>
                                    <Pagination items={users} onChangePage={this.onChangePage}/>  
                                </div>
                            </div>
                    </div>
                </div>
                <FooterSection/>
            </div>
        );
    }
}
AllUsersPage.propTypes = {
    deleteuser: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.users.isLoading, 
    users: state.users.users,
    serverErrors: state.formErrors.user,
    isAuthenticated: !!state.auth.email
});

const mapDispatchToProps = {
    fetchAllUsersSuccess,
    fetchAllUsersRequest,
    deleteuser
};
export default connect(mapStateToProps, mapDispatchToProps)(AllUsersPage);
