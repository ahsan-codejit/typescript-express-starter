import tokenGenerator from './tokenGenerator';
import dotenv from 'dotenv';
dotenv.config();
describe(`TokenGenerator`, () => {
    it(`tokenGenerator.getAccessToken(payload), should return access token`, () => {
        let payload = { name: 'accesstoken' }
        let token = tokenGenerator.getAccessToken(payload);
        expect(typeof token).toBe('string');
    });

    it(`tokenGenerator.getRefreshToken(payload), should return access token`, () => {
        let payload = { name: 'accesstoken' }
        let token = tokenGenerator.getRefreshToken(payload);
        expect(typeof token).toBe('string');
    })
});