import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from './Header'
import SideBar from './SideBar'
import BorrowReceipts from './BorrowReceipts'
import ItemsCardMain from './ItemsCardMain'

function Borrow(props){
    let visitorsName = props.studentsData.firstName
    let receiptsDataVar = props.receiptData
    return(
        <div>
                 <Header visitorsName={visitorsName}/>
                 <SideBar />
                 <main className="sub-main">
                     <Switch>
                         <Route path="/borrow/items" exact render={() => (
                             <ItemsCardMain attr={props} had_borrow_receipts={props.had_borrow_receipts}
                             showAllBorrowRcp={props.showAllBorrowRcp} addReceiptData={props.addReceiptData}
                             receiptData={receiptsDataVar} itemsData={props.itemsData} decItemsData={props.decItemsData} 
                             index={props.index} studentsData={props.studentsData} />
                         )} />

                         <Route path="/borrow/borrow-receipt" exact render={() => (
                             <BorrowReceipts had_borrow_receipts={props.had_borrow_receipts}
                                receiptData={receiptsDataVar} studentsData={props.studentsData}  />
                         )} />
                     </Switch>
                 </main>
             </div>
    )
}
 
export default Borrow;