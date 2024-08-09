import React from "react";

const SearchTodo = ({searchTodo}) => {
    return (
        <div className='row justify-content-end'>
            <div className='col-4'>
                <div className='input-group mb-sm-2'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Поиск дел ...'
                        onChange={({target: {value}}) => searchTodo(value)}
                    />
                    <span className='input-group-text'>
                        <i className='bi bi-search'></i>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default SearchTodo;