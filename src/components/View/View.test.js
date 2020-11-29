import React from 'react';
import View from './View';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { numberInWords } from '../../utils/viewUtils';

configure({ adapter: new Adapter() });

describe('check Modal component', () => {
    const viewWidget = {
        widgetName: 'My Widget',
        widgetItems: {}, //can be tested separately
        magicNumber: 'one hundred and twenty three',
    };

    const wrapper = shallow(<View viewWidget={viewWidget} />);

    it('should have proper value for name', () => {
        const name = wrapper.find('.widget-view__name');
        expect(name.text()).toEqual(viewWidget.widgetName);
    })

    it('should have proper value for magic number', () => {
        const magicNumber = wrapper.find('.widget-view__magic-number');
        const magicNumberInWords = magicNumber.text();
        expect(magicNumberInWords).toEqual('Magic Number:' + numberInWords(123));
    })

    it('should have proper values for items', () => {
        const items = wrapper.find('.items-wrapper');
        const testItems = viewWidget.widgetItems;
        expect(items).toEqual(testItems);
    })

});
