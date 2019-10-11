import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";

class BlogDetailCard extends Component {
  state = {
    isLoading: false,
    errors: null
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.serverErrors });
  }

  render() {
    const blog = this.props.blog || {};

    return <div>
            <img src={blog.image} alt={blog.slug} className="img-fluid" />
            <h1>{blog.title}</h1>
            {renderHTML(blog.body)}
            <hr />
            <Link to="/all/blogs" className="text-center btn btn-primary">
              All Blogs
            </Link>

            <Link to={`/blog/${blog.id}/edit/${blog.slug}/${blog.created_at}`} 
            className="text-center btn btn-success">
              Edit
            </Link>
      </div>;
  }
}

BlogDetailCard.propTypes = {
  blog: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    image: propTypes.string.isRequired
  }).isRequired
};

function mapStateToProps(state, props) {
  if (props.data.match.params.id) {
    return { blog: state.blogs.payload.find(item => item.id === parseInt(props.data.match.params.id)) };
  }

  return {
    serverErrors: state.formErrors.portfolio,
    isLoading: state.portfolio.isLoading,
    blog: null
  };
}

export default connect(mapStateToProps)(BlogDetailCard);
