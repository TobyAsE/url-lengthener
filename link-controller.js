const linker = require('./linker');

let baseUrl;
let baseUrlLen;

module.exports = {
    handleVisitor: (req, res) => {
        const longLink = req.params.link;
        const shortLink = linker.resolve(longLink);

        res.status(200).send("Hi :^)");
    },
    handleCreation: (req, res) => {
        const shortLink = req.body.link;
        const longLink = linker.create(shortLink);
        res.status(200).send({"longLink": longLink});
    },
    config: (data) => {
        baseUrl = data.baseUrl;
        baseUrlLen = baseUrl.length;
    }
}