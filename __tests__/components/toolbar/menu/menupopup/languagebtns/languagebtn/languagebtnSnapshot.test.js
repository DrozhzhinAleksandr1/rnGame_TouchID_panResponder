import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LanguageBtn  from '../../../../../../../app/components/toolbar/menu/menupopup/languagebtns/languagebtn/languagebtn';

it('create snapshot LanguageBtn ', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<LanguageBtn />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
