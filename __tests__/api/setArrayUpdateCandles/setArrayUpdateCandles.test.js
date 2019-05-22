import { setArrayUpdateCandlesInReducer } from "../../../app/api/setArrayUpdateCandles/setArrayUpdateCandles";

describe('Test setArrayUpdateCandlesInReducer', () => {    
    describe('Test setArrayUpdateCandlesInReducer ', () => {

        let mockDataCandels = { 
                1: {},
                2: {id: 4, period: "Hour"}
            };

        it('dateFormaterToArr make arr with date', () => {
            expect(setArrayUpdateCandlesInReducer(mockDataCandels)).toEqual([{"id": "4", "period": "Hour"}]);
        });
    });
});


