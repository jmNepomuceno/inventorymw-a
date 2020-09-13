import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class BorrowReceiptCards extends Component {
    state = {  }
    render() { 
        return (
            <div className="borrow-receipt-card">
                <h1> {this.props.attr.currentDate} </h1>
                <p id="item-name-receipt"> {this.props.attr.itemName} </p>
                <p id="item-pcs-receipt"> {this.props.attr.itemPcs} {(parseInt(this.props.attr.itemPcs)) > 1 ? 'pieces' : 'piece'} </p>
                <Link>
                    <button> View details: </button>
                </Link>
            </div>
        );
    }
}
 
export default BorrowReceiptCards;