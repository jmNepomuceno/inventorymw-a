import React, { Component } from 'react';

import Header from './Header'
import SideBar from './SideBar'
import ItemsCard from './ItemsCard'

import itemsData from '../files/ItemsList'

class Borrow extends Component {
    state = {  }
    render() { 
        const ItemsCardComponents = itemsData.map(elem =>{
            return <ItemsCard key={elem.key} attr={elem} usersInfo={this.props.usersInfo} />
        })
        return (
            <div>
                <Header visitorsName={this.props.usersInfo.valUserName}/>
                <SideBar />
                <main className="sub-main">
                    {ItemsCardComponents}
                </main>
            </div>
        );
    }
}
 
export default Borrow;