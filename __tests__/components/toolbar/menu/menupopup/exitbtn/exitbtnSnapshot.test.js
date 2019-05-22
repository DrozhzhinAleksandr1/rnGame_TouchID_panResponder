import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ExitBtn}  from '../../../../../../app/components/toolbar/menu/menupopup/exitbtn/exitbtn';

it('create snapshot ExitBtn ', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<ExitBtn />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
