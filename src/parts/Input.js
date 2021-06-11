import PropTypes from 'prop-types'
import React from 'react'
import './Input.css'

const Input = ({onClickInputArea, text, setText}) => {
    return(
        <form>
            <label
                className="Label"
            >
                Enter a task: </label>
            <input 
                className="Input"
                value={text} 
                onClick={onClickInputArea}
                onChange={(e) => setText(e.target.value)}/>
        </form>
    )
}

Input.defaultProps = {
    text: "Enter a Task",
}

Input.prototypes = {
    text: PropTypes.string,
    onClickInputArea: PropTypes.func,
}

export default Input