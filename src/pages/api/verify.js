// pages/api/verify.js
import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const token = req.cookies?.token;
  if (!token) return res.status(401).end();

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ ok: true });
  } catch {
    res.status(401).end();
  }
}
