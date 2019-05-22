import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Input } from '../../../app/components/commoncomponents/input';

it('create snapshot Input', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<Input />);
    expect(toolbarSnapshot).toMatchSnapshot();
});