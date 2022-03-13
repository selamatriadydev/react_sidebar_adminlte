import React, {Component} from "react";
import SubMenu from "./SubMenu";

class Menu extends Component {
    render(){
        const menulist = this.props.menulist;
        console.warn(menulist);
        return(
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        {
                           menulist && menulist.map(menu => 
                                <SubMenu menu={menu} key={menu.id}/>
                            )
                        }
                    </ul>
                </section>
            </aside> 
        )
    }
}

export default Menu;