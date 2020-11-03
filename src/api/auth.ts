import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { userType } from '../common/types/datatypes';
class AuthController {
    private users: userType[];
    constructor() {
        this.users = [
            { username: 'test1', password: 'test123' },
            { username: 'test2', password: 'test123' }
        ]
    }
    public login(req: Request, res: Response) {
        let reqUser: any = req.body;
        //authentication process
        //here we are returning token and refresh token
        let loggedUser = this.users.find(user => user.username === reqUser.username);
        let accessToken: string;
        let refreshToken: string;
        if (loggedUser) {
            //accessToken
            const accessTokenSecret: string = process.env.ACCESS_TOKEN_SECRET!;
            const accessTokenLife: string = process.env.ACCESS_TOKEN_LIFE + 'h';
            accessToken = jwt.sign(loggedUser, accessTokenSecret, { expiresIn: accessTokenLife, algorithm: 'HS256' });
            //refreshToken
            const refreshTokenSecret: string = process.env.REFRESH_TOKEN_SECRET!;
            const refreshTokenLife: string = process.env.REFRESH_TOKEN_LIFE + 'h';
            refreshToken = jwt.sign(loggedUser, refreshTokenSecret, { expiresIn: refreshTokenLife, algorithm: 'HS256' });
        } else {
            return res.status(401).json({ message: 'incorrect username/password' });
        }
        return res.status(200).json({ accessToken, refreshToken });
    }
}

export default new AuthController();