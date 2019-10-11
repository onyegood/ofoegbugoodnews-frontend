import React from "react";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import classes from "./css/LayoutStyle.css";

const AboutPage = () => {
  return <div className={classes.WhiteBG}>
      <ExternalTopNav />
      <div className={classes.TopBanner}>
        <div className="container">
          <h1 className="text-center">About Me</h1>
        </div>
      </div>

      <div className={classes.AboutMe}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="../assets/img/device-layout.png" alt="About Me" className="img-fluid"/>
            </div>
            <div className="col-md-6">
              <p>
                I am a Web Developer with broad experience garnered from
                working in the biggest E-Learning Industries in Nigeria. My
                skills ranges from PHP, Laravel, React, Angular, JSON, MYSQL,
                HTML5, CSS3, Javascript to a Good knowledge of Front-End
                Development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.BottomSpace} />

      <FooterSection />
    </div>;
};

export default AboutPage;
