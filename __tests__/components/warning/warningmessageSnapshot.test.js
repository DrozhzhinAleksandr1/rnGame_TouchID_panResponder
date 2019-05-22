import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { WarningMessage } from '../../../app/components/warning/warningmessage';

it('create snapshot WarningMessage', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<WarningMessage />);
    expect(toolbarSnapshot).toMatchSnapshot();
});