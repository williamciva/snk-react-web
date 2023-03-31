const execSync = require('child_process').execSync;

module.exports = (dashboard) => {
    try {
        console.log(execSync(`set DASHBOARD=${dashboard} && webpack`, { encoding: 'utf-8' }));
    } catch (error) {
        console.log(error)
    }
}