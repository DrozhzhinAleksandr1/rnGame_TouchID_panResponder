import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ErrorValidation}  from '../../../app/components/loginerror/loginvalidationerror';

it('create snapshot ErrorValidation', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<ErrorValidation />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
