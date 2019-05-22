import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AnalysisDataCenter } from '../../../../../app/components/indicatorScreen/analysisData/analysisDataElements/analysisDataCenter';

it('create snapshot AnalysisDataCenter', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<AnalysisDataCenter quotationText={'Pivot Points:'} quotationNum={'0.98139'} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
