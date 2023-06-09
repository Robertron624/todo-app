import { useState, useEffect } from "react";
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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

    const reorderTodo = useTodosStore((state) => state.reorderTodo);

    const [filteredTodos, setFilteredTodos] = useState<ToDo[]>(todos);

    // Sensor to tell DndKit to trigger a drag only when the user drags a minimum distance, allowing the click event to be triggered when the user clicks on the checkbox
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    // Re-render when the store's state has been updated (Todo done/undone, new Todo and remove Todo)
    useEffect(() => {
        setFilteredTodos(todos);
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
            if (todo.done == true) {
                removeTodo(todo.id);
            }
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            const newIndex = filteredTodos.findIndex(
                (todo) => todo.id === over.id
            );
            setFilteredTodos((filteredTodos) => {
                const oldIndex = filteredTodos.findIndex(
                    (todo) => todo.id === active.id
                );

                return arrayMove(filteredTodos, oldIndex, newIndex);
            });

            reorderTodo(active.id, newIndex);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                sensors={sensors}
            >
                <div className={`theme-${theme}`}>
                    <Layout>
                        <main className="content-wrapper">
                            <NewTodo />
                            <div className="todos-list">
                                <SortableContext
                                    items={filteredTodos}
                                    strategy={verticalListSortingStrategy}
                                >
                                    <ul>
                                        {filteredTodos.map((todo) => (
                                            <li key={todo.id}>
                                                <Todo {...todo} />
                                            </li>
                                        ))}
                                    </ul>
                                </SortableContext>
                                <div className="total">
                                    <span>
                                        {
                                            filteredTodos.filter(
                                                (todo) => todo.done != true
                                            ).length
                                        }{" "}
                                        items left
                                    </span>
                                    <div className="filters">
                                        <ul className="filters-wrapper">
                                            <li>
                                                <button
                                                    onClick={handleFilter}
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
                                                    className={
                                                        activeFilter ==
                                                        "completed"
                                                            ? "active"
                                                            : "inactive"
                                                    }
                                                >
                                                    Completed
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <button
                                        onClick={clearCompleted}
                                        className="clear"
                                    >
                                        Clear Completed
                                    </button>
                                </div>
                            </div>
                            <div className="filters">
                                <ul className="filters-wrapper">
                                    <li>
                                        <button
                                            onClick={handleFilter}
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
                            </div>
                            <p className="drag">
                                Drag and drop to reorder list
                            </p>
                        </main>
                    </Layout>
                </div>
            </DndContext>
        </ThemeContext.Provider>
    );
}

export default App;
