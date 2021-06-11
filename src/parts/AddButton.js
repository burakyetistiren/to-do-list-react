import PropTypes from 'prop-types'
import './Button.css'

const AddButton = ({label, add}) => {

    return(
        <button className='Button' onClick={add}>{label}</button>
    )
}

AddButton.defaultProps = {
    label: "Add",
}

AddButton.propTypes = {
    label: PropTypes.string,
    add: PropTypes.func,
}

export default AddButton