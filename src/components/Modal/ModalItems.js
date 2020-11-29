import React from 'react';

const ModalItems = ({ items, handleWidgetItems }) => {
    let currentItems = [];
    for (let key=1; key < 6; key++) {
        currentItems.push(
            <li key={key}>
                <label htmlFor="item">{key}</label>
                <input
                    name="item"
                    className="item"
                    type="text"
                    defaultValue={items[key]}
                    onKeyUp={handleWidgetItems(key)}

                />
            </li>
        )
    }
    return currentItems;
}

export default ModalItems;