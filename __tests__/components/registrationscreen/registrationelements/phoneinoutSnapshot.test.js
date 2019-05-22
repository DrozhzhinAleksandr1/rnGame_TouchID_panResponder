import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { PhoneInput } from '../../../../app/components/registrationscreen/registrationelements/phoneinput';
import { localization } from '../../../../app/common/localization';

it('create snapshot PhoneInput', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<PhoneInput phcode={380} CurrentLanguage={localization.ru}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});