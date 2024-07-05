import React from "react";
import Todo from "./Todo";
import SortTodo from "./SortTodo";

// const TodoList = ({todos, removeTodo, editDone, sortTodo}) => {
const TodoList = ({todos, removeTodo, editDone}) => {
    // const {todoItems, requestSort, sortConfig} = SortTodo(todos)
    const {todoItems, requestSort} = SortTodo(todos)

    // const [sortedField, setSortedField] = useState(null)
    // let sortedTodos = [...todos]
    // if (sortedField !== null) {
    //     sortedTodos.sort((a, b) => {
    //         return a[sortedField.key] > b[sortedField.key] ? 1 : -1
    //     })
    //     sortTodo(sortedTodos)
    // }

    if (!todoItems.length) {
        return <h2 style={{textAlign: "center", color: 'red'}}>Дела не найдены</h2>
    }

    return (
        <div className='container'>
            <table className="table table-hover table-sm align-middle table-bordered">
                <thead className='table-light' style={{textAlign: 'center'}}>
                <tr>
                    <th>
                        <button
                            type='button'
                            style={{border: '0'}}
                            // className={getClassNameFor('id')}
                            className='text-primary fw-bold'
                            onClick={() => requestSort('id')}>Номер
                            {/*<i className={sortConfig.direction === 'ascending' ?*/}
                            {/*       'bi bi-caret-up' : 'bi bi-caret-down'}></i>*/}
                        </button>
                    </th>

                    <th>Название</th>
                    <th>Описание</th>

                    <th>
                        <button
                            style={{border: '0'}}
                            className='text-primary fw-bold'
                            onClick={() => requestSort('date')}>Дата
                            {/*<i className={sortConfig.direction === 'ascending' ?*/}
                            {/*       'bi bi-caret-up' : 'bi bi-caret-down'}></i>*/}
                        </button>
                    </th>

                    <th>
                        <button
                            style={{border: '0'}}
                            className='text-primary fw-bold'
                            onClick={() => requestSort('done')}>Статус
                            {/*<i className={sortConfig.direction === 'ascending' ?*/}
                            {/*       'bi bi-caret-up' : 'bi bi-caret-down'}></i>*/}
                        </button>
                    </th>

                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                    {
                        todoItems.map(
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