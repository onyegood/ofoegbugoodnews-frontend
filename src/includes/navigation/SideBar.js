import React, {Component} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import classes from "./css/SideBar.css";
import AvatarPlaceholder from "../../includes/placeholders/AvatarPlaceholder";
import UserAvatarCard from "../cards/user/UserAvatarCard";

class SideBar extends Component {

    state = {
        info: {}
    }

    componentDidMount = () => {
        let data = JSON.parse(sessionStorage.getItem('ud'));
        this.setState({ info: data })
    };
    
    render() {
        const {auth} = this.props;
        const {info} = this.state;
        return (
            <div
                className="col-md-3" id="sidebar">
                <div className="list-group border-0 card text-center text-md-left">
                    
                    {   info === null ?
                        (auth.avatar 
                         ? <AvatarPlaceholder
                             avatarSrc={auth.avatar}
                             avatarAlt={auth.first_name +' '+ auth.last_name}
                             avatarWidth={'100px'}
                             avatarHeight={'100px'}
                             avatarMarginBottom={'5%'}
                             avatarMarginTop={'5%'}/>
                         : <AvatarPlaceholder
                             avatarAlt={auth.first_name +' '+ auth.last_name}
                             avatarWidth={'100px'}
                             avatarHeight={'100px'}
                             avatarMarginBottom={'5%'}
                             avatarMarginTop={'5%'}/> )
                             :
                            
                        <AvatarPlaceholder
                            avatarSrc={info.provider_pic}
                            avatarAlt={info.name}
                            avatarWidth={'100px'}
                            avatarHeight={'100px'}
                            avatarMarginBottom={'5%'}
                            avatarMarginTop={'5%'} />
                      }
                    <p className={classes.AvatarName}>
                        { info === null ? auth.first_name + ' ' + auth.last_name : info.name }
                    </p>

                    {info === null ? <UserAvatarCard /> : '' }

                    <NavLink
                        to="/user/dashboard"
                        className="list-group-item d-inline-block collapsed">
                        <i className="fa fa-dashboard"></i>
                        &nbsp;
                        <span className="d-none d-md-inline"> 
                        Dashboard</span>
                    </NavLink>

                    <NavLink
                        to="#userManager"
                        className="list-group-item d-inline-block collapsed"
                        data-toggle="collapse"
                        aria-expanded="false">
                        <i className="fa fa-users"></i>
                        &nbsp;
                        <span className="d-none d-md-inline">
                             User Manager</span>
                    </NavLink>

                    <div className="collapse" id="userManager" data-parent="#sidebar">
                        <NavLink to="/all/users" className="list-group-item">All Users</NavLink>
                        <NavLink to="/new/user" className="list-group-item">Add User</NavLink>
                        <NavLink to="/active/users" className="list-group-item">Active Users</NavLink>
                        <NavLink to="/online/users" className="list-group-item">Online Users</NavLink>
                        <NavLink to="/offline/users" className="list-group-item">Offline Users</NavLink>
                    </div>


                    <NavLink
                        to="#profileManager"
                        className="list-group-item d-inline-block collapsed"
                        data-toggle="collapse"
                        aria-expanded="false">
                        <i className="fa fa-user"></i>
                        &nbsp;
                        <span className="d-none d-md-inline">
                             Profile Manager</span>
                    </NavLink>

                    <div className="collapse" id="profileManager" data-parent="#sidebar">
                        <NavLink to="/all/profile" className="list-group-item">View Profile</NavLink>
                        <NavLink to="/new/profile" className="list-group-item">Add Profile</NavLink>
                    </div>

                    <NavLink
                        to="#experienceManager"
                        className="list-group-item d-inline-block collapsed"
                        data-toggle="collapse"
                        aria-expanded="false">
                        <i className="fa fa-tasks"></i>
                        &nbsp;
                        <span className="d-none d-md-inline">
                             Experience Manager</span>
                    </NavLink>

                    <div className="collapse" id="experienceManager" data-parent="#sidebar">
                        <NavLink to="/all/experience" className="list-group-item">View Experience</NavLink>
                        <NavLink to="/new/experience" className="list-group-item">Add Experience</NavLink>
                    </div>

                    <NavLink
                        to="#schoolManager"
                        className="list-group-item d-inline-block collapsed"
                        data-toggle="collapse"
                        aria-expanded="false">
                        <i className="fa fa-graduation-cap"></i>
                        &nbsp;
                        <span className="d-none d-md-inline">
                             School Manager</span>
                    </NavLink>

                    <div className="collapse" id="schoolManager" data-parent="#sidebar">
                        <NavLink to="/all/schools" className="list-group-item">View School</NavLink>
                        <NavLink to="/new/school" className="list-group-item">Add School</NavLink>
                    </div>

                    <NavLink
                        to="#customerManager"
                        className="list-group-item d-inline-block collapsed"
                        data-toggle="collapse"
                        aria-expanded="false">
                        <i className="fa fa-users"></i>
                        &nbsp;
                        <span className="d-none d-md-inline">
                             Customer Manager</span>
                    </NavLink>
                    <div className="collapse" id="customerManager" data-parent="#sidebar">
                        <NavLink to="/all/customers" className="list-group-item">All Customers</NavLink>
                        <NavLink to="/new/customer" className="list-group-item">Add Customer</NavLink>
                        <NavLink to="/active/customers" className="list-group-item">Active Customers</NavLink>
                        <NavLink to="/online/customers" className="list-group-item">Online Customers</NavLink>
                        <NavLink to="/offline/customers" className="list-group-item">Offline Customers</NavLink>
                    </div>

                    <NavLink
                        to="#blogManager"
                        className="list-group-item d-inline-block collapsed"
                        data-toggle="collapse"
                        aria-expanded="false">
                        <i className="fa fa-comment"></i>
                        &nbsp;
                        <span className="d-none d-md-inline">
                             Blog Manager</span>
                    </NavLink>
                    <div className="collapse" id="blogManager" data-parent="#sidebar">
                        <NavLink to="/all/blogs" className="list-group-item">All Blog</NavLink>
                        <NavLink to="/new/blog" className="list-group-item">Add Blog</NavLink>
                    </div>

                    <NavLink
                        to="#portfolioManager"
                        className="list-group-item d-inline-block collapsed"
                        data-toggle="collapse"
                        aria-expanded="false">
                        <i className="fa fa-address-card"></i>
                        &nbsp;
                        <span className="d-none d-md-inline">
                             Portfolio Manager</span>
                    </NavLink>
                    <div className="collapse" id="portfolioManager" data-parent="#sidebar">
                        <NavLink to="/all/portfolios" className="list-group-item">All Portfolio</NavLink>
                        <NavLink to="/new/portfolio" className="list-group-item">Add Portfolio</NavLink>
                    </div>

                    <NavLink
                        to="#conactManager"
                        className="list-group-item d-inline-block collapsed"
                        data-toggle="collapse"
                        aria-expanded="false">
                        <i className="fa fa-envelope"></i>
                        &nbsp;
                        <span className="d-none d-md-inline">
                             Contact Manager</span>
                    </NavLink>
                    <div className="collapse" id="conactManager" data-parent="#sidebar">
                        <NavLink to="/all/messages" className="list-group-item">All Messages</NavLink>
                        <NavLink to="/read/messages" className="list-group-item">Read Messages</NavLink>
                        <NavLink to="/unread/messages" className="list-group-item">Unread Messages</NavLink>
                    </div>

                    <NavLink
                        to="#stackManager"
                        className="list-group-item d-inline-block collapsed"
                        data-toggle="collapse"
                        aria-expanded="false">
                        <i className="fa fa-code"></i>
                        &nbsp;
                        <span className="d-none d-md-inline">Stack Manager</span>
                    </NavLink>
                    <div className="collapse" id="stackManager" data-parent="#sidebar">
                        <NavLink to="/all/stacks" className="list-group-item">All Stacks</NavLink>
                        <NavLink to="/new/stack" className="list-group-item">New Stack</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {auth: state.auth};
}

export default connect(mapStateToProps, null)(SideBar);