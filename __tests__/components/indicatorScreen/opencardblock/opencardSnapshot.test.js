import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { OpenCard } from '../../../../app/components/indicatorScreen/opencardblock/opencard';

const item = {
    Ask: "1.09046",
    Bid:"1.09002",
    Diff:"-0.00005",
    ESV:"1.09002",
    FullName:"AUD/NZD",
    ID:4,
    Market: "Currency",
    Max:  "1.09111",
    Min:"1.08764",
    Name:"AUDNZD",
    Per:1536643380,
    Rate:"-0.0046",
    SSV:"1.09007",
    Sess:"Open",
    Timestamp:1536643396402,
}
const openCellItem = {
    "diferenceTitle": "Разница:",
    "openTitle": "Открытые:",
    "minTitle": "Мин.:",
    "percentdifereceTitle": "Разница%:",
    "closeTitle": "Закрытые:",
    "maxTitle": "Макс.:",
} 

it('create snapshot Card', () => {
    const renderer = new ShallowRenderer()
    let cardScreenSnapshot = renderer.render(<OpenCard item = {item} openCellItem = {openCellItem}/>);
    expect(cardScreenSnapshot).toMatchSnapshot();
});