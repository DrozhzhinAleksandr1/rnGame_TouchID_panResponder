import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AnalysisDataTopRightBtn } from '../../../../../app/components/indicatorScreen/analysisData/analysisDataElements/analysisDataTopRightBtn';

it('create snapshot AnalysisDataTopRightBtn', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<AnalysisDataTopRightBtn action={'non'} btnText={покупать} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
