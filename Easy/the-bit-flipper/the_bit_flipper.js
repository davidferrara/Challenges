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
  var n = readLine().split("");
  var result = "";
  for(let i = 0; i < n.length; i++) {
  	if(n[i] == 1) {
  		result += 0;
  	} else {
  		result += 1;
  	}
  }
  console.log(result);
}