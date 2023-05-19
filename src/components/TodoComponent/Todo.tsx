import { ToDo } from '../../types'
import './index.scss'

const Todo = ({text, done}:ToDo) => {
  return (
    <div className='todo-wrapper'>
        <div className="done-name">
            <input checked={done} type="checkbox" name="done" id="done" />
            <span className='todo-text'>{text}</span>
        </div>
        <img src="/icon-cross.svg" alt="" />
    </div>
  )
}

export default Todo