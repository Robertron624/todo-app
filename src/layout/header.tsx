import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

import "./styles.scss";

const header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleTheme = () => {
        const isCurrentDark = theme === "dark";
        setTheme(isCurrentDark ? "light" : "dark");
    };

    return (
        <header>
            <div className="inner">
                <div className="logo">
                    <h1>TODO</h1>
                </div>
                <div className="theme-switcher">
                    <button onClick={handleTheme}>
                        <img
                            src={`/${
                                theme == "light" ? "icon-moon" : "icon-sun"
                            }.svg`}
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default header;
