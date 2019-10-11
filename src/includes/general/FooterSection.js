import React from "react";
import MySocialLink from "../social_links/MySocialLinks";


const FooterSection = () => {
    return (
        <div className="container-fuil mainfooter">
            <div className="container">
                <div className="row">
                <div className="col-md-8 mx-auto">
                    <h4>Subscribe to my Newsletter</h4>
                <form method="post">
                    <div className="input-group">
                        <input type="text" className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        aria-describedby="btnGroupAddon"/>

                        <div className="input-group-prepend">
                        <button type="button" className="btn btn-primary input-group-text" id="btnGroupAddon">Submit</button>
                        </div>
                    </div>
                </form>
                <div className="blanck"></div>
                <h3>Contact Me</h3>
                <h1 style={{ lineHeight: '1'}}>+234(0)703-100-2066</h1>
                <div className="blanck"></div>
                <div className="mx-auto" style={{width: '40%'}}><MySocialLink /></div>
                <div className="blanck"></div>
                <div className="clearfix"></div>
                <p>c 2013 - 2017, Ofoegbu Goodnews.</p>
            </div>
           </div>
        </div>
    </div>
    );
}

export default FooterSection;

