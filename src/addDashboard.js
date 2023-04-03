const fs = require('fs');
const path = require('path');
const verifyName = require('./utils/verifyName')

const createPath = (name) => {
    try {
        fs.mkdirSync(`./src/dashboards/${name}`);
    } catch (error) {
        if (String(error.message).substring(0, String(error.message).indexOf(':')) === 'EEXIST') {
            return
        } else {
            throw new Error(`Could not create dashboard ${name} as the NPM project is incorrectly configured. Run "npx snk-react-web -c <name-project>" to start a new project.\n${error}`);
        }
    }
}


const createFiles = (name) => {
    try {
        const htmlDashboard = fs.readFileSync(path.join(__dirname, './models/dashboard/dashboard.html'));
        const html = htmlDashboard.toString().replaceAll('${name}', name);
        fs.writeFileSync(`./src/dashboards/${name}/${name}.html`, html)

        const cssDashboard = fs.readFileSync(path.join(__dirname, './models/dashboard/dashboard.css'));
        fs.writeFileSync(`./src/dashboards/${name}/${name}.css`, cssDashboard)

        const tsxDashboard = fs.readFileSync(path.join(__dirname, './models/dashboard/dashboard.tsx'));
        const tsx = tsxDashboard.toString().replaceAll('dashboard', name);
        fs.writeFileSync(`./src/dashboards/${name}/${name}.tsx`, tsx)
    } catch (error) {
        console.log(error)
    }

}

module.exports = (add) => {
    try {
        verifyName(add);
        const name = add.charAt(0).toUpperCase() + add.slice(1);
        createPath(name);
        createFiles(name);
    } catch (error) {
        console.log(error);
    }

}