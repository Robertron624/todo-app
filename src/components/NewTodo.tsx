import './index.scss'

const NewTodo = () => {
  return (
    <form action="POST">
        <label htmlFor="done">
          <span className='sr-only'>Done</span>
          <input type="checkbox" name="done" id="done" />

        </label>
        <label htmlFor="todo">
          <span className='sr-only'>New Todo</span>
          <input type="text" name="todo" id="todo" placeholder="create a new todo..." />
        </label>
    </form>
  )
}

export default NewTodo