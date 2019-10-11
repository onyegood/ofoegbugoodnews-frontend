import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";

class MessageDetailsCard extends Component {
    state = {
        isLoading: false,
        errors: null
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.serverErrors });
    }

    render() {
        const payload = this.props.payload || {};

        return <div>
                    <h2>{payload.title +' '+ payload.name}</h2>
                    <p><i className="fa fa-envelope" /> {payload.email}</p>
                    <p><i className="fa fa-phone" /> {payload.phone}</p>
                    <h4>{payload.request_type}</h4>
                    {renderHTML(payload.brief)}
                    <hr />
                    <Link to="/all/blogs" className="text-center btn btn-primary">
                        Reply Message                       
                    </Link>
            </div>;
    }
}

MessageDetailsCard.propTypes = {
    payload: propTypes.shape({
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        brief: propTypes.string.isRequired,
        email: propTypes.string.isRequired,
        phone: propTypes.string.isRequired,
        request_type: propTypes.string.isRequired
    }).isRequired
};

function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
        return { payload: state.contactme.payload.find(item => item.id === parseInt(props.data.match.params.id)) };
    }

    return {
        serverErrors: state.formErrors.contactme,
        isLoading: state.contactme.isLoading,
        payload: null
    };
}

export default connect(mapStateToProps)(MessageDetailsCard);
