import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { CountrySearch } from '../../../app/components/countryscreen/countrySearch';
import { localization } from '../../../app/common/localization';

it('create snapshot CountrySearch', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<CountrySearch CurrentLanguage={localization.ru}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});