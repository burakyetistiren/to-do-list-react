import PropTypes from 'prop-types'
import './Button.css'

const AddButton = ({label, add, state}) => {

    return(
        <button disabled={state} className='Button' onClick={add}>{label}</button>
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