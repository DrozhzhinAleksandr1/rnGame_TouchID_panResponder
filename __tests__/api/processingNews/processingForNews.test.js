
import ApiForNews from '../../../app/api/processingNews/processingForNews';

describe('test ApiForNews', () => {
    test('isDefault is true', () => {
        let api = new ApiForNews();
        let wrapper = api.isDefoultImages("http://test//default");
        expect(wrapper).toEqual(true);
    });
    test('isDefault is false', () => {
        let api = new ApiForNews();
        let wrapper = api.isDefoultImages("http://test//");
        expect(wrapper).toEqual(false);
    });
});

