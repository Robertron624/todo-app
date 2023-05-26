import { useTodosStore } from '../../store/todosStore'
import { ToDo } from '../../types'
import './index.scss'

const Todo = ({text, done, id}:ToDo) => {

  const toggleTodo = useTodosStore((state) => state.toggleTodo)

  const removeTodo = useTodosStore((state) => state.removeTodo)

  const handleDone = () => {
    toggleTodo(id)
  }

  const handleRemoveTodo = () => {
    removeTodo(id)
  }

  return (
    <div className='todo-wrapper'>
        <div className="done-name">
            {/* Only show check mark when todo is done */}
            {done ? <img className='check' src="/icon-check.svg" alt="" />: ''}      
            <input onChange={handleDone} checked={done} type="checkbox" name="done" id="done" />
            <span className={`todo-text ${done ? 'done' : ''}`}>{text}</span>
        </div>
        <img onClick={handleRemoveTodo} src="/icon-cross.svg" alt="cross icon" />
    </div>
  )
}

export default Todo