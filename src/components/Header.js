import React, { Component } from "react";

class Header extends Component{
    constructor(props){
        super(props);
        this.state= {}
    }
    render(){
        return (
                <header>
                    <h1 id='header-title'> Welcome to Movie World </h1>
                </header>
        )
    }
}



export default Header;