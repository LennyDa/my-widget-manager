import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import List from '../WidgetList/List';
import View from '../View/View';
import ModalWrapper from '../Modal/ModalWrapper';
import './WidgetManager.scss';



const WidgetManager = () => {
    const [widgetList, setWidgetList] = useLocalStorage('list', {});
    const [editWidget, setEditWidget] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewWidget, setViewWidget] = useState(  null);

    useEffect(() => {
        if (!viewWidget) {
            setViewWidget(widgetList[Object.keys(widgetList)[0]])
        }
        if (!Object.keys(widgetList).length) {
            setViewWidget(null)
        }
    }, [widgetList])

    const addHandler = () => {
        setEditWidget(null);
        setIsModalOpen(true);
    }

    const editHandler = (widgetId) => {
        setIsModalOpen(true);
        setEditWidget(widgetList[widgetId]);
    }

    const viewHandler = (widgetId) => {
        setViewWidget(widgetList[widgetId]);
    }
    const deleteHandler = (widgetId) => {
        const tempList = { ... widgetList }
        delete tempList[widgetId];
        if (widgetId === viewWidget.widgetId) {
            setViewWidget(tempList[Object.keys(tempList)[0]]);
        }
        setWidgetList(tempList);
    }

    const onClose = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="widget-manager-container">
            <h1 className="widget-manager__header">Widget Manager</h1>
            <div className="widget-manager">
                <List
                    widgetList={widgetList}
                    editHandler={editHandler}
                    addHandler={addHandler}
                    viewHandler={viewHandler}
                    deleteHandler={deleteHandler}
                />
                <View viewWidget={viewWidget} editHandler={editHandler} classNames="open" />
                    <ModalWrapper
                        widgetList={widgetList}
                        editWidget={editWidget}
                        setWidgetList={setWidgetList}
                        setEditWidget={setEditWidget}
                        setViewWidget={setViewWidget}
                        isModalOpen={isModalOpen}
                        onClose={onClose}
                    />
            </div>

        </div>
    )

}
export default WidgetManager;