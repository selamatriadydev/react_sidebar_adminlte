import React, {Component} from 'react';
import axios from 'axios';
import Menu from './component/Menu';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from './pages/Content';
import Portofolio from "./pages/Portofolio";
class App extends Component{
    state = {
        sidebars : [],
        users:{name:'adi', group:"admin"},
        loader: false,
        urlSidebar: "http://localhost:8000/api/menus"
    }
    getSidebar = async ()=> {
        this.setState({loader:true});
        const sidebars = await axios.get(this.state.urlSidebar);
        this.setState({sidebars:sidebars.data, loader:false});
    }
    componentDidMount(){
        this.getSidebar();
    }
    render(){
        return (
            <div>
            <Router>
                <Header users={this.state.users} />
                <Menu menulist={this.state.sidebars} />
                <Routes>
                    <Route path='/' element={<Content />} />
                    <Route path='/pages/our-services' element={<Content />} />
                    <Route path='/pages/about' element={<Content />} />
                    <Route path='/pages/contact' element={<Content />} />
                    <Route path='/pages/gallery' element={<Content />} />
                    <Route path='/portfolio' element={<Portofolio />} />
                </Routes>
            </Router>
          </div>
        )
    }
}

export default App