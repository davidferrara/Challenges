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
  //console.log(str);
  var a = parseInt(str[0]);
  var m = parseInt(str[1]);
  var n = parseInt(str[2]);
  var d = parseInt(str[3]);
  var distLeft = (d - a);
  //console.log("distance left over: " + distLeft);
  var firstKil = (a * m);
  //console.log(firstKil);
  var secondKil = (n * distLeft);
  //console.log(secondKil);
  var total = (firstKil + secondKil);
  console.log(total);
}