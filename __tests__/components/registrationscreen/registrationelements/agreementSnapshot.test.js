import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AgreementBtn } from '../../../../app/components/registrationscreen/registrationelements/agreementbtn';

it('create snapshot AgreementBtn', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<AgreementBtn />);
    expect(toolbarSnapshot).toMatchSnapshot();
});