import jwt from 'jsonwebtoken';
class TokenGenerator {
    public getAccessToken(payload: object) {
        const accessTokenSecret: string = process.env.ACCESS_TOKEN_SECRET!;
        const accessTokenLife: string = process.env.ACCESS_TOKEN_LIFE + 'h';
        return jwt.sign(payload, accessTokenSecret, { expiresIn: accessTokenLife, algorithm: 'HS256' });
    }

    public getRefreshToken(payload: object) {
        const refreshTokenSecret: string = process.env.REFRESH_TOKEN_SECRET!;
        const refreshTokenLife: string = process.env.REFRESH_TOKEN_LIFE + 'h';
        return jwt.sign(payload, refreshTokenSecret, { expiresIn: refreshTokenLife, algorithm: 'HS256' });
    }
}

export default new TokenGenerator();