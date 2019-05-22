import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {LanguageBtns}  from '../../../../../../app/components/toolbar/menu/menupopup/languagebtns/languagebtns';

it('create snapshot LanguageBtns ', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<LanguageBtns />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
