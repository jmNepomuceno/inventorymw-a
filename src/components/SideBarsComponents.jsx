import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import receiptImg from '../imgs/receipt.png'
import shopImg from '../imgs/shop.png'

class SideBarsComponents extends Component {
    state = {  }
    render() { 
        const iconUrls = {
            1: shopImg,
            2: receiptImg
        }
        return (
            <Link to={this.props.attr.linkUrl}>
                <div className="side-bar-compo">
                    <img id="side-bar-icon" src={iconUrls[this.props.attr.id]} />
                    <h3> {this.props.attr.name} </h3>
                </div>
            </Link>
        );
    }
}
 
export default SideBarsComponents;