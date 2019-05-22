import { crmRegistration } from "../../../app/api/registration/registrationsingletone";

describe('Test login', () => {
    describe('Test getRequestcrmRegistrationJsonObj notvalid', () => {

        it('isLogin crmRegistration.getRequestcrmRegistrationJsonObj(undefined, "lastName", "email", "country", "codephone", "phone")', () => {
            expect(crmRegistration.getRequestcrmRegistrationJsonObj(undefined, "lastName", "email", "country", "codephone", "phone")).toEqual(null);
        });
        it('isLogin crmRegistration.getRequestcrmRegistrationJsonObj("firstName", undefined, "email", "country", "codephone", "phone")', () => {
            expect(crmRegistration.getRequestcrmRegistrationJsonObj("firstName", undefined, "email", "country", "codephone", "phone")).toEqual(null);
        });
        it('isLogin crmRegistration.getRequestcrmRegistrationJsonObj( "firstName", "lastName", undefined, "country", "codephone", "phone")', () => {
            expect(crmRegistration.getRequestcrmRegistrationJsonObj("firstName", "lastName", undefined, "country", "codephone", "phone")).toEqual(null);
        });
        it('isLogin crmRegistration.getRequestcrmRegistrationJsonObj( "firstName", "lastName", "email", undefined, "codephone", "phone")', () => {
            expect(crmRegistration.getRequestcrmRegistrationJsonObj(undefined, "lastName", "email", "country", "codephone", "phone")).toEqual(null);
        });
        it('isLogin crmRegistration.getRequestcrmRegistrationJsonObj( "firstName", "lastName", "email", "country", undefined, "phone")', () => {
            expect(crmRegistration.getRequestcrmRegistrationJsonObj("firstName", "lastName", "email", "country", undefined, "phone")).toEqual(null);
        });
        it('isLogin crmRegistration.getRequestcrmRegistrationJsonObj( "firstName", "lastName", "email", "country", "codephone", undefined )', () => {
            expect(crmRegistration.getRequestcrmRegistrationJsonObj("firstName", "lastName", "email", "country", "codephone", undefined)).toEqual(null);
        });
    });
    describe('Test getRequestcrmRegistrationJsonObj valid', () => {
        it('isLogin crmRegistration.getRequestcrmRegistrationJsonObj("password", "firstName", "lastName", "email", "country", "codephone", "phone", "lang" )', () => {
            expect(crmRegistration.getRequestcrmRegistrationJsonObj("password", "firstName", "lastName", "email", "country", "codephone", "phone", "lang"))
                .toEqual("model.password=password&model.firstName=firstName&model.lastName=lastName&model.phoneCountry=codephone&model.phoneOperator=codephone&model.phoneNumber=phone&model.email=email&model.country=country&model.terms=true&model.lang=lang");
        });
    });
});
