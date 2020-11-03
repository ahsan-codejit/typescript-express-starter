import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
export let verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    try {
        let token = req.headers.authorization.split(' ')[1];
        let payload: any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
        process.env.currentUser = payload;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
}

export let verifyRefreshToken = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    try {
        jwt.verify(req.headers.authorization, process.env.REFRESH_TOKEN_SECRET!);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
}