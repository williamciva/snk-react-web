const exec = require('child_process').exec;
const verifyName = require('./utils/verifyName')

module.exports = (dashboard, port, verbose) => {
    var runPort;
    if (port !== undefined) {
        try {
            runPort = Number(port)
        } catch (error) {
            console.log(`It is impossible to convert port ${port} to a valid number.`)
        }
    } else {
        runPort = 3000
    }
    try {
        verifyName(dashboard);
        const name = dashboard.charAt(0).toUpperCase() + dashboard.slice(1);

        console.clear();
        console.log(`Running Dashboard ${name} on port ${runPort}`);
        execution = exec(`set DASHBOARD=${name} && webpack serve --port ${runPort} --stats-children --color`, { encoding: 'utf-8' });
        if (verbose) {
            execution.stdout.pipe(process.stdout); 
            execution.stderr.pipe(process.stderr);
        }
    } catch (error) {
        console.log(error)
    }
}