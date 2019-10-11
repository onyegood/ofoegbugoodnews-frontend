import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextTruncate from "react-text-truncate";

class MyBlogListCard extends Component {
  state = {
    payload: []
  };
  render() {
    const { payload, isLoading } = this.props;

    if (isLoading) {
      return <p>loading...</p>;
    }
    return (
        <div className="row">
          {
            payload.map(blog => (
              blog.active === '1' ? <div className="col-md-6" key={blog.id}>
            <Link to={`/blog/${blog.id}/ext/${blog.slug}/${blog.created_at}`}>
                <div className="stack-card">
                <img src={blog.image} alt={blog.slug} className="img-fluid"/>
                <h3>{blog.title}</h3>
                <TextTruncate
                    line={3}
                    truncateText="…"
                    text={blog.short_text}/>
                </div>
                 </Link>
            </div> : ''))
           
          }
        </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    payload: state.blogs.payload,
    isLoading: state.blogs.isLoading
  };
}
export default connect(mapStateToProps)(MyBlogListCard);
