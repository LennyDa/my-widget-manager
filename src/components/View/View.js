import React from 'react';
import { numberInWords } from '../../utils/viewUtils';
import EditButton from '../EditButton/EditButton';
import ViewItems from './ViewItems';
import './View.scss';

const View = ({ viewWidget, editHandler }) => {

    if (!viewWidget) return null;

    const { widgetId, widgetName, widgetItems, magicNumber } = viewWidget;

    return (
        <div className="widget-view-container">
            <div className="widget-view">
                <h3 className="widget-view__name">{widgetName}</h3>
                <div className="widget-view__details">

                    {magicNumber &&
                    <div className="widget-view__magic-number">
                        <div className="magic-number__title">Magic Number:</div>
                        {numberInWords(magicNumber)}
                    </div>}

                    {Object.keys(widgetItems).length > 0 &&
                    <div className="widget-view__items">
                        <div className="items__title">Items:</div>
                        <ViewItems widgetItems={widgetItems} />
                    </div>}
                </div>
            </div>
            <div className="edit-btn-container">
                <EditButton widgetId={widgetId} editHandler={editHandler} text={'Edit'} />
            </div>
        </div>

    );
}

export default View;