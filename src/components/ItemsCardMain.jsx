import React, { Component } from 'react';

import ItemsCard from './ItemsCard'

import itemsData from '../files/ItemsList'

class ItemsCardMain extends Component {
    state = {
        had_borrow_receipts: false,
    }


    showAllBorrowRcp = () => {
        this.setState({had_borrow_receipts: this.state.had_borrow_receipts})
    }

    render() { 
        const ItemsCardComponents = itemsData.map(elem =>{
            return <ItemsCard key={elem.key} attr={elem} 
                    usersInfo={this.props.attr.usersInfo} showAllBorrowRcp={this.showAllBorrowRcp}
                    hadBorrowRcp={this.state.had_borrow_receipts}
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