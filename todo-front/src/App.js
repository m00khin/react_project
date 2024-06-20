import TodoList from './TodoList';
import axios from "axios";
import {useState} from "react";
import AddTodo from "./AddTodo";

const API_URL = 'http://127.0.0.1:8000/api/todo/'

function App() {
    const [todos, setTodos] = useState([])
    async function getTodos() {
        const response = await axios.get(API_URL)
        setTodos(response.data)
    }

    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t.id !== todo.id))
        axios.delete(API_URL + todo.id.toString() + '/')
    }

    const editDone = (todo, done) => {
        const allWithoutMentioned = todos.filter(t => t.id !== todo.id)
        todo.done = done
        setTodos([...allWithoutMentioned, todo].sort((todo1, todo2) => {return todo1.id - todo2.id}))
        axios.put(API_URL + todo.id.toString() + '/', {
            title: todo.title,
            done: todo.done
        })
    }

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo])
        axios.post(API_URL, newTodo)
    }

    return (
        <div className="App">
            <button className='btn btn-info' onClick={getTodos}>Обновить список дел</button>
            <AddTodo createTodo={createTodo}/>
            <h1 style={{color: "red", textAlign: "center"}}><strong>Список наших дел</strong></h1>
            <TodoList todos={todos} removeTodo={removeTodo} editDone={editDone}/>
        </div>
    );
}

export default App;
