import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FooterBtnGraph } from '../../../../../../app/components/screens/homeScreen/homeScreenElement/fotterbtns/footerBtnGraph';

it('create snapshot FooterBFooterBtnGraphtnInfo', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<FooterBtnGraph isActive={true} setIsGraphicOpened={() => { }} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});