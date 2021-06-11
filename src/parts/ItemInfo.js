import PropTypes from 'prop-types'
import React from 'react'
import {useHistory} from 'react-router-dom'

const ItemInfo = ({item}) => {
    const history = useHistory()

    return(
        <>
            <h2>
                Info Page
            </h2>
            <h2>
                {item.description} {item.id}
            </h2>
            <button onClick={() => history?.goBack()}>
                Go back
            </button>
        </>
    )

}

export default ItemInfo