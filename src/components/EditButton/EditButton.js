import React from 'react';
import {ReactComponent as Edit} from '../../assets/images/edit.svg';

const EditButton = ({ editHandler, widgetId, text }) => {
    return (
        <button className="btn edit-btn" title="Edit" onClick={() => editHandler(widgetId)}>
            {text && <span className="btn-text">{text}</span>}
            <span className="icon"><Edit /></span>
        </button>
    )

}

export default EditButton;