import React, {useState, useEffect} from "react";
import Todo from "./Todo";
import SortTodo from "./SortTodo";

const TodoList = ({todos, removeTodo, editDone}) => {
    const [filtered, setFiltered] = useState([])
    const excludeColumns = ['id', 'date', 'done']
    const {sorted, requestSort} = SortTodo(filtered)

    useEffect(() => {
        setFiltered(todos)
    }, [todos]);

    const searchTodos = value => {
        let workTodos = [];
        if (value !== '') {
            const tempTodos = [...todos]
            workTodos = tempTodos.filter(todo => {
                return Object.keys(todo).some(key => excludeColumns.includes(key) ? false : todo[key].toString().toLowerCase().includes(value.toLowerCase().trim()))
            });
        } else {
            workTodos = [...todos];
        }
        setFiltered(workTodos);
    };

    if (!sorted.length) {
        return <h2 style={{textAlign: "center", color: 'red'}}>Дела не найдены</h2>
    }

    return (<div className='container'>
            <div className='input-group mb-sm-2'>
                <input
                    className='form-control form-control-sm'
                    type='text'
                    placeholder='Поиск дел ...'
                    onChange={({target: {value}}) => searchTodos(value)}
                />
                <span className='input-group-text'>
                    <i className='bi bi-search'></i>
                </span>
            </div>

            <table className="table table-hover table-sm align-middle table-bordered">
                <thead className='table-light' style={{textAlign: 'center'}}>
                <tr>
                    <th>
                        <button
                            type='button'
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