import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {MenuPopUp}  from '../../../../../app/components/toolbar/menu/menupopup/menupopup';
import stackNav from '../../../../../app/redux/reducers/stacknavreducer';

stackNav.closeDrawer = () => {
    return "test";
}

it('create snapshot MenuPopUp ', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<MenuPopUp navigation={stackNav}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});
