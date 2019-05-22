import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AnalysisDataBottom } from '../../../../../app/components/indicatorScreen/analysisData/analysisDataElements/analysisDataBottom';

it('create snapshot AnalysisDataBottom', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<AnalysisDataBottom
        text1={'R1:'}
        number1={0.94765}
        text2={'R2:'}
        number2={0.94276}
        text3={'R3:'}
        number3={0.94965}
        discriptions={'Показатели:'}
        up={3}
        down={0} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
