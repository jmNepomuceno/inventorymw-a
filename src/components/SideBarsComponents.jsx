import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import receiptImg from '../imgs/receipt.png'

class SideBarsComponents extends Component {
    state = {  }
    render() { 
        return (
            <Link to={this.props.attr.linkUrl}>
                <div className="side-bar-compo">
                    <img id="side-bar-icon" src={receiptImg} />
                    <h3> {this.props.attr.name} </h3>
                </div>
            </Link>
        );
    }
}
 
export default SideBarsComponents;