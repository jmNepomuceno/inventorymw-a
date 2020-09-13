import React, { Component, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import BorrowReceipts from './BorrowReceipts'
import ItemsCardMain from './ItemsCardMain'

// class Borrow extends Component {
//     state = {
//         had_borrow_receipts: false,
//     }

//     showAllBorrowRcp = () => {
//         this.setState({had_borrow_receipts: !this.state.had_borrow_receipts})
//     }

//     render() { 
//         return (
//             <div>
//                 <Header visitorsName={this.props.usersInfo.valUserName}/>
//                 <SideBar />
//                 <main className="sub-main">
//                     <Switch>
//                         <Route path="/borrow/items" exact render={(props) => (
//                             <ItemsCardMain attr={this.props} had_borrow_receipts={this.state.had_borrow_receipts}
//                             showAllBorrowRcp={this.showAllBorrowRcp}/>
//                         )} />
//                         <Route path="/borrow/borrow-receipt" exact render={(props) => (
//                             <BorrowReceipts had_borrow_receipts={this.state.had_borrow_receipts}/>
//                         )} />
//                     </Switch>
//                 </main>
//             </div>
//         );
//     }
// }

function Borrow(props){
    
    const [state, setState] = useState({
        had_borrow_receipts: false,
    });

    const showAllBorrowRcp = () => {
        if(state.had_borrow_receipts == false){
            setState({had_borrow_receipts: !state.had_borrow_receipts})
        }
    }
    
    const [receiptData, setReceiptData] = useState([])

    const addReceiptData = (item,pcs,date) =>{
        setReceiptData([...receiptData, {
            currentDate:date,
            itemName: item,
            itemPcs:pcs

        }])
    }
    return(
        <div>
                 <Header visitorsName={props.usersInfo.valUserName}/>
                 <SideBar />
                 <main className="sub-main">
                     <Switch>
                         <Route path="/borrow/items" exact render={() => (
                             <ItemsCardMain attr={props} had_borrow_receipts={state.had_borrow_receipts}
                             showAllBorrowRcp={showAllBorrowRcp} addReceiptData={addReceiptData}/>
                         )} />
                         <Route path="/borrow/borrow-receipt" exact render={() => (
                             <BorrowReceipts had_borrow_receipts={state.had_borrow_receipts}
                                receiptData={receiptData} />
                         )} />
                     </Switch>
                 </main>
             </div>
    )
}
 
export default Borrow;