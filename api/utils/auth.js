const jwt = require('./jwt');
const { authCookieName } = require('../app-config');
const {
    userModel,
    tokenBlacklistModel
} = require('../models');

function auth(redirectUnauthenticated = true) {
    return function (req, res, next) {
        const token = req.cookies[authCookieName]
        if (token) {
            Promise.all([
                jwt.verifyToken(token),
                tokenBlacklistModel.findOne({ token })
            ])
                .then(([data, blacklistedToken]) => {
                    if (blacklistedToken) {
                        return Promise.reject(new Error('blacklisted token'));
                    }
                    userModel.findById(data.id)
                        .then(user => {
                            req.user = user;
                            req.isLogged = true;
                            next();
                        })
                })
                .catch(err => {
                    if (!redirectUnauthenticated) {
                        next();
                        return;
                    }
                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).json({ error: "Unauthorized" });
                        return;
                    }
                    next(err);
                });
        } else {
            res.status(401).json({ error: "Unauthorized" });
        }
    }
}

module.exports = auth;
