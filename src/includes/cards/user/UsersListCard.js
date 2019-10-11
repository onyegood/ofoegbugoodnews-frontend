import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import AvatarPlaceholder from "../../placeholders/AvatarPlaceholder";

const UsersListCard = ({ users, deleteuser }) => {

    return (
        <div className="row align-items-center" style={{marginTop: '30px', marginBottom: '30px'}}>
            {
                    users.map(user => (
                        <div className="col-md-4" key={user.id}>

                            <div className="card">
                                
                                <div className="card-header">
                                        { user.avatar 
                                        ? <AvatarPlaceholder
                                                avatarSrc={user.avatar}
                                                avatarAlt={user.first_name +' '+ user.last_name}
                                                avatarMarginBottom={'5%'}
                                                avatarMarginTop={'5%'}/>
                                        : <AvatarPlaceholder
                                                avatarAlt={user.first_name +' '+ user.last_name}
                                                avatarMarginBottom={'5%'}
                                                avatarMarginTop={'5%'}/> 
                                        }
                                    <h5 className="text-center">{user.first_name} {user.last_name}</h5>
                                </div>
                                <div className="card-body">
                                    <p>{user.email}</p>
                                    <p>{user.phone}</p>
                                    <p>{user.created_by}</p>
                                </div>

                                <div className="card-footer">

                                    <Link to={`/user/detail/${user.id}`}
                                        className="btn btn-primary">
                                        Detail
                                    </Link >

                                    <button 
                                        onClick={() => deleteuser(user.id)}
                                        className="btn btn-danger">
                                        Delete
                                    </button>

                                    <Link to={`/edit/user/${user.id}`} 
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

UsersListCard.propTypes = {
    users: propTypes
        .arrayOf(propTypes.shape({
            id: propTypes.number.isRequired, 
            first_name: propTypes.string.isRequired, 
            last_name: propTypes.string.isRequired, 
            email: propTypes.string.isRequired,
            phone: propTypes.string.isRequired,
            created_by: propTypes.string.isRequired,
        })).isRequired,
    deleteuser: propTypes.func.isRequired
};

export default UsersListCard;
