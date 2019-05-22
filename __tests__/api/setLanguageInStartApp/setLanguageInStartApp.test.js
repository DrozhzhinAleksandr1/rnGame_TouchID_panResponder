import store from '../../../app/redux/store/store';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { getPlatform, getLanguage, setLanguageInStartApp } from '../../../app/api/setLanguageInStartApp/setLanguageInStartApp';

describe('Test setLanguageInStartApp', () => {    
    
    test('getPlatform ios', () => {
        const wrapper = getPlatform('ios');
        expect(wrapper).toEqual(true);
    });
    test('getPlatform not ios', () => {
        const wrapper = getPlatform('not ios');
        expect(wrapper).toEqual(false);
    });

    test('getLanguage ios', () => {
        const wrapper = getLanguage('ios');
        expect(wrapper).toEqual('io');
    });
    test('getLanguage notios', () => {
        const wrapper = getLanguage('notios');
        expect(wrapper).toEqual('no');
    });
    
    test('getLanguage ios', () => {
        const wrapper = getLanguage('ios');
        expect(wrapper).toEqual('io');
    });
    test('getLanguage notios', () => {
        const wrapper = getLanguage('notios');
        expect(wrapper).toEqual('no');
    });    
    
    // test('setLanguageInStartApp ', () => {
    //     const wrapper = setLanguageInStartApp(false, ()=>{return 'ru'}, ()=>{return 'en'},);
    //     expect(wrapper).toEqual('en');
    // });    
});