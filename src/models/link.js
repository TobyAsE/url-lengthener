import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema(
    {
        shortLink: {
            type: String,
            unique: false,
            required: true
        },
        longLink: {
            type: String,
            unique: true,
            required: true
        },
        visitorCount: {
            type: Number,
            required: false
        },
    },
    { timestamps: true }
);

const Link = mongoose.model('Link', linkSchema);

export default Link;