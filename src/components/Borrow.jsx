import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import BorrowReceipts from './BorrowReceipts'
import ItemsCardMain from './ItemsCardMain'

class Borrow extends Component {
    state = {}

    render() { 
        return (
            <div>
                <Header visitorsName={this.props.usersInfo.valUserName}/>
                <SideBar />
                <main className="sub-main">
                    <Switch>
                        <Route path="/borrow/items" exact render={(props) => (<ItemsCardMain attr={this.props} />)} />
                        <Route path="/borrow/borrow-receipt" exact render={(props) => (<BorrowReceipts />)} />
                    </Switch>
                </main>
            </div>
        );
    }
}
 
export default Borrow;