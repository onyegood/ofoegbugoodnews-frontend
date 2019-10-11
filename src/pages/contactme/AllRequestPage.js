import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { fetchContactMeRequest, fetchContactMeSuccess, deletecontactme } from "../../store/actions/contactme";
import ContactMeCard from "../../includes/cards/contactme/ContactMeCard";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import DotLoader from "../../includes/loaders/DotLoader";
import SideBar from "../../includes/navigation/SideBar";
import Pagination from "../../includes/pagination/Pagination";


class AllRequestPage extends Component {
    componentWillMount() {
        if (this.props.isAuthenticated)
            this.props.fetchContactMeRequest();
    }

    state = {
        payload: [],
        pageOfItems: []
    }

    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems })
    }

    

    render() {

        const { payload, deletecontactme, isLoading, isAuthenticated } = this.props;
        const { pageOfItems } = this.state;

        console.log('Props data', this.props);

        if (isLoading) {
            return <DotLoader />
        }

        return <div>
            <ExternalTopNav />
            <div className="main-inner" />
            <div className="container-fluid inner-bg">
                <div className="row">
                    <SideBar />
                    <div className="col-md-9">
                        <div className="inner-white-card">
                            <ContactMeCard payload={pageOfItems} deletecontactme={deletecontactme} />

                            <Pagination items={payload} onChangePage={this.onChangePage} />
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>;
    }
}
AllRequestPage.propTypes = {
    deletecontactme: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.contactme.isLoading,
    payload: state.contactme.payload,
    serverErrors: state.formErrors.contactme,
    isAuthenticated: !!state.auth.email
});

const mapDispatchToProps = {
    fetchContactMeRequest, 
    fetchContactMeSuccess,
    deletecontactme
};
export default connect(mapStateToProps, mapDispatchToProps)(AllRequestPage);
