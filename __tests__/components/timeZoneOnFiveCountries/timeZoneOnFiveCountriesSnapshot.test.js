import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { localization } from '../../../app/common/localization';
import { TimeZoneOnFiveCountries } from '../../../app/components/indicatorScreen/timeZoneOnFiveCountries/timeZoneOnFiveCountries';

it('create snapshot TimeZoneOnFiveCountries', () => {
    let date = {};
    date.getHours = () => { return 10 };
    date.getMinutes = () => { return 10 };
    date.getSeconds = () => { return 10 };
    date.getTimezoneOffset = () => { return 240 };

    const renderer = new ShallowRenderer()
    let timeZoneOnFiveCountries = renderer.render(<TimeZoneOnFiveCountries date={date} />);
    expect(timeZoneOnFiveCountries).toMatchSnapshot();
});