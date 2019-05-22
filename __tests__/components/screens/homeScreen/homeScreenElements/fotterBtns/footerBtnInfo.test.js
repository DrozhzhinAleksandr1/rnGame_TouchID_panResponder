import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FooterBtnInfo } from '../../../../../../app/components/screens/homeScreen/homeScreenElement/fotterbtns/footerBtnInfo';

it('create snapshot FooterBtnInfo', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<FooterBtnInfo isActive={true} setIsInfoOpened={() => { }} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});