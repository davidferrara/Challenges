/*
Problem statement:
You will be given a single string and two positive integers denoting indices. You need to change the case of the characters at those indices,i.e change uppercase to lowercase and lowercase to uppercase. It is guaranteed that all characters in the string are alphabets.

Input:
The first line contains N, the length of string.
The next line contains a single string.
Two integers, x and y, in next line separated by space.

Output:
Print the string after altering the case of characters at those indices

Constraint:
1 ≤ string.length ≤ 40
0 ≤ x,y ≤ string.length

Sample Input:
6
Dcoder
0 3

Sample Output:
dcoDer
*/

function main(n, str, in1, in2) {
    var result = "";

    for (let i = 0; i < n; i++) {
        if (i == in1 || i == in2) {
            if (isUpper(str.charAt(i))) {
                result += str.charAt(i).toLowerCase();
            } else {
                result += str.charAt(i).toUpperCase();
            }
        } else {
            result += str[i];
        }
    }
    return result;
}

function isUpper(letter) {
    var result = false;

    if ((letter.charCodeAt(0) >= 065) &&
        (letter.charCodeAt(0) <= 090)) {
        result = true;
    }
    return result;
}

module.exports = {
    main: main,
    isUpper: isUpper
}