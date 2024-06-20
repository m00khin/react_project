import React from "react";
import Todo from "./Todo";


const TodoList = ({todos, removeTodo, editDone}) => {
    if (!todos.length) {
        return <h1 style={{textAlign: "center"}}>Дела не найдены</h1>
    }

    return (
        <div>
            <table className="table" style={{width: "80%"}}>
                <thead>
                <tr>
                    <th scope="colId">Номер</th>
                    <th scope="colTitle">Название</th>
                    <th scope="colDescription">Описание</th>
                    <th scope="colDate">Дата</th>
                    <th scope="colIsDone">Статус</th>
                    <th scope="colSetDone">Выполнить</th>
                    <th scope="colSetNotDone">Отменить</th>
                    <th scope="colDelete">Удалить</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map(todoo => <Todo todoo={todoo} key={todoo.id} removeTodo={removeTodo} editDone={editDone}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;