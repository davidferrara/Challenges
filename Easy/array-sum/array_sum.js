/*
Problem statement:
You are given an integer array and you have to find the sum of the elements of the array and find the remainder when the sum is divided by the largest number of the array.

Input:
First line contains N, the number of elements. Next line contains N space separated integers (elements of the array).

Output:
Print the remainder when sum is divided by the maximum element.

Constraint:
1 ≤ n ≤ 100
0 ≤ A[i] ≤ 1000

Sample Input:
5
1 2 3 4 5

Sample Output:
0
*/

function main(n, str) {
    var strArr = str.split(" ");
    var intArr = [];

    for (let i = 0; i < strArr.length; i++) {
        intArr.push(parseInt(strArr[i]));
    }

    var max = getMax(intArr);
    var answer = calc(intArr, max);
    return answer;
}

function getMax(array) {
    var result = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }
    return result;
}

function calc(array, x) {
    var result = 0;
    var sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    result = sum % x;

    return result;
}

module.exports = {
    main: main,
    getMax: getMax,
    calc: calc
}