import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegistrationBtn from '../../../../app/components/registrationpopup/registrationbtn/registrationbtn';

it('create snapshot RegistrationBtn', () => {
    const renderer = new ShallowRenderer()
    let snapshot = renderer.render(<RegistrationBtn />);
    expect(snapshot).toMatchSnapshot();
});