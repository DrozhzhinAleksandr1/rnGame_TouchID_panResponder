import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ForgotPasswordPopUp}  from '../../../../app/components/forgotpassword/forgotpasswordpopup/forgotpasswordpopup';

it('create snapshot ForgotPasswordPopUp', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<ForgotPasswordPopUp />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
