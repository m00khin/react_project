import TodoList from './TodoList';
import axios from "axios";
import React, {useState} from "react";
import AddTodo from "./AddTodo";
import 'bootstrap-icons/font/bootstrap-icons.css';


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
        setTodos([...allWithoutMentioned, todo].sort((todo1, todo2) => {
            return todo1.id - todo2.id
        }))
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
            <div className='d-flex justify-content-center'>
                <h1
                    className='flex-grow-1'
                    style={{color: "blue", textAlign: "center"}}>
                    <strong>Список наших дел</strong>
                </h1>
                <button
                    style={{border: '0', background: '#fff'}}
                    onClick={getTodos}>
                    {/*<span className='badge rounded-pill'>*/}
                        <i className='bi bi-arrow-repeat fs-1 text-primary'></i>
                    {/*</span>*/}
                </button>
            </div>
            {/*<TodoList todos={todos} removeTodo={removeTodo} editDone={editDone} sortTodo={sortTodo}/>*/}
            <TodoList todos={todos} removeTodo={removeTodo} editDone={editDone}/>
            <AddTodo createTodo={createTodo}/>

            {/*<table*/}
            {/*    // id='table'*/}
            {/*    data-toggle='table'*/}
            {/*    // data-height='300'*/}
            {/*    // data-cache='false'*/}
            {/*    // data-data-type='text'*/}
            {/*    // data-side-pagination='server'*/}
            {/*    // data-content-type='application/json'*/}
            {/*    data-url='http://127.0.0.1:8000/api/todo/'*/}
            {/*>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th data-field="id" data-sortable='true'>Номер</th>*/}
            {/*        <th data-field="title">Название</th>*/}
            {/*        <th data-field="description">Описание</th>*/}
            {/*        <th data-field="date" data-sortable='true'>Дата</th>*/}
            {/*        <th data-field="done" data-sortable='true'>Статус</th>*/}
            {/*        <th>Выполнить</th>*/}
            {/*        <th>Отменить</th>*/}
            {/*        <th>Удалить</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*</table>*/}

        </div>
    );
}

export default App;
