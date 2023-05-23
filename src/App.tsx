import { useContext, useState } from "react";
import "./App.scss";
import { ThemeContext } from "./contexts/themeContext";
import { TodosContext } from "./contexts/TodosContext";
import Layout from "./layout";
import NewTodo from "./components/NewTodo/NewTodo";
import Todo from "./components/TodoComponent/Todo";
import { ToDo } from "./types";

// const mockTodos = [
//   {
//     id: 1,
//     text: 'Complete online JavaScript course',
//     done: true
//   },
//   {
//     id: 2,
//     text: 'Jog around the park 3x',
//     done: false
//   },
//   {
//     id: 3,
//     text: '10 minutes meditation',
//     done: false
//   },
// ]

function App() {
    const [theme, setTheme] = useState<string>("light");

    const [activeFilter, setActiveFilter] = useState<string>("all");

    const { todos, setTodos } = useContext(TodosContext);

    const [filteredTodos, setFilteredTodos] = useState<ToDo[]>(todos);

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

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
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
                                    <button className="clear">
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
                                                    : ""
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
                                                    : ""
                                            }
                                        >
                                            Completed
                                        </button>
                                    </li>
                                </ul>
                            </section>
                        </main>
                    </Layout>
                </div>
            </ThemeContext.Provider>
        </TodosContext.Provider>
    );
}

export default App;
