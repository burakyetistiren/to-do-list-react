import PropTypes from 'prop-types'
import React from 'react'
import './Title.css'

const Title = ({title}) => {
    return(
        <h1 className="Title">{title}</h1>
    )
}

Title.defaultProps = {
    title: "To Do List",
}

Title.propTypes = {
    title: PropTypes.string,
    add: PropTypes.func,
}

export default Title