import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {NoticeBtn}  from '../../../../../../app/components/toolbar/menu/menupopup/noticebtn/noticebtn';
import { localization } from '../../../../../../app/common/localization';

it('create snapshot NoticeBtn ', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<NoticeBtn CurrentLanguage={localization.ru}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});
