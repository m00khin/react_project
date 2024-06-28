import React from "react";
import Todo from "./Todo";


// const TodoList = ({todos, removeTodo, editDone, sortTodo}) => {
const TodoList = ({todos, removeTodo, editDone}) => {
    if (!todos.length) {
        return <h2 style={{textAlign: "center", color: 'red'}}>Дела не найдены</h2>
    }

    return (
        <div className='container'>
            <table className="table table-hover table-sm align-middle table-bordered">
                <thead className='table-light' style={{textAlign: 'center'}}>
                <tr>
                    {/*<th>*/}
                    {/*    <button style={{border: '0'}} onClick={alert('ID Clicked')}>Номер</button>*/}
                    {/*</th>*/}
                    <th>Номер</th>
                    {/*sort*/}

                    <th>Название</th>
                    <th>Описание</th>

                    <th>Дата</th>
                    {/*sort*/}

                    <th>Статус</th>
                    {/*sort*/}
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map(
                        todoo =>
                            <Todo todoo={todoo} key={todoo.id} removeTodo={removeTodo} editDone={editDone}/>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;