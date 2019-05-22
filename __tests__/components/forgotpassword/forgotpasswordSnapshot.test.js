import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ForgotPasswordScreen}  from '../../../app/components/forgotpassword/forgotpassword';
import stackNav from '../../../app/redux/reducers/stacknavreducer';
import { localization } from '../../../app/common/localization';

stackNav.setParams = () => {
    return "test";
}

it('create snapshot ForgotPasswordScreen', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<ForgotPasswordScreen  
        navigation={stackNav}  
        CurrentLanguage={localization.ru}
        loginError={false}
        />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
