import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { SlidingValue } from '../../../../../app/components/indicatorScreen/analysisData/analysisDataElements/slidingValues';

it('create snapshot SlidingValue', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<SlidingValue text={'R1'} number={0.946587} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
