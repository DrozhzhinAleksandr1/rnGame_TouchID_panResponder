import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { ExitPopUp } from '../../../app/components/exitpopup/exitpopup';
import { localization } from '../../../app/common/localization';

it('create snapshot ExitPopUp', () => {
    const renderer = new ShallowRenderer()
    let exitPopUpSnapshot = renderer.render(<ExitPopUp CurrentExitPopUpVisibility={true} CurrentLanguage={localization.ru}/>);
    expect(exitPopUpSnapshot).toMatchSnapshot();
});