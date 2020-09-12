import React, { Component } from 'react';

import ItemsCard from './ItemsCard'

import itemsData from '../files/ItemsList'

class ItemsCardMain extends Component {
    state = {}
    
    render() { 
        const ItemsCardComponents = itemsData.map(elem =>{
            return <ItemsCard key={elem.key} attr={elem} 
                    usersInfo={this.props.attr.usersInfo} showAllBorrowRcp={this.props.showAllBorrowRcp}
                    hadBorrowRcp={this.props.had_borrow_receipts}
                />
        })
        return (
            <div>
                {ItemsCardComponents}
            </div>
        );
    }
}
 
export default ItemsCardMain;