import React, {Component} from "react";
import {Link} from "react-router-dom";

class Sub extends Component {
    render(){
        const submenus = this.props.subs;
        const parrentlink = this.props.parrentlink;
        return(
            <ul className="treeview-menu">
                { submenus && submenus.map(sub =>
                    <li key={sub.id}><Link to={`${parrentlink}${sub.slug}`}><i className="fa fa-circle-o"></i> {sub.menu_title} </Link></li>
                    )
                }
            </ul>
        )
    }
}

export default Sub;