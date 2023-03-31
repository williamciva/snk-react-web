const fs = require('fs');
const addDashboard = require('./addDashboard');
const buildDashboard = require('./buildDashboard');
const createApp = require('./createApp');
const startDashboard = require('./startDashboard');
const args = require('minimist')(process.argv.slice(2),
    {
        alias: {
            h: 'help',
            c: 'create',
            a: 'add',
            b: 'build',
            r: 'remote-server',
            s: 'start',
        }
    });

(() => {
    const help = args.help;
    const create = args.create;
    const add = args.add;
    const build = args.build;
    const remoteServer = args.r
    const start = args.start;
    
    if (create !== undefined) {
        return createApp(create);
    }

    if (add !== undefined){
        return addDashboard(add);
    }

    if (build !== undefined) {
        return buildDashboard(build, remoteServer);
    }

    if (start !== undefined){
        return startDashboard(start);
    }
})()
