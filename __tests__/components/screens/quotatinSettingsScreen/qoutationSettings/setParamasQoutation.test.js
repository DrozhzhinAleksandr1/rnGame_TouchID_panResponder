import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { ParamasQoutation } from '../../../../../app/components/screens/quotatinSettingsScreen/qoutationSettings/setParamasQoutation';

it('create snapshot FooterHomeCard', () => {
    const renderer = new ShallowRenderer();
    let paramasQoutationSnapshot = renderer.render(<ParamasQoutation  title={'Детализация'} />);
    expect(paramasQoutationSnapshot).toMatchSnapshot();
});