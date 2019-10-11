import React, {Component} from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

class UserDetailCard extends Component {

  state = {
    isLoading: false,
    errors: null
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.serverErrors });
  };

  render(){
    
const user = this.props.user || {};

    return(
      <div className="container-fluid">
       <div className = "row align-items-center"> 
          <div className="col-md-12">
              <h2>{user.first_name} {user.last_name}</h2>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  <p>{user.created_by}</p>
                  <p>{user.created_at}</p>
                  <p>{user.updated_at}</p>
          </div> 
      </div>
     </div>
    );
  }
}


UserDetailCard.propTypes = {
  user: propTypes.shape({
    id: propTypes.number.isRequired,
    first_name: propTypes.string.isRequired,
    last_name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    phone: propTypes.string.isRequired,
    created_by: propTypes.string.isRequired,
    created_at: propTypes.string.isRequired,
    updated_at: propTypes.string.isRequired
  }).isRequired
};

function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
      return {
          user: state.users.users.find(
          item => item.id === parseInt(props.data.match.params.id)
        )
      }
    }

    return {
        serverErrors: state.formErrors.customer,
        isLoading: state.customer.isLoading,
        user: null
      };
}


export default connect(mapStateToProps)(UserDetailCard);
