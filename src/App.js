import React, {useEffect} from 'react'
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo'
import Context from './context'
import Loading from './Loading'
import Modal from './Modal/Modal'

function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 0)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done
                }
                return todo
            })
        )
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    done: false
                }
            ])
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function removeAllTodos(event) {
        event.preventDefault();
        setTodos([])
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <h1 className="app-header">TodoApp</h1>
                    <Modal/>
                </div>

                <AddTodo onCreate={addTodo} rmAllTds={removeAllTodos}/>
                {loading && <Loading/>}
                {todos.length ? (
                        <TodoList todos={todos} onToggle={toggleTodo}/>)
                    : (
                        loading ? null : (<p style={{color: "white"}}>You've got no todos</p>)
                    )}
            </div>
        </Context.Provider>
    );
}

export default App;
