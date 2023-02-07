import jwt, { SignOptions } from 'jsonwebtoken';

const TOKEN_SECRET = process.env.JWT_SECRET || 'secret';

export function createTokenJWT(body: number) {
  const config: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  const payload = {
    id: body,
  };

  const token = jwt.sign(payload, TOKEN_SECRET, config);
  return token;
}

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, TOKEN_SECRET);
  } catch (e) {
    return e;
  }
}; 