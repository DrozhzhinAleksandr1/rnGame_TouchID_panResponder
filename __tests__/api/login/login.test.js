import { crmlogin } from "../../../app/api/login/loginmainsingletone";
import store from "../../../app/redux/store/store";
import { setLoginName  } from "../../../app/redux/actions/actionlogintitle";

describe('Test login', () => {
    describe('Test getRequestLoginJsonObj notvalid', () => {

        it('isLogin crmlogin.getRequestLoginJsonObj(null,"test"', () => {
            expect( crmlogin.getRequestLoginJsonObj(null,"test")).toEqual("null");
        });
        
        it('isLogin crmlogin.getRequestLoginJsonObj("test",null', () => {
            expect( crmlogin.getRequestLoginJsonObj("test",null)).toEqual("null");
        });
        it('isLogin crmlogin.getRequestLoginJsonObj(undefined,null', () => {
            expect( crmlogin.getRequestLoginJsonObj(undefined,null)).toEqual("null");
        });
    });
    describe('Test getRequestLoginJsonObj valid', () => {
        it('isLogin crmlogin.getRequestLoginJsonObj("test","test")', () => {
            expect( crmlogin.getRequestLoginJsonObj("test","test")).toEqual( "{\"email\":\"test\",\"password\":\"test\"}");
        });
    });
    describe('Test dispathSetLogin notvalid', () => {
        it('isLogin stor.dispatch(setLoginName(null))', () => {
            store.dispatch(setLoginName(undefined));
            let name  = store.getState().usernamereduser.userName;
            expect(name).toEqual('');
        });
        it('isLogin stor.dispatch(setLoginName(null))', () => {
            store.dispatch(setLoginName(null));
            let name  = store.getState().usernamereduser.userName;
            expect(name).toEqual('');
        });
        it('isLogin stor.dispatch(setLoginName(null))', () => {
            store.dispatch(setLoginName(false));
            let name  = store.getState().usernamereduser.userName;
            expect(name).toEqual('');
        });
    });
    describe('Test dispathSetLogin valid', () => {
        it('isLogin stor.dispatch(setLoginName("name"))', () => {
            store.dispatch(setLoginName('name'));
            let name  = store.getState().usernamereduser.userName;
            expect(name).toEqual('name');
        });
    });

});
