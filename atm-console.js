
let balance = 5000;
let lives = 3;

function showMenu() {
    console.log(`\n=== ATM MENU ===`);
    console.log(`1. Check Balance`);
    console.log(`2. Exit`);
}

function checkBalance() {
    console.log(`\nYour current balance: ₱${balance}`);
}

console.log(`Welcome to ATM Console Game by Kendrew!`);
checkBalance();

let choice = 0;
while (lives > 0) {
    showMenu();
    choice = Number(prompt(`Enter your choice 1-2: `));
    
    if (choice === 1) {
        checkBalance();
    } else if (choice === 2) {
        break;
    } else {
        console.log(`Invalid choice.`);
    }
}
console.log(`Thanks for playing!`);