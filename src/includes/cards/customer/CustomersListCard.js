import React, {Component} from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";

const CustomersListCard = ({ customers, deletecustomer }) => {

    return (
        <div className="row align-items-center" 
                style={{marginTop: '30px', marginBottom: '30px'}}
                onScroll={this.handleScroll}
                ref={ (scroller) => {
                    this.scroller = scroller;
                }}
                >
                    {
                    customers.map(customer => (
                        <div className="col-md-3" key={customer.id}>

                            <div className="card">
                                <div className="card-header">
                                    <h5>{customer.first_name} {customer.last_name}</h5>
                                </div>
                                <div className="card-body">
                                    {renderHTML(customer.address)}
                                </div>

                                <div className="card-footer">

                                    <Link to={`/customer/detail/${customer.id +'/'+ customer.first_name +'-'+ customer.last_name}`}
                                        className="btn btn-primary">
                                        Detail
                                    </Link>

                                    <button 
                                        onClick={() => deletecustomer(customer.id)}
                                        className="btn btn-danger">
                                        Delete
                                    </button>

                                    <Link to={`/customer/edit/${customer.id}`} 
                                        className="btn btn-success">
                                        Edit
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))
            }

        </div>
)};

CustomersListCard.propTypes = {
    customers: propTypes
        .arrayOf(propTypes.shape({
            id: propTypes.number.isRequired, 
            first_name: propTypes.string.isRequired, 
            last_name: propTypes.string.isRequired, 
            email: propTypes.string.isRequired
        })).isRequired,
    deletecustomer: propTypes.func.isRequired
};

export default CustomersListCard;
