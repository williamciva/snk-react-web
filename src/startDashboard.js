const execSync = require('child_process').execSync;

module.exports = (dashboard) => {
    try {
        console.log(execSync(`set DASHBOARD=${dashboard} && webpack serve --port 3000 --stats-children`, { encoding: 'utf-8' }));
    } catch (error) {
        console.log(error)
    }
}