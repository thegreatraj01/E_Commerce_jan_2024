import jwt from 'jsonwebtoken';
import User from '../models/usermode.js';

const handleUnauthorized = (res, message) => {
  return res.status(401).json({ message: `Unauthorized - ${message}` });
};

const protect = async (req, res, next) => {
  const tokenHeader = req.header('Authorization');

  if (!tokenHeader) {
    return handleUnauthorized(res, 'No token provided');
  }

  // Remove the "Bearer " prefix
  const token = tokenHeader.replace('Bearer', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    req.user = await User.findById(decoded.userId).select('-password');
    next();
  } catch (error) {
    return handleUnauthorized(res, 'Invalid token');
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return handleUnauthorized(res, 'You are not an admin');
  }
};

export { protect, admin };
