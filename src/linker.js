const crypto = require("crypto");
const Link = require('./models/link');

let baseUrlLen;

module.exports = {
    create: async (resolvedLink) => {
        const neededBytes = (2048 - (baseUrlLen + "/link/".length)) / 2;
        const longLink = crypto.randomBytes(neededBytes).toString('hex');
        const newLink = new Link({
            longLink,
            shortLink: resolvedLink,
        });

        const returnVal={};

        // TODO: Errors?
        await newLink.save().then(() => {});
        returnVal.longLink = longLink;
        return returnVal;
    },    
    resolve: async (longLink) => {
        // TODO: Errors?
        const theOne = await Link.findOne({longLink}).exec();
        console.log(theOne);

        return theOne;
    },
    config: (data) => {
        baseUrlLen = data.baseUrlLen;
    },
};
