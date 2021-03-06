let baseUrlLen;

module.exports = {
    create: (resolvedLink) => {
        console.log("Creating '%s'", resolvedLink);
        return "Long Boogaloo!";
    },    
    resolve: (longLink) => {
        console.log("Resolving '%s'", longLink);
        return "Short Boogaloo!";
    },
    config: (data) => {
        baseUrlLen = data.baseUrlLen;
    }
}
