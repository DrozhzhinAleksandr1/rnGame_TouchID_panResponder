import store from '../../../app/redux/store/store';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mapFromFile } from '../../../_mock_/data/quotetiondata';

import { renderCardsIfUserNotLogin } from '../../../app/components/tabbar/currency/currency';
import { renderCardsIfUserLogin } from '../../../app/components/tabbar/currency/currency';

describe('Test ifUserNoLoginShow8Cards', () => {    
    test('renderCardsIfUserNotLogin', () => {
        const wrapper = renderCardsIfUserNotLogin(mapFromFile.mapCurrency, true, [], 'test', '','test');
        expect(wrapper.length).toEqual(8);
    });
    test('renderCardsIfUserNotLogin', () => {
        const wrapper = renderCardsIfUserNotLogin(mapFromFile, false, []);
        expect(wrapper.length).toEqual(0);
    });
    
    test('renderCardsIfUserLogin', () => {
        const wrapper = renderCardsIfUserLogin(mapFromFile.mapCurrency, true, [], 'test', '','test');
        expect(wrapper.length).toEqual(76);
    });
    test('renderCardsIfUserLogin', () => {
        const wrapper = renderCardsIfUserLogin(mapFromFile, false, []);
        expect(wrapper.length).toEqual(0);
    });
});