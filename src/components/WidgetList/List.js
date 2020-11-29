import React from 'react';
import Row from './Row';
import {ReactComponent as Add} from '../../assets/images/add.svg';
import './WidgetList.scss';

const List = ({ widgetList, ...widgetProps }) => {

    const { addHandler } = widgetProps;

    if (!widgetList) return;

    return (
        <div className="widget-list-container">
            <h2>Widget List</h2>
            <div className="widget-list-wrapper">
                <ul className="widget-list">
                    {Object.keys(widgetList).map((widgetId, index) => (
                        <Row
                            key={index}
                            index={index}
                            widgetName={widgetList[widgetId].widgetName}
                            widgetId={widgetId}
                            widgetList={widgetList}
                            widgetProps={widgetProps}
                        />
                    ))}
                </ul>
            </div>

            <button className="btn add-btn" type="submit" title="Add" onClick={addHandler}>
                <span className="btn-text">Add</span>
                <span className="icon"><Add /></span>
            </button>
        </div>
    );
}

export default List;