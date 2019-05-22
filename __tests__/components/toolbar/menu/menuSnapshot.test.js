import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Menu } from '/components/toolbar/menu/menu';

it('create snapshot toolbar', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<Menu />);
    expect(toolbarSnapshot).toMatchSnapshot();
});