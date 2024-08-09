import React from "react";
import Todo from "./Todo";
import SortTodo from "./SortTodo";
import SearchTodo from "./SearchTodo";

const TodoList = ({todos, removeTodo, editDone, searchTodo}) => {
    const {sorted, requestSort} = SortTodo(todos)

    if (!sorted.length) {
        return <h2 style={{textAlign: "center", color: 'red'}}>Дела не найдены</h2>
    }

    return (
        <div className='container'>
            <SearchTodo searchTodo={searchTodo}/>
            <table className="table table-hover table-sm align-middle table-bordered">
                <thead className='table-light' style={{textAlign: 'center'}}>
                <tr>
                    <th>
                        <button
                            style={{border: '0'}}
                            className='text-primary fw-bold'
                            onClick={() => requestSort('id')}>Номер
                        </button>
                    </th>

                    <th>Название</th>
                    <th>Описание</th>

                    <th>
                        <button
                            style={{border: '0'}}
                            className='text-primary fw-bold'
                            onClick={() => requestSort('date')}>Дата
                        </button>
                    </th>

                    <th>
                        <button
                            style={{border: '0'}}
                            className='text-primary fw-bold'
                            onClick={() => requestSort('done')}>Статус
                        </button>
                    </th>

                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                {
                    sorted.map(todoo =>
                        <Todo todoo={todoo} key={todoo.id} removeTodo={removeTodo} editDone={editDone}/>
                    )
                }
                </tbody>
            </table>
        </div>);
};

export default TodoList;