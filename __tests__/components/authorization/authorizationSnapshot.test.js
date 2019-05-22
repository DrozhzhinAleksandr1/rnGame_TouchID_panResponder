import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {AuthorizationScreen}  from '../../../app/components/authorization/authorizationscreen';
import stackNav from '../../../app/redux/reducers/stacknavreducer';
import { localization } from '../../../app/common/localization';

stackNav.setParams = () => {
    return "test";
}
mock = () =>{};

it('create snapshot Main showMenu={true}', () => {
    const renderer = new ShallowRenderer()
    let buttonRegistrationSnapshot = renderer.render(<AuthorizationScreen 
        CurrentLanguage={localization.ru} 
        navigation={stackNav} hideMenu={mock}
        loginError={false}
        passwordError={false}
        />);
    expect(buttonRegistrationSnapshot).toMatchSnapshot();
});