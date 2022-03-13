import React, {Component} from "react";
import Sub from "./Sub";
import {Link} from "react-router-dom";
import ItemOpen from "./ItemOpen";

class SubMenu extends Component {
    isEmpty(obj){
        return obj && obj.length === 0;
    }
    render(){
        const submenulist = this.props.menu;
        return(
            <li className={ this.isEmpty(submenulist.children) ? "": "treeview"} key={submenulist.id}>
                <Link to={ this.isEmpty(submenulist.children) ? submenulist.slug: "#"}>
                    <i className={ this.isEmpty(submenulist.children) ? 'fa fa-th': "fa fa-files-o"}></i>
                    <span>{submenulist.menu_title}</span>
                    { !this.isEmpty(submenulist.children) ? <ItemOpen />: null }
                </Link>
                {
                    !this.isEmpty(submenulist.children) ? <Sub subs={submenulist.children} parrentlink={submenulist.slug} key={submenulist.id} /> : null
                }
            </li>
        )
    }
}

export default SubMenu;