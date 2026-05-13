import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar(){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div>
            <h1> Recipe App </h1>
            <button onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </div>
    )
}

export default Navbar;