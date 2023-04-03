# snk-react-web

This tool aims to create a React Web environment with build and development support for the Sankhya ERP Dashboard Builder.

***This application is not linked to the company Sankhya Gestão de Negócios.***

### 🐱‍👤 **Github:** [https://github.com/williamciva/snk-react-web](https://github.com/williamciva/snk-react-web)



## 🤯 Introduction

From this documentation it will be possible to create a new snk-react-web project, create the first component and build it. You can run it in **production** or **development**.


### **📋** Prerequisites

To carry out the project, you will need to have the following tools installed on your machine:

- [Node JS](https://nodejs.org/en/download)



## 🚀 Get Starting

Create a folder to allocate your project, after, run npx command.

```bash
npx snk-react-web
```

Press enter when the message "Ok to proceed? (y)”

Here you can see some of the commands available through the library.

Now run the necessary commands to create a new snk-react-web project.

```bash
npx snk-react-web --create nameOfProject
```

Look how easy it is, the project has already been created, and now we can access some scripts that were added for us in package.json. For that run:

```bash
npm run help
```

The main scripts needed for your project will be shown.

### 💻 Create new Dashboard

Well, let's create a new dashboard by running the command:

```bash
npm run add:dashboard nameOfDashboard
```

A folder will be created with the name you chose for your dashboard, located in the path "./src/dashboards/nameOfDashboard”. In this folder there will be an HTML file, with CSS and a TSX where you can program your dash as needed.

### **Attention: When creating a new project or a new dashboard, make sure that the name does not have special characters.**



## 🏃🏻‍♂️ Running

### 🏳 Development

In the development environment, run the command followed by the name of your dashboard.

```bash
npm start:dev nameOfDashboard
```

The project is running under port 3000, in case of problems, just pass the argument for changing the port followed by the port number, as in the example below:

```bash
npm start:dev nameOfDashboard -- --port 5000
```

### 🔥 Production

In production mode, a folder will be generated with the files used and a zip that can be imported into ERP Sankhya through the HTML5 component. For that run:

```bash
npm run build:sankhya nameOfDashboard
```

A folder with the path "./build/NameOfDashboard" will be added.


## 🎇 Final considerations.

This library makes an intermediary between the code executed with React making build and executions that facilitate the development of dashboard in ERP Sankhya. However, it is good to note that this project does NOT have connections with the company that developed the ERP, being a project maintained only by open source. Any and all bugs or suggestions found can be directed to the Issues section of github.

## ⚙ Tools Used

### Production

- [archiver](https://react.dev) - Make a zip folder.
- [minimist](https://react.dev) - Optimist's argument.

### Development

- [@types/react](https://react.dev) - The library for web and native user interfaces with suport of TS.
- [@types/react-dom](https://react.dev) - The library for web and native user interfaces with suport of TS.
- [css-loader](https://webpack.js.org/loaders/css-loader/) - Upload CSS files to webpack.
- [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/) - Upload HTML files to webpack.
- [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin) - This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
- [react](https://react.dev) - The library for web and native user interfaces.
- [react-dom](https://react.dev) - Manipulation of dom used for React aplication.
- [ts-loader](https://www.npmjs.com/package/ts-loader) - TypeScript loader for webpack.
- [typescript](https://www.typescriptlang.org) - TS development..
- [webpack](https://webpack.js.org) - Module wrapper.
- [webpack-cli](webpack-cli) - Command Line Interface for webpack.
- [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) - Development server for webpack.

## 💪🏻 Contributions

- [williamciva](https://github.com/williamciva)

## 📃 Licença

- [MIT License](https://github.com/williamciva/snk-react-web/blob/main/LICENSE)
