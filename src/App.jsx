import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Modal from 'react-modal'

import Borrow from './components/Borrow'

import Home from './Home'

class App extends Component {
    state = {
        valUserName: '',
        valLastName: '',
        valIDNum: ''
    }

    getUserName(e){
        this.setState({valUserName: e.target.value})
    }

    getLastName(e){
        this.setState({valLastName: e.target.value})
    }

    getIDNum(e){
        this.setState({valIDNum: e.target.value})
    }

    render() { 
        const usersData = {
            valUserName: this.state.valUserName,
            valLastName: this.state.valLastName,
            valIDNum: this.state.valIDNum,
        }
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/inventorymw-a" exact render={(props) => (<Home 
                            getUserName={this.getUserName.bind(this)} 
                            getLastName={this.getLastName.bind(this)} 
                            getIDNum={this.getIDNum.bind(this)} 
                        />)} />
                        <Route path="/inventorymw-a/borrow" render={(props) => (<Borrow usersInfo={usersData}/>)} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
 
export default App;