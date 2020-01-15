// Stores the active TCP connection object.
let connection;

const handleUserInput = function(input){
  if (input === '\u0003') {
    process.stdout.write('EXIT\n');
    process.exit();
  } else if (input === "w") {
    connection.write('Move: up');
  } else if (input === 'a') {
    connection.write('Move: left');
  } else if (input === 's') {
    connection.write('Move: down');
  } else if (input === 'd') {
    connection.write('Move: right');
  } else if (input === 'h') {
    connection.write('Say: hello');
  } else if (input === 'j') {
    connection.write("Say: :p")
  }
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = { setupInput };