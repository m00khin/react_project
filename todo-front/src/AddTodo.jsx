import React, {useState} from "react";

const AddTodo = ({createTodo}) => {
    const [todo, setTodo] = useState({title: '', description: ''})
    const addNewTodo = (e) => {
        e.preventDefault()
        createTodo(todo)
        setTodo({title: '', description: ''})
    }

    return (
        <form>
            <input
                value={todo.title}
                type='text'
                placeholder='Дело'
                // required
                onChange={e => setTodo({...todo, title: e.target.value})}
            />
            <input
                value={todo.description}
                onChange={e => setTodo({...todo, description: e.target.value})}
                type='text'
                placeholder='Описание'
            />
            <button onClick={addNewTodo}>Создать дело</button>
        </form>
    )
}

export default AddTodo;
