import React, {Component} from "react";
import Menu from "./Menu";

class Menu extends Component {
    render(){
        const menus = this.props.menus;
        return(
            <div>
                <Menu />
            </div> 
        )
    }
}