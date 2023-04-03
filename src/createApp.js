const fs = require('fs');
const path = require('path');
const pkg = require('./models/package.json')
const execSync = require('child_process').execSync;

const createPaths = (name) => {
    try {
        fs.mkdirSync('./src');
        fs.mkdirSync('./src/dashboards')
    } catch (error) {
        if (String(error.message).substring(0, String(error.message).indexOf(':')) === 'EEXIST') {
            return
        } else {
            throw new Error(`Could not create project ${name} due to unknown errors\n${error}`);
        }
    }
}

module.exports = (create) => {
    try {
        if (!String(create).indexOf(' ') >= 0) {
            createPaths(create);

            const webpackConfig = fs.readFileSync(path.join(__dirname, './models/webpack.config.js'));
            fs.writeFileSync('./webpack.config.js', webpackConfig.toString());

            const helpFile = fs.readFileSync(path.join(__dirname, './models/help.js'));
            fs.writeFileSync('./help.js', helpFile.toString());

            const tsconf =  fs.readFileSync(path.join(__dirname,  './models/tsconfig.json'));
            fs.writeFileSync('./tsconfig.json', tsconf.toString());

            pkg.name = String(create).toLowerCase();
            fs.writeFileSync('./package.json', String(JSON.stringify(pkg)));

            console.log(execSync('npm i', { encoding: 'utf-8' }));
        }
        else {
            throw new Error(`Could not create project ${create} because the name given is not in the standard for NPM packages.`);
        }
    } catch (error) {
        console.log(error);
    }
}

