"use client"
import {createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext();

const getFromLocalStorages = () =>{
    if(typeof window !== "undefined"){
       const value = localStorage.getItem("theme");
       return value || "light";
    }
};

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(()=>{
        return getFromLocalStorages()
    });

    const toggle = () =>{
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(()=>{
     localStorage.setItem("theme", theme);
    }, [theme]);

    return <ThemeContext.Provider value={theme} >{children}</ThemeContext.Provider>;

};

