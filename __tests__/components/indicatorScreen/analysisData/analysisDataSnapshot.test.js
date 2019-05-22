import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AnalysisData } from '../../../../app/components/indicatorScreen/analysisData/analysisData';

const mockFnc = () =>{}

it('create snapshot AnalysisData', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<AnalysisData />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
