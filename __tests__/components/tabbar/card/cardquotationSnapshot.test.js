import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { CardQuotation } from '../../../../app/components/tabbar/card/cardquotation';

const mockItem = { Bid: "0.95068", titleOfSell:'Продажа' };

it('create snapshot Card', () => {
    const renderer = new ShallowRenderer()
    let cardScreenSnapshot = renderer.render(<CardQuotation numbFromServer={mockItem.Bid} title={mockItem.titleOfSell} />);
    expect(cardScreenSnapshot).toMatchSnapshot();
});