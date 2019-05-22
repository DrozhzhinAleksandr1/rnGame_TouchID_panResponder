import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { RegistrationPopUp } from '../../../app/components/registrationpopup/registrationpopup';

it('create snapshot RegistrationPopUp', () => {
    const renderer = new ShallowRenderer()
    let snapshot = renderer.render(<RegistrationPopUp showRegistrationPopUp={false} />);
    expect(snapshot).toMatchSnapshot();
});
it('create snapshot RegistrationPopUp', () => {
    const renderer = new ShallowRenderer()
    let snapshot = renderer.render(<RegistrationPopUp showRegistrationPopUp={true} />);
    expect(snapshot).toMatchSnapshot();
});
