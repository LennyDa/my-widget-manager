export const isValidNumber = (value) => {
    return /^\d+$/.test(value) || value === '';
}

export const isInList = (list, key, value, valueId) => {
    for (let id in list) {
        if (list[id][key] === value && valueId !== id) {
            return true;
        }
    }
}

