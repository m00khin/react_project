import {useMemo, useState} from "react";

const SortTodo = (todos, config = null) => {
    const [sortConfig, setSortConfig] = useState(config)

    const sortedTodos = useMemo(() => {
        let sortableTodos = [...todos]
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
    }, [todos, sortConfig])

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

    return {sorted: sortedTodos, requestSort}
};

export default SortTodo;
