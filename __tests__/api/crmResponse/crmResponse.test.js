
import store from "../../../app/redux/store/store";
import { crmResponseMassage  } from "../../../app/common/crmResponse";

describe('Test crmResponseMassage', () => {
    describe('Test crmResponseMassage notvalid', () => {
        it('crmResponseMassage(401)', () => {
            expect( crmResponseMassage(401, null, store)).toEqual("Incorrect email address or password.");
        });
        
        it('statusCode == "500" && errorFromServer == "3"', () => {
            expect(  crmResponseMassage(500,3, store)).toEqual("Parameters entered during registration are incorrect.");
        });
        it('statusCode == "500" && errorFromServer == "6"', () => {
            expect(  crmResponseMassage(500,6, store)).toEqual("Unfortunately, the account with this email already exists.");
        });
        it('statusCode == "500" && errorFromServer == "10"', () => {
            expect(  crmResponseMassage(500,6, store)).toEqual( "Unfortunately, the account with this email already exists." );
        });
        it('another errors', () => {
            expect(  crmResponseMassage("test","test", store)).toEqual( "An unexpected was error occured." );
        });
    });
});
