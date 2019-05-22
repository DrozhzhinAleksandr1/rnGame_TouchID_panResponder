import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {TabBarWrapper} from '../../../../app/components/tabbar/tabbarwrapper/tabbarwrapper';

it('create snapshot WarningMessage', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<TabBarWrapper />);
    expect(toolbarSnapshot).toMatchSnapshot();
});