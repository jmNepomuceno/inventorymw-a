import React, {useState } from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from './Header'
import SideBar from './SideBar'
import BorrowReceipts from './BorrowReceipts'
import ItemsCardMain from './ItemsCardMain'

function Borrow(props){
    
    const [state, setState] = useState({
        had_borrow_receipts: false,
    });

    const showAllBorrowRcp = () => {
        if(state.had_borrow_receipts === false){
            setState({had_borrow_receipts: !state.had_borrow_receipts})
        }
    }
    
    const [receiptData, setReceiptData] = useState([])
    const [index, setIndex] = useState(0)

    const addIndex = () =>{
        setIndex(index + 1)
    }

    const addReceiptData = (info) =>{
        setReceiptData([...receiptData, {
            id: index,
            userFName: info.userFname,
            userLName: info.userLName,
            userIdNum: info.userIdNum,
            itemName: info.itemName,
            itemPcs: info.itemPcs,
            dateBorrowed: info.dateBorrowed,
            timeBorrowed: info.timeBorrowed,
            dateReturn: info.dateReturn,
            timeClaim: info.timeClaim
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
                             showAllBorrowRcp={showAllBorrowRcp} addReceiptData={addReceiptData} addIndex={addIndex}
                             itemsData={props.itemsData} decItemsData={props.decItemsData} />
                         )} />

                         <Route path="/borrow/borrow-receipt" exact render={() => (
                             <BorrowReceipts had_borrow_receipts={state.had_borrow_receipts}
                                receiptData={receiptData} studentsData={props.studentsData}  />
                         )} />
                     </Switch>
                 </main>
             </div>
    )
}
 
export default Borrow;