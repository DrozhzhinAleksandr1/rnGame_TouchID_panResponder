import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FormBtnSubmit from '../../../../app/components/commoncomponents/formbtnsubmit/formbtnsubmit';

it('create snapshot Input', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<FormBtnSubmit />);
    expect(toolbarSnapshot).toMatchSnapshot();
});