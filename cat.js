const fs = require('fs');

module.exports = function () {

  //Output a prompt
  process.stdout.write('prompt > ');

  // The stdin 'data' event fires after a user types in a line
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' '); //remove the newline
      if (cmd[1]) {
        fs.readFile(`./${cmd[1]}`, 'utf8', (err, data) => {
          if (err) {
            throw err;
          } else {
            process.stdout.write(data);
          }
        });
      } else {
        process.stdout.write('You typed: ' + cmd);
      }

    // process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  });
}
