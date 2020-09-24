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
        
        const receiptDataInfo = {
            id: receiptDataVar.id,
            userFName: receiptDataVar.userFName,
            userLName: receiptDataVar.userLName,
            userIdNum: receiptDataVar.userIdNum
        }

        const borrowRcptCardsComponents = []
        for(let i = 0; i < receiptDataVar.itemName.length; ++i){
            borrowRcptCardsComponents.push(
                <BorrowReceiptCards key={receiptDataVar.key[i]} 
                        attr={receiptDataInfo} 
                        itemName={receiptDataVar.itemName[i]} itemPcs={receiptDataVar.itemPcs[i]} dateBorrowed={receiptDataVar.dateBorrowed[i]}
                        timeBorrowed={receiptDataVar.timeBorrowed[i]} dateReturn={receiptDataVar.dateReturn[i]} timeClaim={receiptDataVar.timeClaim[i]}
                />
            )
        }

        return (
            <div id="main-borrow-receipt-div">
                {borrowRcptCardsComponents}
                {/* <BorrowReceiptCards key={receiptDataVar.id} attr={receiptDataVar} /> */}
            </div>
        );
    }
}
 
export default BorrowReceipts;