import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { SettingsScreen } from '../../../../app/components/screens/settingsScreen/settingsScreen';

it('create snapshot settingsScreen', () => {
    const renderer = new ShallowRenderer()  
    let  settingsSnapshot = renderer.render(<SettingsScreen/>);
    expect(settingsSnapshot).toMatchSnapshot();
});