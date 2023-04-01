const args = require('./args')

const spaceBlank = (number) => {
    space = ' ';
    for (n = 1; n < number; n++) {
        space += ' '
    }
    return space;
}

module.exports = () => {
    console.log('Options:')
    for (i in args['alias']) {
        let msg = `--${i}, --${args['alias'][i]}`
        console.log(`${spaceBlank(3)}${msg}${spaceBlank(40-msg.length)}${args['help'][i]}`)
    }
}