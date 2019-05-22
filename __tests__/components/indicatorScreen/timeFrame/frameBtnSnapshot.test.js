import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FrameBtn } from '../../../../app/components/indicatorScreen/timeFrame/frameBtn';

const mockFnc = () =>{}

it('create snapshot FrameBtn', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<FrameBtn isChosen={true} frameBtnText={"1 мин"} showBtn={mockFnc}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});
