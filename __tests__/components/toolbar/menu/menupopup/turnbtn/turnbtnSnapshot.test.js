import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {TurnBtn}  from '../../../../../../app/components/toolbar/menu/menupopup/turnBtn/turnbtn';
import { localization } from '../../../../../../app/common/localization';

it('create snapshot MenuPopUp ', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<TurnBtn CurrentLanguage={localization.ru}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});
