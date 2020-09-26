import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import adminBackground from '../imgs/adminImg.jpg'
import teachersBackground from '../imgs/teachersImg.jpg'
import studentsBackground from '../imgs/collegeStudents.jpg'

class VisitorsSection extends Component {
    state = {
        is_log_showed: false,
        borrowClicked: false,
        returnClicked: false
    }

    showLoginForm = () => {
        this.state.is_log_showed ? this.refs.visitorsDiv.style.left = "315px" : this.refs.visitorsDiv.style.left = "0px" 
        this.state.is_log_showed ? this.refs.visitorsCardRef.style.left = '0' : this.refs.visitorsCardRef.style.left = '-315px'
        this.setState({is_log_showed: !this.state.is_log_showed})

        // this.refs.first_name_ref.value = ""
        // this.refs.last_name_ref.value = ""
        // this.refs.id_name_ref.value = ""
    }

    borrowClick = (id) =>{
        this.setState({borrowClicked: !this.state.borrowClicked})

        if(this.refs.first_name_ref.value.length > 0 && this.refs.last_name_ref.value.length > 0 &&
            this.refs.id_name_ref.value.length > 0){

                if(id === 1){
                    this.refs.btn_log_ref_1.style.pointerEvents = "auto"
                    this.refs.btn_log_ref_1.style.opacity = "1"
                }
                if(id === 3){
                    this.refs.btn_log_ref_3.style.pointerEvents = "auto"
                    this.refs.btn_log_ref_3.style.opacity = "1"
                }
            }
    }

    adminBtnShow = () =>{
        if(this.refs.username_ref.value !== 'Admin' && this.refs.password_ref.value !== 'Administrator'){
            this.refs.username_ref.style.border = '2px solid red'
            this.refs.password_ref.style.border = '2px solid red'

            this.refs.wrong_icon_u_ref.style.display = "block"
            this.refs.wrong_icon_p_ref.style.display = "block"
        }
        else if(this.refs.username_ref.value !== 'Admin' && this.refs.password_ref.value === 'Administrator'){
            this.refs.username_ref.style.border = '2px solid red'
            this.refs.password_ref.style.border = 'none'

            this.refs.wrong_icon_u_ref.style.display = "block"
            this.refs.wrong_icon_p_ref.style.display = "none"
        }
        else if(this.refs.username_ref.value === 'Admin' && this.refs.password_ref.value !== 'Administrator'){
            this.refs.username_ref.style.border = 'none'
            this.refs.password_ref.style.border = '2px solid red'

            this.refs.wrong_icon_u_ref.style.display = "none"
            this.refs.wrong_icon_p_ref.style.display = "block"
        }else{
            this.refs.username_ref.style.border = 'none'
            this.refs.password_ref.style.border = 'none'

            this.refs.wrong_icon_u_ref.style.display = "none"
            this.refs.wrong_icon_p_ref.style.display = "none"

            this.refs.admin_btn_logIn_ref.style.pointerEvents = "auto"
            this.refs.admin_btn_logIn_ref.style.opacity = "1"
        }
    }

    addStudInfo = () =>{
        this.props.usersInfo.addIndex(this.refs.id_name_ref.value)

        this.props.usersInfo.addStudents({
            idIndex: this.props.usersInfo.index,
            firstName: this.refs.first_name_ref.value,
            lastName: this.refs.last_name_ref.value,
            studentID: this.refs.id_name_ref.value,
        })  
    }

    render() {
        const imgUrlStyles = {
            1: teachersBackground,
            2: adminBackground,
            3: studentsBackground
        }

        const visitorsCardTitle = {
            1: 'Teachers',
            2: 'Admin',
            3: 'Students'
        }

        const visitorsCardPara = {
            1: 'Teachers can Borrow and Return items from this Inventory.',
            2: 'Admin is the one who manage all the items in the Inventory',
            3: 'Students can Borrow and Return items from this Inventory.'
        }

        if(this.props.attr.id === 2){
            return (
                <section className="visitors-section">
                    <div className="inner-visitors-section">
                        <div className="visitors-card" ref="visitorsCardRef">
                            <img src={imgUrlStyles[this.props.attr.id]} ref="ref_img" alt="card logo" />
                            <label>
                                <h3> {visitorsCardTitle[this.props.attr.id]} </h3>
                                <p> {visitorsCardPara[this.props.attr.id]} </p>
                            </label>
                            <button
                                className={this.props.attr.cName} 
                                onClick={this.showLoginForm}
                                ref="admin_btn_ref">
                            Visit as 
                            </button>
                        </div>

                        <div 
                            className="visitors-div" 
                            ref="visitorsDiv">

                            <div className="log-icon"></div>
                            <button id="exit-visitors-div" onClick={this.showLoginForm}>Back</button>

                            <div id="user-name-div">
                                <div id="u-name-icon"></div>
                                <input className="u-name" 
                                    type="text" 
                                    placeholder="Username" 
                                    ref="username_ref"
                                    onChange={this.adminBtnShow}/>
                                <div id="wrong-icon-u" ref="wrong_icon_u_ref"></div>
                            </div>

                            <div id="pass-name-div">
                                <div id="p-name-icon"></div>
                                <input 
                                    className="p-name" 
                                    type="text" 
                                    placeholder="Password" 
                                    ref="password_ref" 
                                    onChange={this.adminBtnShow}
                                />
                                <div id="wrong-icon-p" ref="wrong_icon_p_ref"></div>
                            </div>

                            <Link to="/admin">
                                <button 
                                        className="logIn-btn"
                                        ref="admin_btn_logIn_ref">
                                        
                                    <span> Log In </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            );
        }else{
            return (
                <section className="visitors-section">
                    <div className="inner-visitors-section">
                        <div className="visitors-card" ref="visitorsCardRef">
                            <img src={imgUrlStyles[this.props.attr.id]} ref="ref_img" alt="card logo"/>
                            <label>
                                <h3> {visitorsCardTitle[this.props.attr.id]} </h3>
                                <p>{visitorsCardPara[this.props.attr.id]}</p>
                            </label>
                            <button  
                                className={this.props.attr.cName} 
                                onClick={this.showLoginForm}>
                            Visit as 
                            </button>
                        </div>

                        <div 
                            className="visitors-div" 
                            ref="visitorsDiv" >

                            <div className="log-icon"></div>
                            <button id="exit-visitors-div" onClick={this.showLoginForm}>Back</button>

                            <div id="first-name-div">
                                <div id="f-name-icon"></div>
                                <input className="f-name" type="text" placeholder="First Name" 
                                ref="first_name_ref"/>
                                <div id="warning-icon-f" ref="warning_icon_f_ref"></div>
                            </div>

                            <div id="last-name-div">
                                <div id="l-name-icon"></div>
                                <input className="l-name" type="text" placeholder="Last Name" 
                                ref="last_name_ref" />
                                <div id="warning-icon-l" ref="warning_icon_l_ref"></div>
                            </div>

                            <div id="id-name-div">
                                <div id="id-name-icon"></div>
                                <input 
                                    className="id-name" 
                                    type="text" 
                                    placeholder="ID Number" 
                                    ref="id_name_ref"
                                />
                                <div id="warning-icon-id" ref="warning_icon_id_ref"></div>
                            </div>

                            <Link to="/borrow/items">
                                <button 
                                    className="logIn-btn"
                                    ref={"btn_log_ref_" + this.props.attr.id}
                                    onClick={this.addStudInfo}>
                                    <span> Log In </span>
                                </button>
                            </Link>
                            
                            <button
                                className="borrow-btn"
                                ref="borrow_btn_ref"
                                onClick={() => this.borrowClick(this.props.attr.id)}>
                                Borrow
                            </button>
                            

                            <button
                                className="return-btn"
                                ref="return_btn_ref"
                                onClick={this.returnClick}>
                                Return
                            </button>

                        </div>
                    </div>
                </section>
            );
        }
    }
}
 
export default VisitorsSection;