if (!process.env.NODE_ENV) process.env.NODE_ENV = "test";

module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: ["mocha", "chai", "browserify"],
        files: [
            "node_modules/babel-polyfill/dist/polyfill.js",
            "lib/*.js",
            "test/*.js"
        ],
        preprocessors: {
            "test/*.js": [ "browserify" ],
            "lib/*.js": [ "browserify" ]
        },
        reporters: ["progress", "coverage"],
        coverageReporter: {
            dir: "coverage/",
            reporters: [
                { type: "text-summary" },
                { type: "html" }
            ]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["Chrome"],
        singleRun: true,
        concurrency: Infinity
    });
};