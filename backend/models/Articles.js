const { Schema, model, SchemaTypes } = require('mongoose');

const articlesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createDate: {
        type: Number,
        default: Date.now,
        required: true
    },
    image: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
}, { collection: 'articlesDB', versionKey: false , timestamps: true});
module.exports = new model('articles', articlesSchema);