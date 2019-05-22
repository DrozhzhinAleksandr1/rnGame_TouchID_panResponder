import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AnalysisDataTopLeftBtn } from '../../../../../app/components/indicatorScreen/analysisData/analysisDataElements/analysisDataTopLeftBtn';

it('create snapshot AnalysisDataTopLeftBtn', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<AnalysisDataTopLeftBtn quotationText={'Котировка:'} quotationNum={'0.94527'}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});
