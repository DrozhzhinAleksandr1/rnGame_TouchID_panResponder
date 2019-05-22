import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Search } from '/components/toolbar/search/search';

it('create snapshot Search', () => {
    const renderer = new ShallowRenderer()
    let SearchSnapshot = renderer.render(<Search />);
    expect(SearchSnapshot).toMatchSnapshot();
});