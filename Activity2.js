//Lovely T. Torno
//BSIT 3B
//Activity 2

const uppercaseString = 'the quick brown fox';

const firstLetter = uppercaseString.split(" ");
for (var i = 0; i < firstLetter.length; i++) {
    firstLetter[i] = firstLetter[i].charAt(0).toUpperCase() + firstLetter[i].slice(1);
}

const uppercaseString2 = firstLetter.join(" ");
console.log(uppercaseString2);
