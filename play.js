const { connect } = require('./client');
console.log('Connecting ...');

const handleUserInput = function(input){
  if (input === '\u0003') {
    process.stdout.write('EXIT');
    process.exit();
  }
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

setupInput();
// connect();