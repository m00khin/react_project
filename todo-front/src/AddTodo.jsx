import React, {useState} from "react";


const AddTodo = ({createTodo}) => {
    const [todo, setTodo] = useState({
        title: '', description: ''
    })

    const addNewTodo = (e) => {
        e.preventDefault()
        if (todo.title.length !== 0) {
            createTodo(todo)
            setTodo({title: '', description: ''})
        } else {
            alert('Поле <Название> должно быть заполнено')
        }
    }

    return (
        <div className='container'>
            <form onSubmit={addNewTodo} noValidate>
                <div className='row g-3'>
                    <div className='col-sm-3'>
                        <input className='form-control'
                               type='text'
                               value={todo.title}
                               placeholder=' Название'
                               required
                               onChange={e => setTodo({...todo, title: e.target.value})}
                        />
                    </div>

                    <div className='col-sm-5'>
                        <input className='form-control'
                               type='text'
                               value={todo.description}
                               placeholder='Описание'
                               onChange={e => setTodo({...todo, description: e.target.value})}
                        />
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary' type='submit'>Создать дело</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;
