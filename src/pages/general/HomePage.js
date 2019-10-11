import React, {Component} from "react";
import { connect } from "react-redux"
import BannerSlider from "../../includes/general/BannerSlider";
import BlogSection from "../../includes/general/BlogSection";
import ExperienceSection from "../../includes/general/ExperienceSection";
import PortfolioSection from "../../includes/general/PortfolioSection";
import FooterSection from "../../includes/general/FooterSection";
import SeeAllPortfolio from "../../includes/cards/portfolio/SeeAllPortfolio";
import DotLoader from "../../includes/loaders/Spinner";
import classes from "./css/LayoutStyle.css";

class HomePage extends Component {
    state = {
        isLoading: false
    }
    render() {

    const { isLoading } = this.props;
    const homePage = <div className={classes.WhiteBG}> 
            <BannerSlider />

            <ExperienceSection />
            
            <div className="portfolio">
                <h2 className="text-center mb-3">My Most Recent <strong>Projects</strong></h2>
                
            <PortfolioSection />
            </div>

            <SeeAllPortfolio />

            <div className="myStack">
                <div className="container">
                    <h2 className="text-center">My <strong>Blog</strong></h2>
                <BlogSection />
                </div>
            </div>

            <FooterSection />

        </div>

    return (
        <div>
        {
            (isLoading) ? 
            <DotLoader />
            :
            homePage
        }
        </div>
    )
}
}

function mapStateToProps(state, props) {
  return {
      isLoading: state.blogs.isLoading
  }
}

export default connect(mapStateToProps)(HomePage);