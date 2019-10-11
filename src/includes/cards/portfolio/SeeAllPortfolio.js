import React from "react";
import {Link} from "react-router-dom";

const SeeAllPortfolio = () => {
    return (
        <div className="more-portfolio">
            <div className="content">
                <div className="callout">
                    <Link className="btn mi-btn-secondary" to="/portfolio">
                        SEE ALL PORTFOLIO
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SeeAllPortfolio;