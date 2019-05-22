import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FooterBtnDetails } from '../../../../../../app/components/screens/homeScreen/homeScreenElement/fotterbtns/footerBtnDetails';

it('create snapshot FooterBtnDetails', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<FooterBtnDetails btnDetailsText={'Details'}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});
