import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { CountryList } from '../../../../app/components/registrationscreen/registrationelements/countrylist';
import { localization } from '../../../../app/common/localization';

const mock_validObjCountryRegistration = {value: "USA", isValidValue: true};

it('create snapshot CountryList', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<CountryList textTitle={localization.ru} registrationCountry={mock_validObjCountryRegistration}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});