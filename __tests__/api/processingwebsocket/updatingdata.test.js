
import { mapFromFile } from '../../../_mock_/data/quotetiondata';
import { updatingDataFromServer } from '../../../app/api/processingwebsocket/updatingdata';

describe('updatingDataFromServer', () => {

    test('updatingDataFromServer', () => {
        let wrapper = updatingDataFromServer(mapFromFile.mapCurrency);
        expect(wrapper.mapCurrency["1"].ID).toEqual(1);
        expect(wrapper.mapCurrency["2"].ID).toEqual(2);
        expect(wrapper.mapCurrency["19"].ID).toEqual(19);
    });
});
