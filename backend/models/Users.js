const { Schema, model } = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const usersSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    image: {
        type: String,
    }



}, { versionKey: false });
usersSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
module.exports = new model('users', usersSchema, 'usersDB');


