const strng = 'the quick brown fox';

const arry = strng.split(" ");
for (var i = 0; i < arry.length; i++) {
    arry[i] = arry[i].charAt(0).toUpperCase() + arry[i].slice(1);
}

const strng2 = arry.join(" ");
console.log(strng2);
