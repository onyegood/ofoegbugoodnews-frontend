import React, {Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {
    fetchCustomersSuccess, 
    deletecustomer, 
    fetchCustomersRequest
} from "../../store/actions/customer";
import CustomersListCard from "../../includes/cards/customer/CustomersListCard";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import DotLoader from "../../includes/loaders/DotLoader";
import SideBar from "../../includes/navigation/SideBar";
import {NavLink, Link} from "react-router-dom";
import Pagination from "../../includes/pagination/Pagination";

class AllCustomersPage extends Component {
    componentWillMount() {
        if (this.props.isAuthenticated) 
            this.props.fetchCustomersRequest();
        }
    
    state = {
        customers: [],
        pageOfItems: []
    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    handleScroll = () => {
        if(this.scroller && this.scroller.scrollTop < 100) {
            console.log('You have reach the top!')
        }
    }

    render() {

        const {pageOfItems} = this.state;
        const {customers, deletecustomer, isLoading, isAuthenticated} = this.props;

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
                                <div className="inner-white-card"
                                    onScroll={this.handleScroll}
                                    ref={(scroller) => { this.scroller = scroller }}>

                                    <CustomersListCard 
                                        customers={pageOfItems}
                                        deletecustomer={deletecustomer}/>

                                    <Pagination items={customers} onChangePage={this.onChangePage} />    
                                </div>
                        </div>
                    </div>
                </div>
                <FooterSection/>
            </div>
        );
    }
}
AllCustomersPage.propTypes = {
     customers: propTypes
        .arrayOf(propTypes.shape({
            id: propTypes.number.isRequired, 
            first_name: propTypes.string.isRequired, 
            last_name: propTypes.string.isRequired, 
            email: propTypes.string.isRequired
        })).isRequired,
    deletecustomer: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.customers.isLoading,
    customers: state.customers.customers,
    serverErrors: state.formErrors.customers,
    isAuthenticated: !!state.auth.email
});

const mapDispatchToProps = {
    fetchCustomersSuccess,
    fetchCustomersRequest,
    deletecustomer
};
export default connect(mapStateToProps, mapDispatchToProps)(AllCustomersPage);
