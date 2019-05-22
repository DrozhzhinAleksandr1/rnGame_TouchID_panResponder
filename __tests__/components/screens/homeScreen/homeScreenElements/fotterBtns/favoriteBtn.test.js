import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FavoriteBtn } from '../../../../../../app/components/screens/homeScreen/homeScreenElement/fotterbtns/favoriteBtn';

it('create snapshot FavoriteBtn', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<FavoriteBtn isQuotesFavorite={true} setIsQuotesFavorite={()=>{}} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});