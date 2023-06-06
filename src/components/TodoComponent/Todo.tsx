import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useTodosStore } from "../../store/todosStore";
import { ToDo } from "../../types";
import "./index.scss";

const Todo = ({ text, done, id }: ToDo) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const toggleTodo = useTodosStore((state) => state.toggleTodo);

    const removeTodo = useTodosStore((state) => state.removeTodo);

    const handleDone = () => {
        toggleTodo(id);
    };

    const handleRemoveTodo = () => {
        removeTodo(id);
    };

    return (
        <div
            className="todo-wrapper"
            {...attributes}
            {...listeners}
            ref={setNodeRef}
            style={style}
        >
            <div className="done-name">
                {/* Only show check mark when todo is done */}
                {done ? (
                    <img className="check" src="/icon-check.svg" alt="" />
                ) : (
                    ""
                )}
                <input
                    onChange={handleDone}
                    checked={done}
                    type="checkbox"
                    name="done"
                />
                <span className={`todo-text ${done ? "done" : ""}`}>
                    {text}
                </span>
            </div>
            <img
                onClick={handleRemoveTodo}
                src="/icon-cross.svg"
                alt="cross icon"
            />
        </div>
    );
};

export default Todo;
