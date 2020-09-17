import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Borrow from './components/Borrow'
import Admin from './components/Admin'

import Home from './Home'

// class App extends Component {
//     state = {
//         valUserName: '',
//         valLastName: '',
//         valIDNum: ''
//     }

//     getUserName(e){
//         this.setState({valUserName: e.target.value})
//     }

//     getLastName(e){
//         this.setState({valLastName: e.target.value})
//     }

//     getIDNum(e){
//         this.setState({valIDNum: e.target.value})
//     }

//     render() { 
//         const usersData = {
//             valUserName: this.state.valUserName,
//             valLastName: this.state.valLastName,
//             valIDNum: this.state.valIDNum,
//         }
//         return (
//             <Router basename="inventorymw-a">
//                 <div>
//                     <Switch>
//                         <Route path="/" exact render={(props) => (<Home 
//                             getUserName={this.getUserName.bind(this)} 
//                             getLastName={this.getLastName.bind(this)} 
//                             getIDNum={this.getIDNum.bind(this)} 
//                         />)} />
//                         <Route path="/borrow" render={(props) => (<Borrow usersInfo={usersData}/>)} />
//                         <Route path="/admin" render={(props) => (<Admin/>)} />
//                     </Switch>
//                 </div>
//             </Router>
//         );
//     }
// }

function App(){

    const [state, setState] = useState({
        valUserName: '',
        valLastName: '',
        valIDNum: ''
    });

    const getUserName = (e) =>{
        setState({valUserName: e.target.value})
    }

    const getLastName = (e) =>{
        setState({valLastName: e.target.value})
    }

    const getIDNum = (e) =>{
        setState({valIDNum: e.target.value})
    }

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

    const usersData = {
        valUserName: state.valUserName,
        valLastName: state.valLastName,
        valIDNum: state.valIDNum,
    }

    return (
        <Router basename="inventorymw-a">
            <div>
                <Switch>
                    <Route path="/" exact render={(props) => (<Home 
                        getUserName={getUserName} 
                        getLastName={getLastName} 
                        getIDNum={getIDNum} 
                        addStudents = {addStudents}
                    />)} />
                    <Route path="/borrow" render={(props) => (
                        <Borrow 
                            usersInfo={usersData} 
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