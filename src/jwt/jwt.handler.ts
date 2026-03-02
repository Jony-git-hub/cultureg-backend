import 'dotenv/config';
import jsonwebtoken, { type SignOptions, type VerifyOptions } from 'jsonwebtoken';


export const sign = (payload: object, options?: SignOptions) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET!, options);
};

export const verify = (jwt: string, options: VerifyOptions = {}) => {
    return jsonwebtoken.verify(jwt, process.env.JWT_SECRET!, options);
};