import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { TimeFrame } from '../../../../app/components/indicatorScreen/timeFrame/timeFrame';

it('create snapshot TimeFrame', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<TimeFrame/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});
