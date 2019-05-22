import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { ToolBar } from '/components/toolbar/toolbar';

it('create snapshot toolbar', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<ToolBar />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
it('create snapshot toolbar', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<ToolBar showSearch={false} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});