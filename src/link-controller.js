const linker = require('./linker');

let baseUrl;
let baseUrlLen;

module.exports = {
    handleVisitor: async (req, res) => {
        const longLink = req.params.link;
        const shortLinkOrErr = await linker.resolve(longLink);
        
        console.log("Resolved '%s'", shortLinkOrErr.shortLink);
        res.status(200).send(shortLinkOrErr.shortLink);
        // res.redirect(shortLinkOrErr.shortLink);

        shortLinkOrErr.visitorCount += 1;
        shortLinkOrErr.save();
        console.log("Updated viewCount");
    },
    handleCreation: async (req, res) => {
        const shortLink = req.body.link;
        const longLinkOrErr = await linker.create(shortLink);
        
        console.log("Created '%s'", shortLink);
        res.status(200).send({"longLink": longLinkOrErr.longLink});
    },
    init: (data) => {
        baseUrl = data.baseUrl;
        baseUrlLen = baseUrl.length;
        linker.config({baseUrlLen});
    },
};