import { Request, Response } from 'express';
import tokenGenerator from '../common/services/tokenGenerator';
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
            accessToken = tokenGenerator.getAccessToken(loggedUser);
            //refreshToken
            refreshToken = tokenGenerator.getRefreshToken(loggedUser);
        } else {
            return res.status(401).json({ message: 'incorrect username/password' });
        }
        return res.status(200).json({ accessToken, refreshToken });
    }
}

export default new AuthController();