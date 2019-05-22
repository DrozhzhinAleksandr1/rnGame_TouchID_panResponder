// export const checkNumbLessTen = (numb) => {
//     let result = "";
//     if(numb && (numb <=  9 ))
//     {
//         result = "0" + numb;
//     }else{
//         result = numb;
//     }
//     return result;
// }

// export const getDataWithNeedFormat = (unix_timestamp) => {
//     let date = new Date(unix_timestamp );
//         year = date.getFullYear(),
//         month = date.getMonth(),
//         dateMonth = date.getDate(),
//         hour = date.getHours(),
//         min = date.getMinutes(),
//         sec = date.getSeconds(),
//         time = checkNumbLessTen(dateMonth) + '.' + checkNumbLessTen(month + 1) + '.' + checkNumbLessTen(year) + ' | ' + checkNumbLessTen(hour) + ':' + checkNumbLessTen(min) + ':' + checkNumbLessTen(sec);
//     return time;
// }

// export const getSpred  = (ask, bid) =>{
//         let result = 0;
//         if(ask, bid)
//         {
//             result =  (ask - bid) * 1000;
//         }
//         return result.toFixed(2);
// }
import {checkNumbLessTen, getDataWithNeedFormat, getSpred, getCountNumbersAftersPoint } from "../../../app/api/opencardlogic/opencard.api";
describe('TEST checkNumbLessTen ', () => {
    test('checkNumbLessTen(9)) ', () => {
        let numb = checkNumbLessTen(9);
        expect("09").toEqual(numb);
    });
    test('checkNumbLessTen (0)) ', () => {
        let numb = checkNumbLessTen(0);
        expect(0).toEqual(numb);
    });
    test('checkNumbLessTen (10)) ', () => {
        let numb = checkNumbLessTen(10);
        expect(10).toEqual(numb);
    });
});
describe('TEST getCountNumbersAftersPoint ', () => {
    test('getCountNumbersAftersPoint(0.93103)) ', () => {
        let numb = checkNumbLessTen(0.93103);
        expect(5).toEqual(numb);
    });
    test('getCountNumbersAftersPoint (null)) ', () => {
        let numb = getCountNumbersAftersPoint(null);
        expect(0).toEqual(numb);
    });

});

describe('TEST getDataWithNeedFormat ', () => {
    test('getDataWithNeedFormat(1536643396402)) ', () => {
        let numb = getDataWithNeedFormat(1536643396402);
        expect("11.09.2018 | 08:23:16").toEqual(numb);
    });
    test('getDataWithNeedFormat(null)) ', () => {
        let numb = getDataWithNeedFormat(null);
        expect("").toEqual(numb);
    });
});

describe('TEST getSpred ', () => {
    test('getSpred("0.912323", "0.900003")', () => {
        let numb = getSpred("0.912323", "0.900003");
        expect("12.32").toEqual(numb);
    });
    test('getSpred(null, "0.900003") ', () => {
        let numb = getSpred(null, "0.900003");
        expect("-900.00").toEqual(numb);
    });
    test('getSpred("0.912323", null)', () => {
        let numb = getSpred("0.912323", null);
        expect("0.00").toEqual(numb);
    });
});