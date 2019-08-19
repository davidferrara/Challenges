/*
Problem statement:
Create a code that allows people to learn about exponents.
The task is to write a code which takes an integer number as an input and returns the values ranging from that of 2(two) raised to power 0(zero) to 2(two) raised to power n(the number specified in input)

Input:
Input contains the number 'n' for which all the values are returned from power of 2 from 0 to n.

Output:
Output contains the values ranging from 2(two) raised to power 0(zero) to 2(two) raised to power n(input) separated by a comma.
Note: For testcases with negative number as input, 2 raise to power 0 will be considered as 1.0 instead of 1 whereas for other negative powers the trailing zeros in output will be truncated like 0.50 is 0.5 , 0.25 is 0.25, 0.1250 is 0.125

Constraint:
-1000 ≤ n ≤ 1000

Sample Input:
5

Sample Output:
1,2,4,8,16,32
*/

function main() {
    var n = parseInt(readLine());
    var answer = [];

    if (n >= 0) {
        for (let i = 0; i <= n; i++) {
            answer.push(Math.pow(2, i));
        }
    } else {
        var x = 1;
        answer.push(x.toFixed(1));
        for (let i = -1; i >= n; i--) {
            answer.push(Math.pow(2, i));
        }
    }
    console.log(answer.toString());
}