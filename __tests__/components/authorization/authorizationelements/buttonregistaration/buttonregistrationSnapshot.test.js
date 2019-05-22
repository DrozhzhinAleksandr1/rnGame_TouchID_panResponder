import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ButtonRegistration}  from '../../../../../app/components/authorization/authoriztionelements/buttonregistration';

it('create snapshot Main showMenu={true}', () => {
    const renderer = new ShallowRenderer()
    let buttonRegistrationSnapshot = renderer.render(<ButtonRegistration />);
    expect(buttonRegistrationSnapshot).toMatchSnapshot();
});