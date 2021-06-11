import PropTypes from 'prop-types'

const AddButton = ({label, add}) => {

    return(
        <button onClick={add}>{label}</button>
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