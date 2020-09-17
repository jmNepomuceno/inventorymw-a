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

    const [students , setStudents] = useState([])

    const addStudents = (info) =>{
        setStudents([...students, {
            firstName: info.firstName,
            surName: info.lastName,
            studentID: info.studentID
        }])
    }

    console.log(students);

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
                    <Route path="/borrow" render={(props) => (<Borrow usersInfo={usersData}/>)} />
                    <Route path="/admin" render={(props) => (<Admin/>)} />
                </Switch>
            </div>
        </Router>
    )
}
 
export default App;