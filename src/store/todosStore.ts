import { create } from "zustand";

export const useTodosStore = create(() => ({
    todos: [
        { id: 1, text: "Learn TypeScript", done: true },
        { id: 2, text: "Try immer", done: false },
        { id: 3, text: "Tweet about it", done: false },
    ],
    addTodo: (text: string) => {
        useTodosStore.setState((state) => ({
            todos: [
                ...state.todos,
                { id: state.todos.length + 1, text, done: false },
            ],
        }));
    },
    toggleTodo: (id: number) =>
        useTodosStore.setState((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            ),
        })),
    removeTodo: (id: number) =>
        useTodosStore.setState((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));
