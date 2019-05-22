import { validationTest } from "../../../app/api/validation/validationInput"; 


describe('Test Authorization API', () => {  
    it('Authorization test check email with valid data', () => {
        let validEmail =  ["test@yahoo.com",
        "test-100@yahoo.com", "test.100@yahoo.com",
        "test111@test.com", "test-100@test.net",
        "test.100@test.com.au", 
        "test@1.com",
        "test@gmail.com.com", "test-100@yahoo-test.com"],
        filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        validEmail.forEach(email => {
            let result = validationTest(email,filter); 
            expect(result).toEqual(true);
       });
    }); 
    it('Authorization test check email with invalid data', () => {
        let  invalidEmail = ["test", "test@.com.my",
        "test123@gmail.a", "test123@.com", "test123@.com.com",
        ".test@test.com", "test()*@gmail.com", "test@%*.com",
        "test..2002@gmail.com", "test.@gmail.com",
        "test@test@gmail.com", "test@gmail.com.1a"],
        filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        invalidEmail.forEach(email => {
            let result = validationTest(email,filter); 
            expect(result).toEqual(false);
       });
    });
    
    it("Authorization test check password with valid data", ()=>{
        let validData = ["TestPassword","2321334", "!@#$%^&*(D", "}{}sds!#!"];
        filter = /.{6,}/;

        validData.forEach(password => {
            let result = validationTest(password,filter); 
            expect(result).toEqual(true);
       });
    });
    it("Authorization test check password with invalid data", ()=>{
        let validData = ["","332", "32132"];
        filter = /.{6,}/;

        validData.forEach(password => {
            let result = validationTest(password,filter); 
            expect(result).toEqual(false);
       });
    });
});
