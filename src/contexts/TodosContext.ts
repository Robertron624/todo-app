import { createContext, useState } from "react";
import { ToDo } from "../types";

// export const TodosContext = createContext({
//     todos: [
//         {
//             id: 1,
//             text: "Complete online JavaScript course",
//             done: true,
//         },
//         {
//             id: 2,
//             text: "Jog around the park 3x",
//             done: false,
//         },
//         {
//             id: 3,
//             text: "10 minutes meditation",
//             done: false,
//         },
//     ],
//     // eslint-disable-next-line @typescript-eslint/no-empty-function
//     setTodos: (todos: ToDo[]) => {},
// });

export const todosData: ToDo[] = [
    {
        id: 1,
        text: "Complete online JavaScript course",
        done: true,
    },
    {
        id: 2,
        text: "Jog around the park 3x",
        done: false,
    },
    {
        id: 3,
        text: "10 minutes meditation",
        done: false,
    },
];

interface AppContext {
    // definimos un tipo que que sera el tipo del contexto
    todos: ToDo[]; // representa la lista de tareas del useState
    setTodos: Function; // representa la funcion setTodos del useState
} // si necesitaramos mas propiedades para el contexto deberiamos agregarlas aqui

export const defValues: AppContext = {
    // definimos valores por defecto para el contexto
    todos: todosData,
    setTodos: () => {},
};

export const TodosContext = createContext<AppContext>(defValues); // declaramos el contexto con su tipo y sus valores por defecto

export function AppContextProvider({ children }: any) {
    // componente funcional proveedor, cuando lo renderizemos sus hijos podran acceder a los recursos

    const [todos, setTodos] = useState(todosData); // este useState reemplazara a los valores por defecto
    // por otro lado, definimos como valor por defecto del useState la lista de tareas

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    );
}