import PropTypes from 'prop-types'
import React from 'react'
import {useState} from 'react'
import './Item.css'

const Item = ({item, removeItemClick, itemClick}) => {
    const [style, setStyle] = useState({display: 'none'});

    return(
        <div className="Item" 
            onMouseEnter={e => {
                setStyle({display: 'block'});
            }}
            onMouseLeave={e => {
                setStyle({display: 'none'})
            }}
        >
            <h className="ItemText" onClick={() => itemClick(item.id)}>{item.description}</h>
            <button className="ButtonRemove" style={style} onClick={() => removeItemClick(item.id)}>Remove</button>
        </div>
    )
}


export default Item