const tsConfiguration = require("./tsconfig");
const jestConfiguration = {
    testEnvironment: "node",
    coverageProvider: "v8",
    roots: [
        "./build/tests/",
    ],
    clearMocks: true,
    testMatch: [
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    moduleNameMapper: {},
};

Object.keys(tsConfiguration.compilerOptions.paths).forEach((key) => {
    let normalizedAlias;

    if (key.endsWith("/*")) {
        normalizedAlias = "^" + key.substr(0, key.length - 2) + "/(.*)";
    }
    else if (key.endsWith("*")) {
        normalizedAlias = "^" + key.substr(0, key.length - 1) + "(.*)";
    }
    else {
        normalizedAlias = "^" + key + "/(.*)";
    }

    for (const plainPath of tsConfiguration.compilerOptions.paths[key]) {
        const normalizedPath = plainPath.endsWith("/*") ? plainPath.substr(0, plainPath.length - 2) : plainPath;

        jestConfiguration.moduleNameMapper[normalizedAlias] = `${__dirname}/${tsConfiguration.compilerOptions.outDir}/${normalizedPath}/$1`;
    }
});

module.exports = jestConfiguration;
