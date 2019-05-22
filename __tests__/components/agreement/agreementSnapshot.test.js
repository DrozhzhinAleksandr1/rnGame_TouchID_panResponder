import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AgreementScreen } from '../../../app/components/agreement/agreement';
import { localization } from '../../../app/common/localization';
import stackNav from '../../../app/redux/reducers/stacknavreducer';

stackNav.setParams = () => {
    return "asd";
}

it('create snapshot WarningMessage', () => {
    const renderer = new ShallowRenderer()
    let toolbarSnapshot = renderer.render(<AgreementScreen CurrentLanguage={localization.ru} navigation={stackNav}/>);
    expect(toolbarSnapshot).toMatchSnapshot();
});