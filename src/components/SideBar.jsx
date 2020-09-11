import React, { Component } from 'react';

import SideBarsComponents from './SideBarsComponents'

import sideBarsData from '../files/sideBarLists'

class SideBar extends Component {
    state = {  }
    render() { 
        const sideBarArr = sideBarsData.map(elem =>{
            return <SideBarsComponents key={elem.id} attr={elem} />
        })
        return (
            <aside>
                {sideBarArr}
            </aside>
        );
    }
}
 
export default SideBar;