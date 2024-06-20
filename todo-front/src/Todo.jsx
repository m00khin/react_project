import React from "react";
// import TodoList from "./TodoList";

const Todo = (props) => {
    // console.log(props)
    return (
        <tr className='todo'>
            <td>{props.todoo.id}</td>
            <td>{props.todoo.title}</td>
            <td>{props.todoo.description}</td>
            <td>{props.todoo.date}</td>
            <td>
                {
                    props.todoo.done ?
                        <b><p style={{color: 'red'}}>Да</p></b> :
                        <b><p style={{color: 'blue'}}>Нет</p></b>
                }
            </td>
            <td>
                <button className='btn btn-sm btn-success' onClick={() => props.editDone(props.todoo, true)}>Выполнить</button>
            </td>
            <td>
                <button className="btn btn-sm btn-warning" onClick={() => props.editDone(props.todoo, false)}>Отменить</button>
            </td>
            <td>
                <button className='btn btn-sm btn-danger' onClick={() => props.removeTodo(props.todoo)}>Удалить</button>
            </td>
        </tr>
    )
}

export default Todo;