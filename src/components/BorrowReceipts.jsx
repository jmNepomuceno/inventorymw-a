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
        let receiptDataVar = this.props.receiptData

        // const borrowRcptCardsComponents = receiptDataVar.map(elem =>{
        //     return <BorrowReceiptCards key={elem.id} attr={elem} />
        // })

        return (
            <div id="main-borrow-receipt-div">
                {/* {borrowRcptCardsComponents} */}
                <BorrowReceiptCards key={receiptDataVar.id} attr={receiptDataVar} />
            </div>
        );
    }
}
 
export default BorrowReceipts;