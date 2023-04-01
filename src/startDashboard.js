const execSync = require('child_process').exec;

module.exports = (dashboard, port, verbose) => {
    var runPort ;
    if(port !== undefined){
        try {
            runPort = Number(port)
        } catch (error) {
            console.log(`It is impossible to convert port ${port} to a valid number.`)
        }
    }else{
        runPort = 3000
    }
    try {
        console.clear();
        console.log(`Running Dashboard ${dashboard} on port ${runPort}`);
        execution = execSync(`set DASHBOARD=${dashboard} && webpack serve --port ${runPort} --stats-children --color`, { encoding: 'utf-8' });
        verbose ? execution.stdout.pipe(process.stdout) : null;
    } catch (error) {
        console.log(error)
    }
}