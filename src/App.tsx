import { useState, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./contexts/themeContext";
import Layout from "./layout";
import NewTodo from "./components/NewTodo/NewTodo";
import Todo from "./components/TodoComponent/Todo";
import { ToDo } from "./types";
import { useTodosStore } from "./store/todosStore";

function App() {
    const [theme, setTheme] = useState<string>("light");

    const [activeFilter, setActiveFilter] = useState<string>("all");

    const todos = useTodosStore((state) => state.todos);

    const removeTodo = useTodosStore((state) => state.removeTodo);

    const [filteredTodos, setFilteredTodos] = useState<ToDo[]>(todos);

    // Re-render when the store's state has been updated (Todo done/undone, new Todo and remove Todo)
    useEffect(() => {
        setFilteredTodos(todos)
    }, [todos]);

    const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const filter = e.currentTarget.id;
        setActiveFilter(filter);
        switch (filter) {
            case "all":
                setFilteredTodos(todos);
                break;
            case "active":
                setFilteredTodos(todos.filter((todo) => !todo.done));
                break;
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.done));
                break;
            default:
                break;
        }
    };

    const clearCompleted = () => {
        todos.forEach((todo) => {
            if(todo.done == true) {
                removeTodo(todo.id)
            }
        })
    }

    return (
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className={`theme-${theme}`}>
                    <Layout>
                        <main className="content-wrapper">
                            <NewTodo />
                            <section className="todos-list">
                                <ul>
                                    {filteredTodos.map((todo) => (
                                        <li key={todo.id}>
                                            <Todo {...todo} />
                                        </li>
                                    ))}
                                </ul>
                                <div className="total">
                                    <span>
                                        {
                                            filteredTodos.filter(
                                                (todo) => todo.done != true
                                            ).length
                                        }{" "}
                                        items left
                                    </span>
                                    <button onClick={clearCompleted} className="clear">
                                        Clear Completed
                                    </button>
                                </div>
                            </section>
                            <section className="filters">
                                <ul className="filters-wrapper">
                                    <li>
                                        <button
                                            onClick={handleFilter}
                                            id="all"
                                            className={
                                                activeFilter == "all"
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            All
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleFilter}
                                            id="active"
                                            className={
                                                activeFilter == "active"
                                                    ? "active"
                                                    : "inactive"
                                            }
                                        >
                                            Active
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleFilter}
                                            id="completed"
                                            className={
                                                activeFilter == "completed"
                                                    ? "active"
                                                    : "inactive"
                                            }
                                        >
                                            Completed
                                        </button>
                                    </li>
                                </ul>
                            </section>
                            <p className="drag">
                                Drag and drop to reorder list
                            </p>
                        </main>
                    </Layout>
                </div>
            </ThemeContext.Provider>
    );
}

export default App;
