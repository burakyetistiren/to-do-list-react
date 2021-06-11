import PropTypes from 'prop-types'
import React from 'react'
import {BrowserRouter as Link, Route, Router} from 'react-router-dom'

const Item = ({item, removeItemClick, itemClick}) => {
    return(
        <div>
            <h2 onClick={() => itemClick(item.id)}>{item.description}{item.id}</h2>
            <button onClick={() => removeItemClick(item.id)}>Remove</button>
        </div>
    )
}


export default Item