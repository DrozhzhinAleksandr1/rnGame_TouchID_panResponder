import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { ThanksForJoiningPopUp } from '../../../app/components/thanksforjoiningpopup/thanksforjoiningpopup';
import { localization } from '../../../app/common/localization';

it('create snapshot ThanksForJoiningPopUp', () => {
    const renderer = new ShallowRenderer()
    let thanksForJoiningPopUp = renderer.render(<ThanksForJoiningPopUp CurrentThanksForJoiningPopUpVisibility={true} CurrentLanguage={localization.ru}/>);
    expect(thanksForJoiningPopUp).toMatchSnapshot();
});