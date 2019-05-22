import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ShowSpiner from '../../../../../app/components/commoncomponents/formbtnsubmit/formbtnsubmitspiner/formbtnsubmitspiner';

it('create snapshot ShowSpiner', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<ShowSpiner />);
    expect(toolbarSnapshot).toMatchSnapshot();
});