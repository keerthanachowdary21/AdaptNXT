const jwt = require('jsonwebtoken');

module.exports = (role = null) => {
  return (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access Denied');

    try {
      const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
      req.user = verified;
      if (role && req.user.role !== role) return res.status(403).send('Access Denied');
      next();
    } catch (err) {
      res.status(400).send('Invalid Token');
    }
  };
};