import { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';
import { ToDo } from '../../types'
import './index.scss'

const Todo = ({text, done, id}:ToDo) => {

  const { todos, setTodos } = useContext(TodosContext);

  const handleDone = (e:any) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todo-wrapper'>
        <div className="done-name">
            {/* Only show check mark when todo is done */}
            {/* {done ? <img className='check' src="/icon-check.svg" alt="" />: ''}       */}
            <input onChange={handleDone} checked={done} type="checkbox" name="done" id="done" />
            <span className={`todo-text ${done ? 'done' : ''}`}>{text}</span>
        </div>
        <img src="/icon-cross.svg" alt="" />
    </div>
  )
}

export default Todo