import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AuthorizationBtn } from '../../../../app/components/registrationscreen/registrationelements/authorizationbtn';

it('create snapshot AuthorizationBtn', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<AuthorizationBtn />);
    expect(toolbarSnapshot).toMatchSnapshot();
});