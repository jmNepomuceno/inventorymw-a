import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Borrow from './components/Borrow'
import Admin from './components/Admin'

import Home from './Home'

function App(){

    const [index, setIndex] = useState(-1)

    const addIndex = () =>{
        setIndex(index + 1)
    }
    console.log(index)
    const [studentsData , setStudents] = useState([])

    const addStudents = (info) =>{
        setStudents([...studentsData, {
            firstName: info.firstName,
            surName: info.lastName,
            studentID: info.studentID,
            Laptop: 0,
            Projector: 0,
            Marker: 0,
            Books: 0,
            Eraser: 0
        }])
    } 

    //console.log(studentsData[0])

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


    return (
        <Router basename="inventorymw-a">
            <div>
                <Switch>
                    <Route path="/" exact render={(props) => (<Home 
                        addStudents = {addStudents}
                        addIndex={addIndex}
                    />)} />
                    <Route path="/borrow" render={(props) => (
                        <Borrow
                            index={index}
                            studentsData={studentsData}
                            itemsData={itemsData}
                            decItemsData={decItemsData}
                        />)} 
                    />
                    <Route path="/admin" render={(props) => (<Admin/>)} />
                </Switch>
            </div>
        </Router>
    )
}
 
export default App;