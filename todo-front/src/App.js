import TodoList from './TodoList';
import axios from "axios";
import React, {useState} from "react";
import AddTodo from "./AddTodo";
import 'bootstrap-icons/font/bootstrap-icons.css';


const API_URL = 'http://127.0.0.1:8000/api/todo/'


function App() {
    const [todos, setTodos] = useState([])
    const excludeColumns = ['id', 'date', 'done']


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
        setTodos([...allWithoutMentioned, todo].sort((todo1, todo2) => {
            return todo1.id - todo2.id
        }))
        axios.put(API_URL + todo.id.toString() + '/', {
            title: todo.title,
            done: todo.done
        })
    }

    const searchTodo = (value) => {
        const search = value.toLowerCase()
        const filter = todos.filter(todo => {
            return Object.keys(todo).some(key =>
                excludeColumns.includes(key)
                    ? false
                    : todo[key].toLowerCase().includes(search)
            )
        })
        setTodos(filter)
    };

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo])
        axios.post(API_URL, newTodo)
    }

    return (
        <div className="App">
            <div className='d-flex justify-content-center'>
                <h1
                    className='flex-grow-1'
                    style={{color: "blue", textAlign: "center"}}>
                    <strong>Список наших дел</strong>
                </h1>
                <button
                    style={{border: '0', background: '#fff'}}
                    onClick={getTodos}>
                    <i className='bi bi-arrow-repeat fs-2 text-primary'></i>
                </button>
            </div>
            <TodoList todos={todos} removeTodo={removeTodo} editDone={editDone} searchTodo={searchTodo}/>
            <AddTodo createTodo={createTodo}/>
        </div>
    );
}

export default App;
