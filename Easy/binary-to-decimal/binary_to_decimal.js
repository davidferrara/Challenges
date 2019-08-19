/*
Problem statement:
Write a code which converts a binary number (written as string) into a decimal number.

Input:
Input is a binary number.

Output:
The output is a decimal number.(interger value)

Constraint:
The binary number is non-negative and the resultant decimal number is an integer.

Sample Input:
101

Sample Output:
5
*/

function main(n) {
    n.split("");
    var arr = [];
    var answer = 0;

    for (let i = 0; i < n.length; i++) {
        arr.push(Math.pow(2, i));
    }
    arr.reverse();

    for (let i = 0; i < n.length; i++) {
        if (n[i] == 1) {
            answer += arr[i];
        }
    }
    return answer;
}

module.exports = {
    main: main
}