const fs = require('fs');
const addDashboard = require('./addDashboard');
const buildDashboard = require('./buildDashboard');
const createApp = require('./createApp');
const startDashboard = require('./startDashboard');
const helper = require('./help');
const arguments = require('./args');
const args = require('minimist')(process.argv.slice(2),
    arguments);

(() => {
    const help = args.help;
    const create = args.create;
    const add = args.add;
    const build = args.build;
    const basePathUrl = args.p;
    const start = args.start;
    const port = args.port
    const verbose = args.verbose;

    if (helper !== undefined) {
        return helper();
    }

    if (create !== undefined) {
        return createApp(create);
    }

    if (add !== undefined) {
        return addDashboard(add);
    }

    if (build !== undefined) {
        return buildDashboard(build, basePathUrl, verbose);
    }

    if (start !== undefined) {
        return startDashboard(start, port, verbose);
    }

    return helper();
})()
