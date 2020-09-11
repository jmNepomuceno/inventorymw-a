import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    indicator = (e) => {
        this.refs.marker.style.left = e.offsetLeft + 'px'
        this.refs.marker.style.width = e.offsetWidth + 'px'
    }

    handleClick = (e) => {
        this.indicator(e.target)
    }

    componentDidMount(){
        this.refs.marker.style.left = '18px'
        this.refs.marker.style.width = '50px'
    }

    render() {
        return (
            <nav>
                <div  id="marker" ref="marker"></div>
                <a href="index.html" onClick={this.handleClick} >Home</a>
                <a href="index.html" onClick={this.handleClick} >About</a>
                <a href="index.html" onClick={this.handleClick} >Location</a>
                <a href="index.html" onClick={this.handleClick} >Contact</a>
            </nav>
        );
    }
}
 
export default NavBar;