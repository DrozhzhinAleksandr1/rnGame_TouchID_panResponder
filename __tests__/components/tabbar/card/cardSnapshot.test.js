import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Card } from '../../../../app/components/tabbar/card/card';
import { localization } from '../../../../app/common/localization';

const mockItem = {'ID': 3, 'market': 'Currency', 'titleQuotation': 'AUD/CAD', 'priceBuy': "40.298", 'priceSell': "991.03"};

it('create snapshot Card', () => {
    const renderer = new ShallowRenderer()
    let cardScreenSnapshot = renderer.render(<Card item={mockItem} key={mockItem.ID} currentLanguage={localization.ru}/>);
    expect(cardScreenSnapshot).toMatchSnapshot();
});