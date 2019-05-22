import { Card } from "../../../../app/components/tabbar/card/card";
import React from 'react';
import { StyleSheet } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Test card create object', () => {
    it(' card create object with valid data ', () => {
        let fullName = "Vasya",
        id = 39;
        const wrapper = shallow(<Card />);
        expect(wrapper.instance().createObjForAction(fullName, id) ).toEqual({name = "Vasya", id = 39});
    });
});