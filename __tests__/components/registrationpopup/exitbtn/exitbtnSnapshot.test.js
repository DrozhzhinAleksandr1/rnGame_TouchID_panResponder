import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ExitBtn from '../../../../app/components/registrationpopup/exitbtn/exitbtn';

it('create snapshot ExitBtn', () => {
    const renderer = new ShallowRenderer()
    let snapshot = renderer.render(<ExitBtn />);
    expect(snapshot).toMatchSnapshot();
});