import React, {Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {fetchPortfoliosSuccess, deleteportfolio, fetchPortfoliosRequest } from "../../store/actions/portfolio";
import PortfolioListCard from "../../includes/cards/portfolio/PortfolioListCard";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import DotLoader from "../../includes/loaders/DotLoader";
import SideBar from "../../includes/navigation/SideBar";
import {NavLink} from "react-router-dom";
import Pagination from "../../includes/pagination/Pagination";

class AllPortfolioPage extends Component {
    componentWillMount() {
        if (this.props.isAuthenticated)
            this.props.fetchPortfoliosRequest();
    }

    state = {
        portfolios: [],
        pageOfItems: []
    }

    onChangePage = (pageOfItems) => {
        this.setState({pageOfItems: pageOfItems})
    }

    render() {

        const { portfolios, deleteportfolio, isLoading, isAuthenticated } = this.props;
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
                      <PortfolioListCard portfolios={pageOfItems} deleteportfolio={deleteportfolio} />

                      <Pagination items={portfolios} onChangePage={this.onChangePage} />
                    </div>
                </div>
              </div>
            </div>
            <FooterSection />
          </div>;
    }
}
AllPortfolioPage.propTypes = {
  deleteportfolio: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.portfolios.isLoading, 
    portfolios: state.portfolios.portfolios,
    serverErrors: state.formErrors.portfolios,
    isAuthenticated: !!state.auth.email
});

const mapDispatchToProps = {
  fetchPortfoliosSuccess,
  fetchPortfoliosRequest,
  deleteportfolio
};
export default connect(mapStateToProps, mapDispatchToProps)(AllPortfolioPage);
