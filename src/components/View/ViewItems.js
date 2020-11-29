import React from 'react';

const ViewItems = ({ widgetItems }) => {
    return (
        <ul className="items-wrapper">
            {Object.keys(widgetItems).map((key) => {
                return (
                    <li className="item" key={key}>
                        <div className="item__text">{widgetItems[key]}</div>
                    </li>
                )
            })}
        </ul>
        )
}

export default ViewItems;