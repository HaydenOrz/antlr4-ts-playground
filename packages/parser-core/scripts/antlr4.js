const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs')

const grammars = path.resolve(__dirname, '../src/grammar');
const output = path.resolve(__dirname, '../src/lib');

const entry = [
    'json',
    'calculator',
    'flinksql',
    'selectStatement'
];

entry.forEach((language) => {
    const dir = `${output}/${language}`
    const cmd = `rm -rf ${dir}/*`
    if(fs.existsSync(`${output}/${language}`)) {
        exec(cmd, (err) => {
            if (err) {
                console.error(`Remove ${language} output dir`, err);
            } else {
                console.log(`Remove ${language} output dir success.`);
            }
        })
    }
})

entry.forEach((language) => {
    const cmd = `
        antlr4ts
        -listener
        -visitor
        -o ${output}/${language}
        ${grammars}/${language}/*.g4 
    `.replace(/\n/g, '');
    console.log('cmd:', cmd);
    exec(cmd, (err) => {
        if (err) {
            console.error('Antlr4 build error: ' + language, err);
        } else {
            console.log(`Build ${language} success.`);
        }
    });
});