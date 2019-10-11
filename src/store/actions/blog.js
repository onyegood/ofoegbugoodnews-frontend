import {
    ADD_BLOG_REQUEST,
    ADD_BLOG_SUCCESS,
    ADD_BLOG_FAILURE,
    FETCH_ALL_BLOG_REQUEST,
    FETCH_ALL_BLOG_SUCCESS,
    FETCH_ALL_BLOG_FAILURE,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAILURE,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAILURE,
    ACTIVATE_BLOG_REQUEST,
    ACTIVATE_BLOG_SUCCESS,
    ACTIVATE_BLOG_FAILURE
} from "../../types/blog";


export const addBlogRequest = blog => ({ type: ADD_BLOG_REQUEST, blog });
export const addBlogSuccess = blog => ({ type: ADD_BLOG_SUCCESS, blog });
export const addBlogFailure = errors => ({ type: ADD_BLOG_FAILURE, errors });

export const fetchBlogsRequest = blogs => ({ type: FETCH_ALL_BLOG_REQUEST, blogs });
export const fetchBlogsSuccess = blogs => ({ type: FETCH_ALL_BLOG_SUCCESS, blogs });
export const fetchBlogsFailure = errors => ({ type: FETCH_ALL_BLOG_FAILURE, errors });

export const updateBlogRequest = (blog, id) => ({ type: UPDATE_BLOG_REQUEST, blog, id });
export const updateBlogSuccess = (blog, id) => ({ type: UPDATE_BLOG_SUCCESS, blog, id });
export const updateBlogFailure = errors => ({ type: UPDATE_BLOG_FAILURE, errors });

export const deleteblog = (id) => ({ type: DELETE_BLOG_REQUEST, id });
export const deleteBlogSuccess = (id) => ({ type: DELETE_BLOG_SUCCESS, id });
export const deleteBlogFailure = errors => ({ type: DELETE_BLOG_FAILURE, errors });

export const activateBlogRequest = (blog, id) => ({ type: ACTIVATE_BLOG_REQUEST, blog, id });

export const activateBlogSuccess = (blog, id) => ({ type: ACTIVATE_BLOG_SUCCESS, blog, id });

export const activateBlogFailure = errors => ({ type: ACTIVATE_BLOG_FAILURE, errors });