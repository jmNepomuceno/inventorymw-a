import React, { Component } from 'react';

import Modal from 'react-modal'

class BorrowReceiptCards extends Component {
    state = {
        isModalOpen: false
    }

    openModal = (id) =>{
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    closeModal = () =>{
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    render() { 
        return (
            <div className="borrow-receipt-card">
                <h1> {this.props.attr.dateBorrowed} </h1>
                <p id="item-name-receipt"> {this.props.attr.itemName} </p>
                <p id="item-pcs-receipt"> {this.props.attr.itemPcs} {(parseInt(this.props.attr.itemPcs)) > 1 ? 
                        'pieces' : 'piece'} </p>

                <button onClick={this.openModal}> View details: </button>

                <Modal isOpen={this.state.isModalOpen} shouldCloseOnOverlayClick={false} onRequestClose={this.closeModal}>
                    <div className="modal-body">

                        <div id="borrow-info">

                            <h2 id="borrow-info-title">Borrowed Information</h2>

                            <table id="borrow-info-table">
                                <tbody>
                                    <tr>
                                        <td><h1>First Name</h1></td>
                                        <td>{this.props.attr.userFName}</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Last Name</h1></td>
                                        <td>{this.props.attr.userLName}</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Student ID no.</h1></td>
                                        <td>{this.props.attr.userIdNum}</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Item Borrowed</h1></td>
                                        <td>{this.props.attr.itemName}</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Item Pieces</h1></td>
                                        <td>{this.props.attr.itemPcs}</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Date Borrowed</h1></td>
                                        <td>{this.props.attr.dateBorrowed}</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Time Borrowed</h1></td>
                                        <td>{this.props.attr.timeBorrowed}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id="return-info">

                            <h2 id="return-info-title">Return Information</h2>

                            <table id="return-info-table">
                                <tbody>
                                    <tr>
                                        <td><h1>Item to Return</h1></td>
                                        <td>{this.props.attr.itemName}</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Item Pieces</h1></td>
                                        <td>{this.props.attr.itemPcs}</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Date to Return</h1></td>
                                        <td>{this.props.attr.dateReturn}</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Time to Return</h1></td>
                                        <td>Before 4:00pm</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Penalty 1 Day</h1></td>
                                        <td style={{color:'#e60000'}}> 50php </td>
                                    </tr>
                                    <tr>
                                        <td><h1>Penalty 3 Days</h1></td>
                                        <td style={{color:'#e60000'}}> 100php </td>
                                    </tr>
                                    <tr>
                                        <td><h1>Penalty 5 Days</h1></td>
                                        <td style={{color:'#e60000'}}> 500php </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <div id="claim-info">

                            <h2 id="claim-info-title">How to Claim</h2>

                            <table id="claim-info-table">
                                <tbody>
                                    <tr>
                                        <td><h1>Time to Claim</h1></td>
                                        <td>{this.props.attr.timeClaim}</td>
                                    </tr>
                                    <tr>
                                        <td><h1>Where to Claim</h1></td>
                                        <td> Inventory Room </td>
                                    </tr>
                                    <tr>
                                        <td><h1>Look For</h1></td>
                                        <td> Mr. Inventory </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p id="claim-note">
                                <span>Note:</span> Inventory Room is close at Lunch break (12:00nn-1:30pm). Please claim the item
                                only on the given time, if exceeds on the alloted time, the borrow request will be gone. Make sure to
                                have a copy of this receipt.
                            </p>

                            <button id="exit-viewing-rcpt-btn" onClick={this.closeModal}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                EXIT
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
 
export default BorrowReceiptCards;