
let balance = 5000;
let lives = 3;
let transactions = [];

function showMenu() {
    console.log(`\n--- ATM MENU ---`);
    console.log(`1. Check Balance`);
    console.log(`2. Deposit`);
    console.log(`3. Exit`);
}

function checkBalance() {
    console.log(`\nYour current balance: ₱${balance}`);
}

function deposit() {
    try {
        let amount = Number(prompt(`Enter amount to deposit: `));
        
        if (isNaN(amount) || amount <= 0) {
            throw `Invalid amount. Must be positive number.`;
        }
        
        balance = balance + amount;
        let exactAmount = Math.round(amount * 100) / 100;
        transactions.push(`Deposit: +₱${exactAmount}`);
        
        console.log(`Deposit successful!`);
        checkBalance();
    } catch (error) {
        console.log(`Error: ${error}`);
        lives = lives - 1;
        console.log(`You lost 1 life. Lives left: ${lives}`);
    }
}

console.log(`Welcome to ATM Console!`); // lets stick to our approve title!
checkBalance();

let choice = 0;
while (lives > 0) {
    showMenu();
    choice = Number(prompt(`Enter your choice 1-3: `));
    
     switch(choice) {
        case 1: checkBalance(); break;
        case 2: deposit(); break;
        case 3: lives = 0; break;
        default: 
            console.log(`Invalid choice.`);
            lives = lives - 1;
    }
}
console.log(`Thanks for playing!`);