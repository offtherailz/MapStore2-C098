const path = require("path");

const themeEntries = require('./MapStore2/themes.js').themeEntries;
const extractThemesPlugin = require('./MapStore2/themes.js').extractThemesPlugin;

module.exports = require('./MapStore2/buildConfig')(
    {
        'MapStore2-C098': path.join(__dirname, "js", "app"),
        'MapStore2-C098-embedded': path.join(__dirname, "MapStore2", "web", "client", "product", "embedded"),
        'MapStore2-C098-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api")
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    extractThemesPlugin,
    false,
    "/dist/",
    '.MapStore2-C098'
);
