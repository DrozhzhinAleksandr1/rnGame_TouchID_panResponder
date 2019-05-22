import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Title } from '/components/toolbar/title/title';
import { localization } from '../../../../app/common/localization';


it('create snapshot title', () => {
    const renderer = new ShallowRenderer()
    let TitleSnapshot = renderer.render(<Title CurrentLanguage={localization.ru} />);
    expect(TitleSnapshot).toMatchSnapshot();
});