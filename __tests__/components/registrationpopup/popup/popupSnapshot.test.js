import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PopUp from '../../../../app/components/registrationpopup/popup/popup';

it('create snapshot  PopUp', () => {
    const renderer = new ShallowRenderer()
    let snapshot = renderer.render(<PopUp />);
    expect(snapshot).toMatchSnapshot();
});
