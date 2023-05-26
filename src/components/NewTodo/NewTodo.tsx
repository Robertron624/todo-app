import {useState} from 'react';
import './index.scss'
import { useTodosStore } from '../../store/todosStore'

const NewTodo = () => {

  const addTodo = useTodosStore((state) => state.addTodo)

  const [ todoText, setTodoText ] = useState<string>('')

  const [ done, setDone ] = useState<boolean>(false)

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(!todoText){
      alert("Todo text cannot be blank")
      return
    }
    addTodo(todoText, done)
  }

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  }

  const handleDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDone(e.target.checked)
  }


  return (
    <form onSubmit={handleSubmit} action="POST">
        <label htmlFor="done">
          <span className='sr-only'>Done</span>
          {done ? <img className='check' src="/icon-check.svg" alt="" />: ''}   
          <input checked={done} onChange={handleDone} type="checkbox" name="done" id="done" />
        </label>
        <label htmlFor="todo">
          <span className='sr-only'>New Todo</span>
          <input onChange={handleText} type="text" name="todo" id="todo" placeholder="create a new todo..." />
        </label>
    </form>
  )
}

export default NewTodo