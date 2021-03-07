const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema(
    {
        shortLink: {
            type: String,
            unique: false,
            required: true,
        },
        longLink: {
            type: String,
            unique: true,
            required: true,
        },
        visitorCount: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Link', linkSchema);