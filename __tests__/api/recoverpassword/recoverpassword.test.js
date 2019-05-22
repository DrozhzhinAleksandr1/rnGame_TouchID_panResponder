import { crmForgotPasswor } from "../../../app/api/forgotpassword/forgotpasswordsingletone";
import store from "../../../app/redux/store/store";

describe('Test ForgotPassword', () => {
    describe('Test getRequestForgotPasswordJsonObj notvalid', () => {

        it('ForgotPassword crmForgotPasswor.getRequestForgotPasswordJsonObj(null,"test"', () => {
            expect( crmForgotPasswor.getRequestForgotPasswordJsonObj(null,"test")).toEqual("null");
        });
        
        it('ForgotPassword crmForgotPasswor.getRequestForgotPasswordJsonObj("test",null', () => {
            expect( crmForgotPasswor.getRequestForgotPasswordJsonObj("test",null)).toEqual("null");
        });
        it('ForgotPassword crmForgotPasswor.getRequestForgotPasswordJsonObj(undefined,null', () => {
            expect( crmForgotPasswor.getRequestForgotPasswordJsonObj(undefined,null)).toEqual("null");
        });
    });
    describe('Test getRequestForgotPasswordJsonObj valid', () => {
        it('ForgotPassword crmForgotPasswor.getRequestForgotPasswordJsonObj("test","test")', () => {
            expect( crmForgotPasswor.getRequestForgotPasswordJsonObj("test","test")).toEqual( "{\"email\":\"test\",\"culture\":\"test\",\"baseLink\":\"https://www.umarkets.com/en/my-account/\"}");
        });
    });

    describe('Test dispathSetLogin valid', () => {
        it('ForgotPassword crmForgotPasswor.dispathSetLogin("test","test")', () => {
            crmForgotPasswor.dispathSetLogin("test");
            let name = store.getState().usernamereduser.userName;
            expect(name).toEqual( "test");
        });
    });
    describe('Test dispathSetLogin notvalid', () => {
        it('ForgotPassword crmForgotPasswor.dispathSetLogin("test","test")', () => {
            crmForgotPasswor.dispathSetLogin('');
            let name = store.getState().usernamereduser.userName;
            expect(name).toEqual( "test");
        });
        it('ForgotPassword crmForgotPasswor.dispathSetLogin("test","test")', () => {
            crmForgotPasswor.dispathSetLogin(null);
            let name = store.getState().usernamereduser.userName;
            expect(name).toEqual( "test");
        });
    });
});
