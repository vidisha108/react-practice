
import {createContext, useState, useContext} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{

    const [theme, setTheme] = useState('dark');

    const handleToggle = () =>{
        return setTheme(prev => prev === "dark"? "light" : "dark");
    };
     return (
        <ThemeContext.Provider value={{theme, handleToggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

//creating component
export const DarkLight = () =>{
    const {theme, handleToggle} = useContext(ThemeContext);
    return <div>
        <h1>toggle theme</h1>
        <p>Hello user</p>
        <button onClick={handleToggle}>{theme=== "dark" ? "Switch to light mode" : "Switch to dark mode" }</button>
    </div>
}