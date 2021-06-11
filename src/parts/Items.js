import PropTypes from 'prop-types'
import React from 'react'
import Item from './Item.js'


const Items = ({items, itemOnClick}) => {
    return(
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} itemClick={itemOnClick}/>)
            )}
        </>
    )
}



export default Items