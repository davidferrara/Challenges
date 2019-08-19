/*
Problem statement:
Archie was given a homework by his teacher. He is given a fraction and he needs to write it in its reduced form. Archie is not good at Maths. Help Archie finish his homework.

Input:
2 integers separated by space denoting the numerator and denominator respectively.

Output:
Print the reduced form of the fraction

Constraint:
1 ≤ N ≤ D ≤ 1000

Sample Input:
20 40

Sample Output:
1 2
*/

function main(numer, denom) {
    var answer = "";
    var numerFactors = getFactors(numer).reverse();
    var denomFactors = getFactors(denom).reverse();

    var gcf = getGCF(numerFactors, denomFactors);

    numer = numer / gcf;
    denom = denom / gcf;

    answer = numer.toString() + " " + denom.toString();
    return answer;
}

function getFactors(x) {
    var result = [];

    for (let i = 1; i <= x; i++) {
        if ((x % i) == 0) {
            result.push(i);
        }
    }
    return result;
}

function getGCF(arr1, arr2) {
    var result = 1;

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            result = arr2[i];
            break;
        }
    }
    return result;
}

module.exports = {
    main: main,
    getFactors: getFactors,
    getGCF: getGCF
};