import React, { Component } from 'react';

import Modal from 'react-modal'

import laptopImg from '../imgs/laptop.png'
import projectorImg from '../imgs/projector.png'
import markerImg from '../imgs/marker.png'
import bookImg from '../imgs/book.png'
import eraserImg from '../imgs/clean.png'

Modal.setAppElement('#root')
class ItemsCard extends Component {
    constructor(props){
        super(props)

        let todayDate = new Date(),
        date = (todayDate.getMonth() + 1) +  '-' + todayDate.getDate() +  '-' + todayDate.getFullYear();

        let todayTime = new Date(),
        time = ((todayTime.getHours() > 12) ? todayTime.getHours() - 12 : todayTime.getHours()) + ':' + todayTime.getMinutes() + 
            ((todayTime.getHours() >= 12) ? 'pm' : 'am')

        let claimTime = new Date(),
        claimHours = claimTime.getHours(),
        claimMns = claimTime.getMinutes()
        
        let timeToClaim
        if(claimHours == 11 || claimHours == 12){
            claimHours += 2
        }else{
            claimHours += 1
        }

        if(claimHours > 12){
            claimHours = claimHours - 12
        }
        
        if(claimMns.toString().length == 1){
            claimMns = "0" + claimMns.toString()    
        }
        timeToClaim = claimHours + ":" + claimMns + ((claimHours >= 12) ? 'am' : 'pm')
    
        
        this.state = {
            userBorrowedItemName: '',
            userBorrowedItemPcs: 0,
            isModalOpen: false,
            currentDate: date,
            currentTime: time,
            dateToReturn: (this.props.attr.daysToReturn == 0) ? 'Today' : 'Tomorrow',
            timeToReturn:'4:00pm',
            timeToClaim: timeToClaim,
        }
    }


    incrementClick = () =>{
        this.refs.pcs_counter_ref.textContent = parseInt(this.refs.pcs_counter_ref.textContent) + 1
        this.refs.confirm_btn_ref.style.pointerEvents = "auto"
        this.refs.confirm_btn_ref.style.opacity = "1"
    }

    decrementClick = () =>{
        if(parseInt(this.refs.pcs_counter_ref.textContent) >= 1){
            this.refs.pcs_counter_ref.textContent = parseInt(this.refs.pcs_counter_ref.textContent) - 1
        }
        if(parseInt(this.refs.pcs_counter_ref.textContent) == 0){
            this.refs.confirm_btn_ref.style.pointerEvents = "none"
        this.refs.confirm_btn_ref.style.opacity = "0.5"
        }
    }

    openModal = (item) =>{
        this.setState({isModalOpen: !this.state.isModalOpen})
        this.setState({userBorrowedItemName: item})
        this.setState({userBorrowedItemPcs: this.refs.pcs_counter_ref.textContent})
    }

    closeModal = () =>{
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    finalConfirmedBorrow = (item) =>{
        alert('Successfully Borrowed Request. Thank you for using our Site.')
        this.setState({isModalOpen: !this.state.isModalOpen})
        this.props.attr.pieces -= parseInt(this.refs.pcs_counter_ref.textContent)
        this.refs.pcs_counter_ref.textContent = 0

        this.props.showAllBorrowRcp()

        this.props.addReceiptData(
            this.refs.item_name_ref.textContent,
            this.refs.item_pcs_ref.textContent,
            this.refs.date_borrowed_ref.textContent
        )
    }

    render() { 
        const colorCode = {
            colorID_1:'#858bf9',
            colorID_2:'#f8cc3a',
            colorID_3:'#f99053',
            btmColor_1:'#0b17f4',
            btmColor_2:'#c59907',
            btmColor_3:'#dd5608'
        }

        const imgPath = {
            item_img_1: laptopImg,
            item_img_2: projectorImg,
            item_img_3: markerImg,
            item_img_4: bookImg,
            item_img_5: eraserImg
        }

        return (
                <div className="items-card" 
                    id={this.props.attr.id} 
                    style={
                        {background: colorCode["colorID_" + this.props.attr.colorId]}
                    }>
                    
                    {/* card content */}
                    <h2 className="item-card-name">{this.props.attr.name}</h2>
                    <p className="item-card-pcs">Available Pcs: {this.props.attr.pieces} </p>

                    <img className="items-card-img" src={imgPath["item_img_" + this.props.attr.imgId]} />

                    <div className="items-card-bottom" 
                        style={
                            {background: colorCode["btmColor_" + this.props.attr.colorId]}
                        }>
                        
                        <button id="plus-btn" onClick={this.incrementClick}>+</button>
                        <button id="minus-btn" onClick={this.decrementClick}>-</button>
                        <h3 id="pcs-counter" ref="pcs_counter_ref">0</h3>
                        <button id="confirm-btn" 
                            ref="confirm_btn_ref"
                            onClick={() => this.openModal(this.props.attr.name)}>
                        Confirm Borrow
                        </button>

                        <Modal isOpen={this.state.isModalOpen} shouldCloseOnOverlayClick={false} onRequestClose={this.closeModal}>
                            <div className="modal-body">

                                <div id="borrow-info">

                                    <h2 id="borrow-info-title">Borrowed Information</h2>

                                    <table id="borrow-info-table">
                                        <tbody>
                                            <tr>
                                                <td><h1>First Name</h1></td>
                                                <td> {this.props.usersInfo.valUserName} </td>
                                            </tr>
                                            <tr>
                                                <td><h1>Last Name</h1></td>
                                                <td> {this.props.usersInfo.valLastName} </td>
                                            </tr>
                                            <tr>
                                                <td><h1>Student ID no.</h1></td>
                                                <td> {this.props.usersInfo.valIDNum} </td>
                                            </tr>
                                            <tr>
                                                <td><h1>Item Borrowed</h1></td>
                                                <td ref="item_name_ref"> {this.state.userBorrowedItemName} </td>
                                            </tr>
                                            <tr>
                                                <td><h1>Item Pieces</h1></td>
                                                <td ref="item_pcs_ref"> {this.state.userBorrowedItemPcs} </td>
                                            </tr>
                                            <tr>
                                                <td><h1>Date Borrowed</h1></td>
                                                <td ref="date_borrowed_ref"> {this.state.currentDate} </td>
                                            </tr>
                                            <tr>
                                                <td><h1>Time Borrowed</h1></td>
                                                <td> {this.state.currentTime} </td>
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
                                                <td> {this.state.userBorrowedItemName} </td>
                                            </tr>
                                            <tr>
                                                <td><h1>Item Pieces</h1></td>
                                                <td> {this.state.userBorrowedItemPcs} </td>
                                            </tr>
                                            <tr>
                                                <td><h1>Date to Return</h1></td>
                                                <td> {this.state.dateToReturn} </td>
                                            </tr>
                                            <tr>
                                                <td><h1>Time to Return</h1></td>
                                                <td> {this.state.timeToReturn} </td>
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
                                                <td> {this.state.timeToClaim} - 3:00pm </td>
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
                                </div>

                                <div className="confirm-cancel-div">
                                    <button id="final-confirm-btn" onClick={() => this.finalConfirmedBorrow(this.props.attr.name)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        CONFIRM
                                    </button>

                                    <button id="final-cancel-btn" onClick={this.closeModal}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        CANCEL
                                    </button>
                                </div>

                            </div>
                        </Modal>
                        
                    </div>

                </div>
        );
    }
}
 
export default ItemsCard;