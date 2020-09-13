import React, { Component } from 'react';

import schoolLogo from '../imgs/bpsuLogo.png'
import inventoryLogo from '../imgs/inventory.png'

class Title extends Component {
    state = {  }
    render() { 
        return (
            <header className="home-header">
                <div className="title-div">
                    <img alt="school logo" src={schoolLogo} id="school-logo" />
                    <span>I</span>NVENTORY <span>M</span>ANAGEMENT <span>W</span>EBSITE
                    <img alt="inventory logo" src={inventoryLogo} id="inventory-logo" />
                </div>
                
            </header>
        );
    }
}
 
export default Title;