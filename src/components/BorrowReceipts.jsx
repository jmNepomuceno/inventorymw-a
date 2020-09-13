import React, { Component } from 'react';

import clipboardImg from '../imgs/clipboard.png'

class BorrowReceipts extends Component {
    state = {  }
    render() {
        console.log(this.props.receiptData)
        if(!this.props.had_borrow_receipts){
            return (
                <div id="empty-borrow-receipt-div">
                    <img src={clipboardImg} />
                    <h1>Empty Borrowed Receipt</h1>
                </div>
            )
        } 
        return (
            <div>
                <h1>meron</h1>
            </div>
        );
    }
}
 
export default BorrowReceipts;