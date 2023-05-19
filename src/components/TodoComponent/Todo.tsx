import { ToDo } from '../../types'
import './index.scss'

const Todo = ({text, done}:ToDo) => {
  return (
    <div className='todo-wrapper'>
        <div className="done-name">
            {/* Only show check mark when todo is done */}
            {done ? <img className='check' src="/icon-check.svg" alt="" />: ''}      
            <input checked={done} type="checkbox" name="done" id="done" />
            <span className={`todo-text ${done ? 'done' : ''}`}>{text}</span>
        </div>
        <img src="/icon-cross.svg" alt="" />
    </div>
  )
}

export default Todo