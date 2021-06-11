import PropTypes from 'prop-types'
import './ClearButton.css'

const ClearButton = ({removeButtonOnClick}) => {

    return(
        <button className="ClearButton" onClick={removeButtonOnClick}>Clear List</button>
    )
}


export default ClearButton