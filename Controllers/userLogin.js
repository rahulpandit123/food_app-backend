const { userLogin, validate } = require('../models/userLogin');
const express = require('express');
// const routerLogin = express.Router();

routerLogin('', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exisits
    let userLogin = await User.findOne({ email: req.body.email });
    if (userLogin) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        userLogin = new userLogin({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await userLogin.save();
        res.send(userLogin);
    }
});

module.exports = router;
 
