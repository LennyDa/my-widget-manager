import React  from 'react';
import EditButton from '../EditButton/EditButton';
import { ReactComponent as TrashCan } from '../../assets/images/trash-can.svg';
import { ReactComponent as View } from '../../assets/images/view.svg';


const Row = ({ index, widgetName, widgetId, widgetProps }) => {

    const { editHandler, viewHandler, deleteHandler } = widgetProps;

    return (
       <li className="widget" data-key={index}>
           <div className="widget__name">{widgetName}</div>
           <button className="btn view-btn" title="View" onClick={() => viewHandler(widgetId)}><span className="view-icon"><View /></span></button>
           <EditButton widgetId={widgetId} editHandler={editHandler} />
           <button className="btn delete-btn" title="Delete" onClick={() => deleteHandler(widgetId)}><span className="delete-icon"><TrashCan /></span></button>
       </li>
    );
}

export default Row;