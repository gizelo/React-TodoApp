import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: "none"
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul} className="todo-list">
            {props.todos.map((todo, idx) => {
                return <TodoItem todo={todo} key={todo.id} idx={idx} onChange={props.onToggle}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList