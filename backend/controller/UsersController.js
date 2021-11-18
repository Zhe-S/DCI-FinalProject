const userModel = require('../models/Users');
const cloudinary = require("cloudinary").v2;
const validator = require("email-validator");
const { validatePassword } = require('../util');
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');
const jwt = require('jsonwebtoken')

exports.getAllUsers = async (req, res, next) => {
    const allUsers = await userModel.find();
    res.send(allUsers);
}

exports.getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await userModel.findById(id);
        res.send(user);
    } catch (err) {

        next(err);
    }
}


exports.updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await userModel.findByIdAndUpdate(id, req.body);
        res.send('user updated');
    } catch (err) {
        res.status(500).send(err)
    }

}

exports.deleteUser = async (req, res, next) => {
    try {
        const deleteIdUser = await userModel.findByIdAndDelete(req.params.id);
        res.send('user deleted');
    } catch (err) {
        res.status(500).send(err)
    }
}

/*
register user
*/

exports.registerUser = async (req, res, next) => {
    const { image } = req.body;

    let userData = req.body;
    if (image) {
        const uploadResult = await cloudinary.uploader.upload(image)
        userData = { ...req.body, image: uploadResult.secure_url }
    }

    if (!validator.validate(req.body.email)) {
        res.send('Email war falsch');
        return;
    };

    const users = await userModel.find();
    for (user of users) {
        if (user.email === req.body.email) {
            res.send("es gibt schon den user oder die email");
            return;
        }
        if (`${user.firstName} ${user.lastName}` === `${req.body.firstName} ${req.body.lastName}`) {
            console.log(`${user.firstName} ${user.lastName}`)
            res.send("es gibt schon den user oder die username");
            return;
        }
    }


    if (validatePassword(req.body.password) === false) {
        res.send('das Passwort ist nicht valide');
        return;
    }
    userModel.register(userData, userData.password)
    let newUser = new userModel(userData)
    // newUser = await newUser.save()
    console.log(newUser)
    res.json(newUser)
}

// exports.logInUser = async (req, res, next) => {

//     const { email, password } = req.body;


//     const user = await userModel.findOne({ email });

//     if (!user) return res.send('email is false');
//     if (password !== user.password) return res.send('password is false');
//     return res.send('Login succeeded');

// }

exports.logInUser = async (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            if (err) return next(err);
            if (!user) return res.json({ error: 'The Email or password is invalid' }); // ?info=' + info
            req.logIn(user, { session: false }, function (err) {
                if (err) {
                    return next(err);
                }
                
                var token = jwt.sign({ id: user._id.toString(), image: user.image, email: user.email, firstName: user.firstName, lastName: user.lastName }, '88882bc9n5739025739rcuinoewhsrjksehfjksef');
                return res.json({ token });
            });
        })(req, res, next);
}