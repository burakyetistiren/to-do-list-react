import PropTypes from 'prop-types'
import React from 'react'
import {useHistory} from 'react-router-dom'
import './ItemInfo.css'

const ItemInfo = ({item}) => {
    const history = useHistory()

    return(
        <div className="Main">
            <h2 className="pgTitle">
                Task Detail
            </h2>
            <div>
                <h2 className="pgText1">
                    Task description: 
                </h2>
                <h2 className="pgText2">
                    {item.description}
                </h2>
                <h2 className="pgText3">
                    Task ID: 
                </h2>
                <h2 className="pgText4">
                    {item.id}
                </h2>
            </div>
            <button className="pgButton" onClick={() => history?.goBack()}>
                Go back
            </button>
        </div>
    )

}

export default ItemInfo