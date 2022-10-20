//Lovely T. Torno
//BSIT 3B

function alpha(str) {
    var alphabet = str.split("");
    alphabeticalOrder = alphabet.sort().join("");
    return alphabeticalOrder;
}
console.log(alpha("webmaster"));