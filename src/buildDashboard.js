const exec = require('child_process').exec;
const fs = require('fs');
var archiver = require('archiver');
const verifyName = require('./utils/verifyName')

const convertHTMLtoJSP = (dashboard) => {
    console.log('The option JSP is enable, converting the html to valid JSP Sankhya.')
    const htmlFile = fs.readFileSync(`./build/${dashboard}/index.html`);
    const tags = `<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="UTF-8" isELIgnored ="false"%><%@ page import="java.util.*" %><%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %><%@ taglib prefix="snk" uri="/WEB-INF/tld/sankhyaUtil.tld" %>`;
    const newHtmlFile = tags + htmlFile
    fs.writeFileSync(`./build/${dashboard}/index.jsp`, newHtmlFile);
}

const zipFolder = (nameFolder, nameFile) => {
    console.log('The option ZIP is enable, creating a zip from dashboard')

    var output = fs.createWriteStream(`./build/${nameFile}.zip`);
    var archive = archiver('zip');

    output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
    });

    archive.on('error', function (err) {
        throw err;
    });

    archive.pipe(output);

    archive.directory(`./build/${nameFolder}`, false);
}

module.exports = (dashboard, basePathUrl, verbose, jsp, zip) => {
    try {
        var base;
        if (basePathUrl !== undefined) {
            base = basePathUrl === true ? '${BASE_FOLDER}' : base = String(basePathUrl).replace(' ', '')
        } else {
            base = './'
        }
        verifyName(dashboard);
        const name = dashboard.charAt(0).toUpperCase() + dashboard.slice(1);

        console.clear();
        execution = exec(`set DASHBOARD=${name} && set PUBLIC_URL=${base} && webpack --mode development`, { encoding: 'utf-8' });
        if (verbose) {
            execution.stdout.pipe(process.stdout);
            execution.stderr.pipe(process.stderr);
        }

        execution.on('exit', (data) => {
            jsp ? convertHTMLtoJSP(name) : null;
            zip !== undefined ? zip ? zipFolder(name, name) : zipFolder(zip) : null
        })
    } catch (error) {
        console.log(error)
    }
}