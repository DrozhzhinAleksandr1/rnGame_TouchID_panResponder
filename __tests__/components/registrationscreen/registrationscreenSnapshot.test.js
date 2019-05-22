import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { RegistrationScreen } from '../../../app/components/registrationscreen/registrationscreen';
import { localization } from '../../../app/common/localization';
import stackNav from '../../../app/redux/reducers/stacknavreducer';
stackNav.setParams = () => {
    return "test";
}
mock = () => { };
it('create snapshot RegistrationScreen', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<RegistrationScreen CurrentLanguage={localization.ru} navigation={stackNav}
        setRegistrationLastName={mock}
        setRegistrationFirstName={mock}
        setRegistrationEmail={mock}
        setRegistrationCountry={mock}
        setRegistrationPhone={mock}
        validObjCheckboxgistration={false} />);
    expect(toolbarSnapshot).toMatchSnapshot();
});
