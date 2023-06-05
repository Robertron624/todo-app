import { createContext } from "react";

export  const ThemeContext = createContext({
    theme: "",
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    setTheme: (_theme:string) => {},
});