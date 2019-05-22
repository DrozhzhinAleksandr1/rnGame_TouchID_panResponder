import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { localization } from '../../../../../app/common/localization';
import { HeaderFavoriteCard } from '../../../../../app/components/screens/homeScreen/homeScreenElement/headerFavoriteCard';

const mockItem = {
    Ask: "0.92835",
    Bid: "0.92802",
    Diff: "0.00010",
    ESV: "0.92802",
    FullName: "AUD/CAD",
    ID: 1,
    Market: "Currency",
    Max: "0.92933",
    Min: "0.92696",
    Name: "AUDCAD",
    Per: 1539938640,
    Rate: "0.0108",
    SSV: "0.92792",
    Sess: "Open",
    Timestamp: 1539938689948,
}

it('create snapshot HeaderFavoriteCard', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<HeaderFavoriteCard item={mockItem} CurrentLanguage={localization.ru} isInfoOpened={true} isGraphicOpened={true} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
