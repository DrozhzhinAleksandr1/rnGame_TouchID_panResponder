import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ButtonForgotPassword}  from '../../../../../app/components/authorization/authoriztionelements/buttonforgotpassword';

it('create snapshot Main showMenu={true}', () => {
    const renderer = new ShallowRenderer()
    let buttonForgotPasswordSnapshot = renderer.render(<ButtonForgotPassword />);
    expect(buttonForgotPasswordSnapshot).toMatchSnapshot();
});