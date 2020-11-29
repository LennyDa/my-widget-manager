import { useState, useEffect } from 'react';

const STORAGE_IDENTIFIER = 'widget-manager-';

export default function useLocalStorage(key, initValue) {
    const formattedKey = STORAGE_IDENTIFIER + key;
    const [value, setValue] = useState(() => {
        const currentValue = localStorage.getItem(formattedKey);
        if (currentValue != null) return JSON.parse(currentValue);
        if (typeof initValue === 'function') {
            return  initValue();
        }
        else {
            return initValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(formattedKey, JSON.stringify(value))
    }, [formattedKey, value]);

    return [value, setValue]
}