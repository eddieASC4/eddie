//Generates a random number between 0 and one your choosing

function rand(num) {
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    console.log(randInt);
    return randInt;
}

rand(61818)