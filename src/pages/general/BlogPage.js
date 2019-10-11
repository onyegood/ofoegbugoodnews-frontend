import React from "react";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import classes from "./css/LayoutStyle.css";
import BlogSection from "../../includes/general/BlogSection";

const BlogPage = () => {
  return (
    <div className={classes.WhiteBG}>
      <ExternalTopNav />
      <div className={classes.TopBanner}>
        <div className="container">
          <h1 className="text-center">Blogs</h1>
        </div>
      </div>
      
      <div className="myStack" style={{marginTop: '0'}}>
          <div className="container">                
            <BlogSection />
          </div>
      </div>

      <div className={classes.BottomSpace} />

      <FooterSection />
    </div>
  );
};

export default BlogPage;
