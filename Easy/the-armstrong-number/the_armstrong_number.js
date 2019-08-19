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
  var n = parseInt(readLine());
  var nArr = n.toString().split("");
  var n1 = parseInt(nArr[0]);
  var n2 = parseInt(nArr[1]);
  var n3 = parseInt(nArr[2]);
  
  if(((Math.pow(n1, 3)) + (Math.pow(n2, 3)) +(Math.pow(n3, 3))) == n) {
  	console.log("YES");
  } else {
  	console.log("NO");
  }
}