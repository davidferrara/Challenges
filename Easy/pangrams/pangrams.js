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
  var n = parseInt(readLine()); //string length
  var str = readLine(); //the string
  var strArr = str.split("");
  var indices = readLine(); //the indices
  var indicesArr = indices.split(" ");
  var intArr = [];
  var answer ="";
  
  for(let i = 0; i < indicesArr.length; i++) {
  	intArr.push(parseInt(indicesArr[i]));
  }
  
  for(let i = 0; i < n; i++) {
  	if(i == intArr[0]){
  		if(isUpper(str.charAt(intArr[0]))) {
  			strArr[i] = str.charAt(intArr[0]).toLowerCase();
  		} else {
  			strArr[i] = str.charAt(intArr[0]).toUpperCase();
  		}
  	}
  	if(i == intArr[1]){
  		if(isUpper(str.charAt(intArr[1]))) {
  			strArr[i] = str.charAt(intArr[1]).toLowerCase();
  		} else {
  			strArr[i] = str.charAt(intArr[1]).toUpperCase();
  		}
  	}
  }
  
  for(let i = 0; i < strArr.length; i++) {
  	answer = answer.concat(strArr[i]);
  }
  
  console.log(answer);
}

function isUpper(letter) {
	var result = false;
	
	if((letter.charCodeAt(0) > 065)&&
		(letter.charCodeAt(0) < 090)) {
		result = true;
	}
	return result;
}
    