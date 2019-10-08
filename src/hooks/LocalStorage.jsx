import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";



export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse item and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        // Save state here
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
}
