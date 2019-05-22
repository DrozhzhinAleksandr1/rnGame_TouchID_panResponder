import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {InputPassWordWithSVG}  from '../../../../../app/components/authorization/authoriztionelements/textinput';
import { localization } from '../../../../../app/common/localization';


it('create snapshot InputPassWordWithSVG', () => {
    const renderer = new ShallowRenderer()
    let buttonRegistrationSnapshot = renderer.render(<InputPassWordWithSVG CurrentLanguage={localization.ru}/>);
    expect(buttonRegistrationSnapshot).toMatchSnapshot();
});