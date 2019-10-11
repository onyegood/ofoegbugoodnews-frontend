import React from "react";
import BlogDetail from "./inc/BlogDetail";
import { NavLink } from "react-router-dom";
import FooterSection from "../../includes/general/FooterSection";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import classes from "./css/LayoutStyle.css";

const ExternalBlogDetailPage = props => (
  <div className={classes.WhiteBG}>
    <ExternalTopNav />
    <div className="clearfix" />
    <BlogDetail data={props} />
    <div className="clearfix" />
    <FooterSection />
  </div>
);

export default ExternalBlogDetailPage;
