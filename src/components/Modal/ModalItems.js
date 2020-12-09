import React from 'react';

const ModalItems = ({ items, handleWidgetItems }) => {
    let currentItems = []
    for (let index=1; index < 6; index++) {
        currentItems.push(
            <li className="item-container" key={index}>
                <label htmlFor="item">{index}</label>
                <div className="item-details">
                    <input
                        name="key"
                        className="key"
                        type="text"
                        defaultValue={items[index] && items[index].key ? items[index].key : ''}
                        onKeyUp={handleWidgetItems(index, 'key')}
                    />
                    <input
                        name="item"
                        className="item"
                        type="text"
                        defaultValue={items[index] && items[index].item ? items[index].item : ''}
                        onKeyUp={handleWidgetItems(index, 'item')}

                    />
                </div>
            </li>
        )
    }
    return currentItems;
}

export default ModalItems;