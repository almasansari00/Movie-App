import React, { Component } from "react";
import Fetch from "./Fetch";
class Header extends Component{
    constructor(props){
        super(props);
        this.state= {search:"" }
    }
    handleSearchChange = (event) =>{
        this.setState({
            search:event.target.value,
        })
    }

    render(){
        return (
            <div>
                <header>
                    <h1 id='header-title'> Welcome to Movie World </h1>
                    <input type="text" id="search" class="search" placeholder="Search" onChange={this.handleSearchChange}/>
                    {/* <button id="btnSearch"> Search</button> */}
                </header>
                <Fetch search={this.state.search}/>
            </div> 
        )
    }
}



export default Header;