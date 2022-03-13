import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render(){
        const users = this.props.users;
        return(
            <header className="main-header">
                <Link to="#" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </Link>
                <nav className="navbar navbar-static-top">
                    <Link to="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </Link>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <Link to="#">
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown user user-menu">
                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <span className="hidden-xs">{users.name}</span>
                                        </Link>
                                        <ul className="dropdown-menu">
                                        <li className="user-header">
                                            <p>
                                            {users.group}
                                            <small>Member since Nov. 2012</small>
                                            </p>
                                        </li>
                                        <li className="user-footer">
                                            <div className="pull-left">
                                            </div>
                                            <div className="pull-right">
                                            <Link to="#" className="btn btn-default btn-flat">Sign out</Link>
                                            </div>
                                        </li>
                                        </ul>
                                    </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;