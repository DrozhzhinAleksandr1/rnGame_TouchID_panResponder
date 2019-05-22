import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { distanceLeftBasedOnTimeFunc, returnArr24Square, lineAccordingOnTimeAboveBlockFunc, paddingLeftForTitleInTimeZone } from '../../../app/api/timeZoneOnFiveCountriesApi/timeZoneOnFiveCountriesApi';
configure({ adapter: new Adapter() });

let mockArr0_4 = [[true, 0, "start"], [true, 1, ""], [true, 2, ""], [true, 3, "end"], [false, 4, ""], [false, 5, ""], [false, 6, ""], [false, 7, ""], [false, 8, ""], [false, 9, ""], [false, 10, ""], [false, 11, ""], [false, 12, ""], [false, 13, ""], [false, 14, ""], [false, 15, ""], [false, 16, ""], [false, 17, ""], [false, 18, ""], [false, 19, ""], [false, 20, ""], [false, 21, ""], [false, 22, ""], [false, 23, ""]];
let mockArr21_4 = [[true, 0, "end"], [false, 1, ""], [false, 2, ""], [false, 3, ""], [false, 4, ""], [false, 5, ""], [false, 6, ""], [false, 7, ""], [false, 8, ""], [false, 9, ""], [false, 10, ""], [false, 11, ""], [false, 12, ""], [false, 13, ""], [false, 14, ""], [false, 15, ""], [false, 16, ""], [false, 17, ""], [false, 18, ""], [false, 19, ""], [false, 20, ""], [true, 21, "start"], [true, 22, ""], [true, 23, ""]]
let mockArr21_3 = [[false, 0, ""], [false, 1, ""], [false, 2, ""], [false, 3, ""], [false, 4, ""], [false, 5, ""], [false, 6, ""], [false, 7, ""], [false, 8, ""], [false, 9, ""], [false, 10, ""], [false, 11, ""], [false, 12, ""], [false, 13, ""], [false, 14, ""], [false, 15, ""], [false, 16, ""], [false, 17, ""], [false, 18, ""], [false, 19, ""], [false, 20, ""], [true, 21, "start"], [true, 22, ""], [true, 23, "end"]];

describe('Test distanceLeftBasedOnTimeFunc', () => {
    test('distanceLeftBasedOnTimeFunc', () => {
        const wrapper = distanceLeftBasedOnTimeFunc(23, 23, 23, 5, 864);
        expect(wrapper).toEqual(18.29050925925926);
    });
    test('distanceLeftBasedOnTimeFunc', () => {
        const wrapper = distanceLeftBasedOnTimeFunc(10, 10, 10, 10, 864);
        expect(wrapper).toEqual(84.03935185185185);
    });

    test('returnArr24Square', () => {
        const wrapper = returnArr24Square(0, 4);
        expect(wrapper).toEqual(mockArr0_4);
    });

    test('returnArr24Square 2', () => {
        const wrapper = returnArr24Square(21, 4);
        expect(wrapper).toEqual(mockArr21_4);
    });

    test('returnArr24Square 3', () => {
        const wrapper = returnArr24Square(21, 3);
        expect(wrapper).toEqual(mockArr21_3);
    });

    test('lineAccordingOnTimeAboveBlockFunc', () => {
        let wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr0_4, 0);
        expect(wrapper).toEqual(true);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr0_4, 1);
        expect(wrapper).toEqual(true);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr0_4, 2);
        expect(wrapper).toEqual(true);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr0_4, 3);
        expect(wrapper).toEqual(true);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr0_4, 4);
        expect(wrapper).toEqual(false);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr0_4, 5);
        expect(wrapper).toEqual(false);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr0_4, 6);
        expect(wrapper).toEqual(false);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr0_4, 7);
        expect(wrapper).toEqual(false);
    });

    test('lineAccordingOnTimeAboveBlockFunc 2', () => {
        let wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr21_3, 21);
        expect(wrapper).toEqual(true);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr21_3, 22);
        expect(wrapper).toEqual(true);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr21_3, 23);
        expect(wrapper).toEqual(true);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr21_3, 0);
        expect(wrapper).toEqual(false);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr21_3, 1);
        expect(wrapper).toEqual(false);
        wrapper = lineAccordingOnTimeAboveBlockFunc(mockArr21_3, 20);
        expect(wrapper).toEqual(false);
    });

    test('paddingLeftForTitleInTimeZone', () => {
        let wrapper = paddingLeftForTitleInTimeZone(mockArr0_4);
        expect(wrapper).toEqual(1.0416666666666667);
        wrapper = paddingLeftForTitleInTimeZone(mockArr21_3);
        expect(wrapper).toEqual(1);
    });
});