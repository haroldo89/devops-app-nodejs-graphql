module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/api/register', user.register);

    // auth a user
    app.post('/api/authenticate', user.login);
}