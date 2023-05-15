//PROBLEM: CHECK THE NUMBER WHEATHER IT IS PRIME OR NOT 
//PROBLEM: FIND THE PRIME NUMBERS FROM 2 TO 100
function checkPrime(Number) {
    var factor = "";
    for (var i = 1; i <= Number; i++) {
        if (Number % i == 0) {
            factor++
        }
    }
    if (factor == 2) {
        console.log("Prime",Number);
    }
    else {
        console.log("not prime",Number)
    }
}

for (var i = 2; i <= 100; i++){
    checkPrime(i);
}