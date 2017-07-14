var prompt = require("promt-sync")();

var balance = 1000
while (balance > 0){
    prompt("How much do you want to spend?");
        balance = balance - spent;
        console.log("Your balance is" + balance)
}