import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isValidNumber, isInList } from '../../utils/modalUtils';
import ModalItems from './ModalItems';
import './Modal.scss';

const Modal = ({ props }) => {
    const {  editWidget, setEditWidget, setViewWidget, isModalOpen, onClose, widgetList, setWidgetList } = props;
    const [id, setId] = useState({});
    const [name, setName] = useState('');
    const [items, setItems] = useState({});
    const [magicNumber, setMagicNumber] = useState('');

    const addOpenClass = isModalOpen ? ' open' : '';

    const isValidName =  !(isInList(widgetList, 'widgetName', name, id) || name === '');
    const isValidMagicNumber = isValidNumber(magicNumber);

    useEffect(() => {
        if (editWidget) {
            setId(editWidget.widgetId);
            setName(editWidget.widgetName);
            setItems(editWidget.widgetItems);
            setMagicNumber(editWidget.magicNumber);
        }
        else {
            setId(uuidv4());
        }

    }, [editWidget, isModalOpen, setViewWidget])

    const onCloseCleanUp = () => {
        onClose();
        setName('');
        setItems({});
        setId('');
        setMagicNumber('');
        setEditWidget(null);
    }

    const handleWidgetItems = (key, type) => e => {
        let tempItemsArray = {...items};
        if (e.target.value === '')  delete tempItemsArray[key][type];
        tempItemsArray[key] = {...tempItemsArray[key], [type]: e.target.value};

        if (tempItemsArray[key].key === '' && tempItemsArray[key].item  === '') {
            delete tempItemsArray[key];
        }

        setItems(tempItemsArray);
    }

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const magicNumberHandler = (e) => {
        setMagicNumber(e.target.value)
    }

    const submitFormData = (e) => {
        e.preventDefault();

        if (!isValidName || !isValidMagicNumber) {
            return;
        }

        if (editWidget) {
            let tempWidgetsArray = { ...widgetList };
            tempWidgetsArray[id] = { ...editWidget, widgetItems: items, widgetName: name, magicNumber: magicNumber };
            setWidgetList(tempWidgetsArray);
            setEditWidget(tempWidgetsArray[id]);
            setViewWidget(tempWidgetsArray[id]);
        }
        else {

            widgetList[id] = { widgetId: id, widgetName: name, magicNumber: magicNumber, widgetItems: items};
            setWidgetList({ ...widgetList });
        }

        onCloseCleanUp();
    }

    const closeHandler = () => {
        onCloseCleanUp();
    }

    return (

        <div className={`widget-modal-container${addOpenClass}`}>
            {isModalOpen &&
            <div className="widget-modal">
                <button type="button" className="close close-btn" aria-label="Close" onClick={closeHandler}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="widget-modal__details">
                    <div className="widget-name"><span className="widget-name__title">Widget Name: </span>{name}</div>
                    <div className="widget-id"><span className="widget-id__title">Widget ID: </span>{id}</div>
                </div>
                <form className="widget-modal__form">
                    <div className="col-container form__name">
                        <label htmlFor="name">Name</label>
                        <input
                            className={`name${!isValidName ? ' invalid': ''}`}
                            placeholder="Name"
                            name="name"
                            type="text"
                            defaultValue={name}
                            onKeyUp={nameHandler}
                        />
                        <span className="invalid-feedback invalid-name">Please enter name that's not in list</span>
                    </div>
                    <div className="col-container form__magic-number">
                        <label htmlFor="magic-number">Magic Number</label>
                        <input
                            className={`magic-number${!isValidMagicNumber ? ' invalid': ''}`}
                            name="magic-number"
                            placeholder="Magic Number"
                            type="text"
                            defaultValue={magicNumber}
                            onKeyUp={magicNumberHandler}
                        />
                        <span className="invalid-feedback invalid-magic-number">Please enter only numbers</span>
                    </div>
                    <span className="widget-items-title">Items</span>
                    <ul className="widget-items">
                        <ModalItems
                            items={items}
                            handleWidgetItems={handleWidgetItems}
                        />
                    </ul>
                    <button className="btn save-btn" type="submit" onClick={submitFormData}>Save</button>
                </form>
            </div>}
        </div>
    );
}

export default Modal;
