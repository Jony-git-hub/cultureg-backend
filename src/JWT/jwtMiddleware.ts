import type { Request, Response, NextFunction } from 'express';
import { verify } from '../JWT/jwtHandler';

declare global {
    namespace Express {
        interface Request {
            user?: object;
        }
    }
}

export function checkJWT(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Missing token' });
    const jwt = authHeader.split(' ')[1];
    if (!jwt) return res.status(401).json({ error: 'Missing token' });
    try {
        const payload = verify(jwt);
        req.user = payload as object;
        next();
    } catch {
        return res.status(401).json({ error: 'Invalid token' });
    }
}