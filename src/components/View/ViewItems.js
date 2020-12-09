import React from 'react';

const ViewItems = ({ widgetItems }) => {
    return (
        <ul className="items-wrapper">
            {Object.keys(widgetItems).map((key, index) => {
                return (
                    <li className="item-container" key={index}>
                        {widgetItems[key].key && <div className="key__text">
                            <span className="key__title">Key: </span>
                            {widgetItems[key].key}
                        </div>}
                        {widgetItems[key].item && <div className="item__text">
                            <span className="item__title">Item: </span>
                            {widgetItems[key].item}
                        </div>}
                    </li>
                )
            })}
        </ul>
        )
}

export default ViewItems;