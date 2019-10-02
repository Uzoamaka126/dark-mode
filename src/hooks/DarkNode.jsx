import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useLocalStorage } from './LocalStorage';


const useDarkMode = (initialValue) => {
    const [darkMode,  setDarkMode] = useLocalStorage('dark-mode', initialValue);
    useEffect(() => {
        if(darkMode) {
            document.body.classList.remove('dark-mode')
        } else {
            document.body.classList.add('dark-mode')
        }
        
    }, [darkMode])
    return [darkMode, setDarkMode]
}
export default useDarkMode;