const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
	// Get token from header
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];
			const decoded = jwt.verify(token, config.get('jwtSecret'));
			req.user = decoded.user;
			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error('Not authorized, no token');
		}
	}
	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token');
	}
};
