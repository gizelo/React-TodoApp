import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({onCreate, rmAllTds}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form className="addTodo-form" onSubmit={submitHandler}>
            <input className="addTodo-input" placeholder="New Todo" value={value}
                   onChange={event => setValue(event.target.value)}/>
            <button className="addTodo-btn" type="submit">+</button>
            <button className="delAll_btn" onClick={rmAllTds}>Delete all</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo