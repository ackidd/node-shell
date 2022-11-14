// const pwd = require('./pwd');
// pwd();

const cat = require('./cat');
cat();

const done = (output) => {
  process.stdout.write('prompt > ');
  process.stdout.write('\nprompt > ');
};
