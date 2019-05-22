import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AnalysisDataTop } from '../../../../../app/components/indicatorScreen/analysisData/analysisDataElements/analysisDataTop';

it('create snapshot AnalysisDataTop', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<AnalysisDataTop quotationText={'Котировка:'} quotationNum={'0.94527'} btnText={'покупать'} action={'buy'} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
