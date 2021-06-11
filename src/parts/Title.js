import PropTypes from 'prop-types'
import React from 'react'

const Title = ({title, add}) => {
    return(
        <h1>{title}</h1>
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