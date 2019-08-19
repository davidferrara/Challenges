/*
Problem statement:
This problem requires you to create a output string from input string such that for every character in input string, there are three same characters in output string.

Input:
First line contains N, the number of letters in the string.
The next line contains the string.

Output:
Print the output_string.

Constraint:
1 ≤ N ≤ 20

Sample Input:
5
Hello

Sample Output:
HHHeeellllllooo
*/

//Read the test case file
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('threes-company/test.txt'),
    output: process.stdout,
    terminal: false
});

process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

rl.on('line', function(data) {
    console.log(data);
    input_stdin += data + "\n";
});

rl.on('close', function() {
    input_stdin_array = input_stdin.split("\n");
    input_stdin_array.pop();
    main();
    process.exit(0);
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

//The program
function main() {
    var size = parseInt(readLine());
    var str = readLine();
    var str_array = str.split("");
    var result = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < 3; j++) {
            result += str_array[i];
        }
    }
    console.log(result);
}