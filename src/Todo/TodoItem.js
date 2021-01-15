import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function TodoItem({todo, idx, onChange}) {
    const {removeTodo} = useContext(Context)

    const classes = []

    if (todo.done) {
        classes.push("todo-item--done")
    }
    return (
        <li className="todo-item">
            <span className={classes.join(" ")}>
                <input type="checkbox" checked={todo.done} className="todo-item__cb"
                       onChange={() => onChange(todo.id)}/>
                <strong>{idx + 1}.&nbsp;</strong>
                {todo.title}
            </span>
            <button className="todo-item__rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem