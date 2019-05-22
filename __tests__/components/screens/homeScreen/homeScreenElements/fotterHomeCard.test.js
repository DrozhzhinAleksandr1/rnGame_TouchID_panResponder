import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FooterHomeCard } from '../../../../../app/components/screens/homeScreen/homeScreenElement/footerHomeCard';

it('create snapshot FooterHomeCard', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<FooterHomeCard isSessionOpened={true} isInfoOpened={true} isGraphicOpened={true} btnDetailsText={'Детализация'} isQuotesFavorite={true}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});