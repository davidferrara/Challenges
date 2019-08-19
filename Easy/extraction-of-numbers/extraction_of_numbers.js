/*
Problem statement:
Ron is schizophrenic and sees random digits hidden in words. He thinks it means something and someone is trying to secretly communicate with him. He wants to extract those digits from the words and see if they form a message. Harry really wants to help him but couldn't think of a way. But, Harry finally realized that if he somehow helps Ron in extracting those digits, Ron will finally realize that they don't mean anything and are just his delusions. He asked Ron to write down all the words that he sees. Help Harry by extracting the digits from these words.

Input:
First line contains N, the number of words.
Next line contains N space-separated words.

Output:
Print the all the extracted digits separated by a space.

Constraint:
1 ≤ N ≤ 50
It is guaranteed that at least one digit will be present in the entire input.

Sample Input:
3
1 L0v3 Dcoder

Sample Output:
1 0 3
*/

function main(n, str) {
    var charCode = null;
    var answer = "";

    for (let i = 0; i < str.length; i++) {
        charCode = str.charAt(i).charCodeAt(0);
        if ((charCode >= 48) && (charCode <= 57)) {
            answer = answer.concat(str.charAt(i), " ");
        }
    }
    return answer;
}

module.exports = {
    main: main
};