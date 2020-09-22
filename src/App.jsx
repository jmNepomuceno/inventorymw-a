import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Borrow from './components/Borrow'
import Admin from './components/Admin'

import Home from './Home'

function App(){

    const [index, setIndex] = useState(-1)
    //const [hadAlready, setHadAlready] = useState(false)
    let hadAlready = false
    const [indexToPass, setIndexToPass] = useState(0)

    const addIndex = (id) =>{
        if(index >= 0){
            for(let i = 0; i <= index; ++i){
                if(studentsData[i].studentID === id){
                    //setHadAlready(!hadAlready)
                    hadAlready = true
                    console.log(hadAlready)
                    break  
                }
            } 

            if(!hadAlready){
                console.log("wala")
                setIndex(index + 1)
                setIndexToPass(index + 1)
            }else{
                console.log("meron")
                for(let elem of studentsData){
                    if(elem.studentID === id){
                        setIndexToPass(elem.idIndex)
                        break
                    }
                }
            }
        }else{
            setIndex(index + 1)
        }
    }
    const [studentsData , setStudents] = useState([])

    const addStudents = (info) =>{  
        
        if(index > -1){
            if(!hadAlready){
                setStudents([...studentsData, {
                    idIndex: info.idIndex + 1,
                    firstName: info.firstName,
                    surName: info.lastName,
                    studentID: info.studentID
                }])
            }
        }else{
            setStudents([...studentsData, {
                idIndex: info.idIndex + 1,
                firstName: info.firstName,
                surName: info.lastName,
                studentID: info.studentID
            }])
        } 

        hadAlready = false
    } 

    const [itemsData, setitemsData] = useState({
            Laptop: 20,
            Projector: 15,
            Marker: 50,
            Books: 100,
            Eraser: 30
    })

    const decItemsData = (item, pcs) =>{
        if(item === "Laptop"){
            setitemsData({...itemsData , Laptop: itemsData.Laptop - pcs})

        }else if(item === "Projector"){
            setitemsData({...itemsData , Projector: itemsData.Projector - pcs})


        }else if(item === "Marker"){
            setitemsData({...itemsData , Marker: itemsData.Marker - pcs})


        }else if(item === "Books"){
            setitemsData({...itemsData , Books: itemsData.Books - pcs})


        }else if(item === "Eraser"){
            setitemsData({...itemsData , Eraser: itemsData.Eraser - pcs})


        }
        
    }

    const [had_borrow_receipts, setHad_borrow_receipts] = useState(false);

    const showAllBorrowRcp = () => {
        if(had_borrow_receipts === false){
            setHad_borrow_receipts(true)
        }
    }

    const [receiptData, setReceiptData] = useState([])

    const addReceiptData = (info) =>{

        if(index > -1){
            if(!hadAlready){
                setReceiptData([...receiptData, {
                    id: index,
                    userFName: info.userFName,
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
        }else{
            setReceiptData([...receiptData, {
                id: index,
                userFName: info.userFName,
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

        hadAlready = false
    }

    console.log(studentsData)
    // console.log(index)

    return (
        <Router basename="inventorymw-a">
            <div>
                <Switch>
                    <Route path="/" exact render={(props) => (<Home 
                        addIndex={addIndex}
                        studentsData={studentsData}
                        addStudents = {addStudents}
                        index={index}
                    />)} />
                    <Route path="/borrow" render={(props) => (
                        <Borrow
                            index={index}
                            studentsData={studentsData[indexToPass]}
                            itemsData={itemsData}
                            decItemsData={decItemsData}
                            had_borrow_receipts={had_borrow_receipts}
                            showAllBorrowRcp={showAllBorrowRcp}
                            receiptData={receiptData[indexToPass]}
                            addReceiptData={addReceiptData}
                        />)} 
                    />
                    <Route path="/admin" render={(props) => (<Admin/>)} />
                </Switch>
            </div>
        </Router>
    )
}
 
export default App;