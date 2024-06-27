import React from "react";


const Todo = (props) => {
    return (
        <tr className='todo'>
            <td style={{textAlign: 'center'}}>{props.todoo.id}</td>
            <td>{props.todoo.title}</td>
            <td>{props.todoo.description}</td>
            <td>{props.todoo.date}</td>
            <td>
                {
                    <input
                        type='checkbox'
                        style={{display: 'flex', margin: 'auto', scale: '1.4', accentColor: 'green'}}
                        checked={props.todoo.done}
                        onChange={() => props.editDone(props.todoo, !props.todoo.done)}
                    />
                }
            </td>
            <td>
                <button
                    className='btn btn-sm btn-outline-danger'
                    style={{display: 'flex', margin: 'auto'}}
                    onClick={() => props.removeTodo(props.todoo)}>Удалить
                </button>
            </td>
        </tr>
    )
}

export default Todo;