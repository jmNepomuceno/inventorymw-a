import React, { Component } from 'react';

import ItemsCard from './ItemsCard'

import itemsData from '../files/ItemsList'

class ItemsCardMain extends Component {
    state = {}
    
    render() { 
        const ItemsCardComponents = itemsData.map(elem =>{
            return <ItemsCard key={elem.key} attr={elem} 
                    showAllBorrowRcp={this.props.showAllBorrowRcp}
                    hadBorrowRcp={this.props.had_borrow_receipts} addReceiptData={this.props.addReceiptData}
                    itemsData={this.props.itemsData} decItemsData={this.props.decItemsData}
                    index={this.props.index} studentsData={this.props.studentsData}/>
        })
        return (
            <div>
                {ItemsCardComponents}
            </div>
        );
    }
}
 
export default ItemsCardMain;