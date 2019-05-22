import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { SearchInput } from '/components/toolbar/search/searchinput/searchinput';

it('create snapshot Search', () => {
    const renderer = new ShallowRenderer()
    let SearchSnapshot = renderer.render(<SearchInput />);
    expect(SearchSnapshot).toMatchSnapshot();
});