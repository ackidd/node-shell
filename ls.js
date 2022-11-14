const fs = require('fs');

module.exports = (done) => {

  //Output a prompt
  process.stdout.write('prompt > ');

  // The stdin 'data' event fires after a user types in a line
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline
      if (cmd === 'ls') {
        fs.readdir('./', 'utf8', (err, files) => {
          if (err) {
            throw err;
          } else {
            done(files.join('\n'));
          }
        });
      } else {
        process.stdout.write('You typed: ' + cmd);
      }

    // process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  });
  }

  // fs.readdir('./', 'utf8', (err, files) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     process.stdout.write(files.join('\n'));
  //     // process.stdout.write('prompt > ');
  //   }
  // });
