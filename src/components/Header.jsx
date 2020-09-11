import React, { Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    state = {
        isLogOutShow: false
    }

    clickLogOut = () => {
        this.setState({isLogOutShow: !this.state.isLogOutShow})
        this.state.isLogOutShow ? this.refs.confirm_log_out_ref.style.display = "none" : 
            this.refs.confirm_log_out_ref.style.display = "block"
        
    }

    render() { 
        return (
            <header className="sub-main-header">

                <div className="visitors-name-header">
                    <h1> {this.props.visitorsName} </h1>
                </div>

                <button id="log-out-btn" onClick={this.clickLogOut}>Log out</button>

                <div className="confirmation-log-out" ref="confirm_log_out_ref">
                    <p>Are you sure you want to Log out?</p>
                    
                    <Link to="/">
                        <button id="log-out-yes-btn">Yes</button>
                    </Link>
                    <button id="log-out-no-btn" onClick={this.clickLogOut}>No</button>
                </div>

            </header>
        );
    }
}
 
export default Header;