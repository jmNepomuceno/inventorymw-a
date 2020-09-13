import React, { Component } from 'react';

import BorrowReceiptCards from './BorrowReceiptCards'

import clipboardImg from '../imgs/clipboard.png'

class BorrowReceipts extends Component {
    state = {  }
    render() {
        if(!this.props.had_borrow_receipts){
            return (
                <div id="empty-borrow-receipt-div">
                    <img alt="clipboard logo" src={clipboardImg} />
                    <h1>Empty Borrowed Receipt</h1>
                </div>
            )
        } 

        const borrowRcptCardsComponents = this.props.receiptData.map(elem =>{
            return <BorrowReceiptCards key={elem.id} attr={elem} />
        })
        return (
            <div id="main-borrow-receipt-div">
                {borrowRcptCardsComponents}
            </div>
        );
    }
}
 
export default BorrowReceipts;