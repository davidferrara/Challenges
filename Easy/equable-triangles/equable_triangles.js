/*
Problem statement:
An Equable Triangle is a triangle which has its area equals to the sum of its sides. 
You are given with the sides of a triangle, your task is to write a code which will return 'True'. if the triangle is equable, otherwise 'False' without quotes.

Input:
First line of input will contain 'n' that is the number of test cases.
Next n lines of the input will contain the length of the sides of triangle separated by a space each.

Output:
The output will return 'True' if the triangle is equable, and 'False' otherwise.

Constraint:
Number of test cases = n and 0 < n < 100.
And the length of each side of triangle is 's', 0 < s < 10000.

Sample Input:
1
6 8 10

Sample Output:
True
*/

function main(a, b, c) {
    var result = false;
    var perimeter = a + b + c;
    var s = perimeter / 2;
    var area = Math.sqrt((s * (s - a) * (s - b) * (s - c)));

    if (perimeter == area) {
        result = true;
    } else {
        result = false;

    }
    return result;
}

module.exports = {
    main: main
}