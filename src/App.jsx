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
                    break  
                }
            } 

            if(!hadAlready){
                setIndex(index + 1)
                setIndexToPass(index + 1)   
                setHad_borrow_receipts(false)
            }else{
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
            Erasers: 30
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

        setReceiptData([...receiptData, {
            key: info.keyId,
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

    const delReceiptData = (userId, itemBorrowData) =>{    

        for(let i = 0; i < receiptData.length; ++i){
            if(i === parseInt(userId)){
                var itemIndexToDel = 0;
                for(let j = 0; j < receiptData[i].itemName.length; ++j){
                    if(itemBorrowData.itemName === receiptData[i].itemName[j]){
                        itemIndexToDel = j
                        break
                    }
                }

                var itemPcsVal = parseInt(receiptData[i].itemPcs[itemIndexToDel])

                if(receiptData[i].itemName[itemIndexToDel] === "Laptop"){
                    setitemsData({...itemsData , Laptop: itemsData.Laptop + itemPcsVal})
        
                }else if(receiptData[i].itemName[itemIndexToDel] === "Projector"){
                    setitemsData({...itemsData , Projector: itemsData.Projector + itemPcsVal})
        
        
                }else if(receiptData[i].itemName[itemIndexToDel] === "Marker"){
                    setitemsData({...itemsData , Marker: itemsData.Marker + itemPcsVal})
        
        
                }else if(receiptData[i].itemName[itemIndexToDel] === "Books"){
                    setitemsData({...itemsData , Books: itemsData.Books + itemPcsVal})
        
        
                }else if(receiptData[i].itemName[itemIndexToDel] === "Eraser"){
                    setitemsData({...itemsData , Eraser: itemsData.Eraser + itemPcsVal})
                }  

                receiptData[i].itemName.splice(itemIndexToDel,1)
                receiptData[i].itemPcs.splice(itemIndexToDel,1)
                receiptData[i].dateBorrowed.splice(itemIndexToDel,1)
                receiptData[i].timeBorrowed.splice(itemIndexToDel,1)
                receiptData[i].dateReturn.splice(itemIndexToDel,1)
                receiptData[i].timeClaim.splice(itemIndexToDel,1)

                break
            }
        }

        if(receiptData[userId].itemName.length === 0){
            setHad_borrow_receipts(false)
        }

        console.log(receiptData)
    }

    
    let a = indexToPass
    let hadAlready_b = false
    for(let i = indexToPass + 1; i < receiptData.length; ++i){
        if(receiptData[indexToPass].userIdNum === receiptData[i].userIdNum){
            a += 1
            hadAlready_b = true;
        }
    }
    if(hadAlready_b){
        receiptData.splice(a , 1)
    }

    console.log(receiptData)
    //console.log(indexToPass)
    //console.log(receiptData[indexToPass])

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
                            delReceiptData={delReceiptData}
                        />)} 
                    />
                    <Route path="/admin" render={(props) => (<Admin/>)} />
                </Switch>
            </div>
        </Router>
    )
}
 
export default App;