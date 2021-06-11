import PropTypes from 'prop-types'
import React from 'react'

const Item = ({item, itemClick}) => {
    return(
        <div onClick={() => itemClick(item.id)}>
            <h2>{item.description}{item.id}</h2>
        </div>
    )
}


export default Item