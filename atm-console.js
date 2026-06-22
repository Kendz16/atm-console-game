
let balance = 5000;
let lives = 3;
let transactions = [];

function showMenu() {
    console.log(`\n--- ATM MENU ---`);
    console.log(`1. Check Balance`);
     console.log(`2. Withdraw`);
    console.log(`3. Deposit`);
    console.log(`4. Show Transaction History`);
    console.log(`5. Exit`);
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

function withdraw() {
    try {
        let amount = Number(prompt(`Enter amount to withdraw: `));
        
        if (isNaN(amount) || amount <= 0) {
            throw `Invalid amount. Must be positive number.`;
        }
        
        let validWithdrawals = [amount].filter(function(a) {
            return a <= balance;
        });
        
        if (validWithdrawals.length === 0) {
            throw `Not enough balance.`;
        }
        
        let fee = 18;
        let totalDeduct = amount + fee;
        
        if (totalDeduct > balance) {
            throw `Not enough balance for withdrawal + fee ₱18.`;
        }
        
        balance = balance - totalDeduct;
        let exactAmount = Math.round(amount * 100) / 100;
        transactions.push(`Withdraw: -₱${exactAmount} Fee: ₱${fee}`);
        
        console.log(`Withdraw successful! Fee: ₱${fee}`);
        checkBalance();
    } catch (error) {
        console.log(`Error: ${error}`);
        lives = lives - 1;
        console.log(`You lost 1 life. Lives left: ${lives}`);
    }
}

function showHistory() {
    console.log(`\n=== TRANSACTION HISTORY ===`);
    if (transactions.length === 0) {
        console.log(`No transactions yet.`);
    } else {
        transactions.forEach((t, i) => {
            console.log(`${i + 1}. ${t}`);
        });
    }
}

console.log(`Welcome to ATM Console!`); // lets stick to our approve title!
checkBalance();

let choice = 0;
while (lives > 0) {
    showMenu();
    choice = Number(prompt(`Enter your choice 1-5: `));
    
     switch(choice) {
        case 1: checkBalance(); break;
        case 2: withdraw(); break;
        case 3: deposit(); break;
        case 4: showHistory(); break;
        case 5: lives = 0; break;
        default: 
            console.log(`Invalid choice.`);
            lives = lives - 1;
    }
}
console.log(`Thanks for playing!`);