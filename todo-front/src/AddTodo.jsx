import React, {useState} from "react";
import {useForm} from "react-hook-form";


const AddTodo = ({createTodo}) => {
    const [todo, setTodo] = useState({title: '', description: ''})
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm({mode: "onBlur"});

    const addNewTodo = (event) => {
        event.preventDefault();
        createTodo(todo)
        setTodo({title: '', description: ''})
    }

    return (
        <form onSubmit={handleSubmit(addNewTodo)}>
            <div className='row g-3'>
                <div className='col-sm-3'>
                    <input className='form-control'
                           placeholder=' Название'
                           {...register('title', {
                               required: 'Поле должно быть заполнено',
                           })}
                    />
                    {errors?.title && <p className='text-danger fw-bold'>{errors.title.message}</p>}
                </div>
                {/*<input*/}
                {/*    value={todo.title}*/}
                {/*    type='text'*/}
                {/*    placeholder='Дело'*/}
                {/*    // required*/}
                {/*    onChange={e => setTodo({...todo, title: e.target.value})}*/}
                {/*/>*/}
                <div className='col-sm-5'>
                    <input className='form-control'
                           placeholder='Описание'
                           {...register('Description')}
                    />
                </div>
                {/*<input*/}
                {/*    value={todo.description}*/}
                {/*    onChange={e => setTodo({...todo, description: e.target.value})}*/}
                {/*    type='text'*/}
                {/*    placeholder='Описание'*/}
                {/*/>*/}
                {/*<button onClick={addNewTodo}>Создать дело</button>*/}
                <div className='col'>
                    <button className='btn btn-primary' type='submit'>Создать дело</button>
                </div>
            </div>
        </form>
    )
}

export default AddTodo;
