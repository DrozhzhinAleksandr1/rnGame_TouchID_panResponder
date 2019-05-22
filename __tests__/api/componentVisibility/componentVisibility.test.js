import React from 'react';
import { View } from 'react-native';
import { showComponent } from "../../../app/api/componentVisibility/componentVisibility";

describe('Test showComponent(component, showBool)', () => {
    it('return null if showBool false', () => {
        expect(showComponent(<View />, false)).toEqual(null);
    });
    it('return <View> if showBool true', () => {
        expect(showComponent(<View />, true)).toEqual(<Component />);
    });
});