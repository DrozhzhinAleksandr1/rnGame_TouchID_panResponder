import { RequestTecnivalAnalize } from "../../../app/api/setRequestTechnicalAnalize/setRequestTechnicalAnalize";

describe('Test RequestTecnivalAnalize', () => {
    describe('Test RequestTecnivalAnalize.requestTecnivalAnalize notvalid', () => {
        it('requestTecnivalAnalize.getDataToUpdateSPR(undefined)', () => {
            let requestTecnivalAnalize = new RequestTecnivalAnalize();
            expect(requestTecnivalAnalize.getDataToUpdateSPR(undefined)).toEqual("Day");
            expect(requestTecnivalAnalize.getDataToUpdateSPR(null)).toEqual("Day");
        });
    });
    describe('Test RequestTecnivalAnalize.requestTecnivalAnalize valid', () => {
        it('requestTecnivalAnalize.getDataToUpdateSPR("Minute")', () => {
            let requestTecnivalAnalize = new RequestTecnivalAnalize();
            expect(requestTecnivalAnalize.getDataToUpdateSPR("Minute")).toEqual("Day");
            expect(requestTecnivalAnalize.getDataToUpdateSPR("Minute5")).toEqual("Day");
            expect(requestTecnivalAnalize.getDataToUpdateSPR("Minute15")).toEqual("Day");
            expect(requestTecnivalAnalize.getDataToUpdateSPR("Minute30")).toEqual("Week");
            expect(requestTecnivalAnalize.getDataToUpdateSPR("Hour")).toEqual("Week");
        });
    });

    getTimeSecondFormat = (piriod) => {
        let result = 3600000;
        if (piriod) {
            switch (piriod) {
                case 'Hour':
                    result = 3600000;
                    break;
                case 'Minute30':
                    result = 1800000;
                    break;
                case 'Minute15':
                    result = 900000;
                    break;
                case 'Minute5':
                    result = 300000;
                    break;
                case 'Minute':
                    result = 60000;
                    break;
                default:
            }
        }
        return result;
    }

    describe('Test RequestTecnivalAnalize.getTimeSecondFormat notvalid', () => {
        it('requestTecnivalAnalize.getTimeSecondFormat', () => {
            let requestTecnivalAnalize = new RequestTecnivalAnalize();
            expect(requestTecnivalAnalize.getTimeSecondFormat(null)).toEqual(3600000);
            expect(requestTecnivalAnalize.getTimeSecondFormat(undefined)).toEqual(3600000);
            expect(requestTecnivalAnalize.getTimeSecondFormat(0)).toEqual(3600000);
            expect(requestTecnivalAnalize.getTimeSecondFormat({})).toEqual(3600000);
            expect(requestTecnivalAnalize.getTimeSecondFormat('')).toEqual(3600000);
        });
    });

    describe('Test RequestTecnivalAnalize.getTimeSecondFormat notvalid', () => {

        it('requestTecnivalAnalize.getTimeSecondFormat', () => {
            let requestTecnivalAnalize = new RequestTecnivalAnalize();
            expect(requestTecnivalAnalize.getTimeSecondFormat("Hour")).toEqual(3600000);
            expect(requestTecnivalAnalize.getTimeSecondFormat('Minute30')).toEqual(1800000);
            expect(requestTecnivalAnalize.getTimeSecondFormat('Minute15')).toEqual(900000);
            expect(requestTecnivalAnalize.getTimeSecondFormat('Minute5')).toEqual(300000);
            expect(requestTecnivalAnalize.getTimeSecondFormat('Minute')).toEqual(60000);
        });
    });
});
