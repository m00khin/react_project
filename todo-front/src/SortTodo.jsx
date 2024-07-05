import {useMemo, useState} from "react";

const SortTodo = (todoItems, config = null) => {
    const [sortConfig, setSortConfig] = useState(config)

    const sortedTodos = useMemo(() => {
        let sortableTodos = [...todoItems]
        if (sortConfig !== null) {
            sortableTodos.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1
                }
                return 0
            })
        }
        return sortableTodos
    }, [todoItems, sortConfig])

    const requestSort = (key) => {
        let direction = 'ascending'
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending'
        }
        setSortConfig({key, direction})
    }

    return {todoItems: sortedTodos, requestSort}
    // return {todoItems: sortedTodos, requestSort, sortConfig}
};

export default SortTodo;
