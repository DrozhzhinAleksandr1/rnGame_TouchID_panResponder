import { IphoneX } from '../../../app/api/getIphoneX/getIsIphoneX';
 
describe('Test  is IphoneX ', () => {
        it('is IphoneX', () => {
            let iphoneX = new IphoneX();
            expect( iphoneX.getIsIphoneX()).toEqual( false );
        });
});
