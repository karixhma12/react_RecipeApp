import { useContext, useEffect ,useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    return(
        <div>
            <h1> Recipe App </h1>
            <input ref={inputRef} placeholder="Search recipes..."/>
            <button onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </div>
    )
}

export default Navbar;