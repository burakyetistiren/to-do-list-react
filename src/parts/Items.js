import PropTypes from 'prop-types'
import React from 'react'
import Item from './Item.js'

const Items = ({items, removeItemClick, saveItemClick, itemClick}) => {
    return(
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} itemClick={itemClick} saveItemClick={saveItemClick} removeItemClick={removeItemClick}/>)
            )}
        </div>
    )
}

Items.prototypes = {
    items: PropTypes.array,
    removeItemClick: PropTypes.func,
    saveItemClick: PropTypes.func,
    itemClick: PropTypes.func,
}


export default Items