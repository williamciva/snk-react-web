const execSync = require('child_process').exec;

module.exports = (dashboard, basePathUrl, verbose) => {
    try {
        var base;
        if (basePathUrl !== undefined) {
            base = basePathUrl === true ? '${BASE_FOLDER}' : base = String(basePathUrl).replace(' ', '')
        } else {
            base = './'
        }
        console.clear();
        execution = console.log(execSync(`set NODE_ENV=production && set DASHBOARD=${dashboard} && set PUBLIC_URL=${base} && webpack`, { encoding: 'utf-8' }));
        verbose ? execution.stdout.pipe(process.stdout) : null;
    } catch (error) {
        console.log(error)
    }
}