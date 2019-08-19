process.stdin.resume();
process.stdin.setEncoding('ascii');

// declare global variables
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

// standard input is stored into input_stdin
process.stdin.on('data', function (data) {
  input_stdin += data;
});

// standard input is done and stored into an array
// then main is called so that you can start processing your data
process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

// reads a line from the standard input array
function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  var str = readLine().split(" ");
  var x = parseInt(str[1]);
  var y = parseInt(str[2]);
  
  if(x > y) {
  	console.log("Alex");
  } else if (x == y) {
  	console.log("Draw");
  } else {
  	console.log("Ryan");
  }
}