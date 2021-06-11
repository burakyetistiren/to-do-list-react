import PropTypes from 'prop-types'
import React from 'react'
import Item from './Item.js'

const Items = ({items, removeItemClick, itemClick}) => {
    return(
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} itemClick={itemClick} removeItemClick={removeItemClick}/>)
            )}
        </div>
    )
}



export default Items