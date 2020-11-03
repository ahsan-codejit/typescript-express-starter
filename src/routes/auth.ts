
import { Application, Request, Response } from "express";
import authController from '../api/auth';
import { verifyAccessToken } from '../common/middlewares/verifyToken';
let route = (app: Application) => {
    app.post('/api/auth/login', (req: Request, res: Response) => {
        return authController.login(req, res);
    });
    app.post('/api/auth/token', (req: Request, res: Response) => {
        res.json({});
    });
    app.post('/api/auth/token/verify', verifyAccessToken, (req: Request, res: Response) => {
        res.json({ message: 'success' });
    });
}

export default { route };