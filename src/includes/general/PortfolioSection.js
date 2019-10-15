import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import TextTruncate from 'react-text-truncate';

class PortfolioSection extends Component {
    state = {
        portfolios: [],
        pageOfItems: []
    }

    render (){
        const { portfolios } = this.props;
        return (
                <div className="container-fluid">
                    <div className="row">
                        {portfolios && portfolios.filter(x => x.active === 1).map(portfolio => (
                            <div className="featured-company"
                             style={{
                                 background: `url(${portfolio.image})`,
                                 backgroundPosition: 'center center',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundSize: 'cover'
                             }} key={portfolio.id}>
                            <div className="content">
                                <div className="details">
                                    <div className="company-name">{portfolio.title}</div>
                                    <div className="quote">
                                        <TextTruncate
                                            line={3}
                                            truncateText="…"
                                            text={portfolio.short_text}
                                        />
                                    </div>
                                </div>
                                <div className="callout">
                                    <Link
                                        className="btn mi-btn-secondary"
                                        to={`/portfolio/more/${portfolio.id}/${portfolio.slug}`}>
                                        Read more</Link>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        isLoading: state.portfolios.isLoading,
        portfolios: state.portfolios.portfolios
    };
}

export default connect(mapStateToProps)(PortfolioSection);
