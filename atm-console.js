let balance = 5000;
let lives = 3;
let points = 0;
let transactions = [];

function showMenu() {
  console.log(`\n--- ATM MENU ---`);
  console.log(`1. Check Balance`);
  console.log(`2. Withdraw ₱18 fee`);
  console.log(`3. Deposit`);
  console.log(`4. Show Transaction History`);
  console.log(`5. Convert Points 500pts = ₱100`);
  console.log(`6. Exit`);
}

function checkBalance() {
  console.log(`\nYour current balance: ₱${balance.toFixed(2)}`);
  console.log(`Lives: ${lives} | Points: ${points}`);
}

function deposit() {
  try {
    let amount = Number(prompt(`Enter amount to deposit: `));
    if (isNaN(amount) || amount <= 0) {
      throw `Invalid amount. Must be positive number.`;
    }
    
    balance = balance + amount;
    let earnedPoints = Math.floor(amount / 100);
    points += earnedPoints;
    
    let exactAmount = Math.round(amount * 100) / 100;
    transactions.push(`Deposit: +₱${exactAmount.toFixed(2)} | +${earnedPoints} pts`);
    
    console.log(`Deposit successful! +${earnedPoints} points earned`);
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
    
    let fee = 18;
    let totalDeduct = amount + fee;
    if (totalDeduct > balance) {
      throw `Not enough balance for withdrawal + fee ₱${fee}.`;
    }
    
    balance = balance - totalDeduct;
    points += 25;
    
    let exactAmount = Math.round(amount * 100) / 100;
    transactions.push(`Withdraw: -₱${exactAmount.toFixed(2)} Fee: ₱${fee} | +25 pts`);
    
    console.log(`Withdraw successful! Fee: ₱${fee} | +25 points earned`);
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
  console.log(`Total transactions: ${transactions.length}`);
}

function convertPoints() {
  let reward = Math.floor(points / 500) * 100;
  if (reward > 0) {
    balance = balance + reward;
    points = points % 500;
    transactions.push(`Points Converted: +₱${reward}`);
    console.log(`\nReward Claimed! ₱${reward} added to balance!`);
    console.log(`Remaining points: ${points}`);
    checkBalance();
  } else {
    console.log(`\nNot enough points. Need 500 points = ₱100. Current: ${points} points`);
  }
}

function gameOver() {
  console.log(`\n=== GAME OVER ===`);
  console.log(`Developed by: Kendrew`);
  console.log(`Final Balance: ₱${balance.toFixed(2)}`);
  console.log(`Final Points: ${points}`);
  console.log(`Total Transactions: ${transactions.length}`);
  console.log(`Thanks for playing!`);
}

// Game Start
console.log(`Welcome to ATM Console!`);
console.log(`You start with ₱5000, 3 lives, and 0 points.`);
checkBalance();

let choice = 0;
while (lives > 0) {
  showMenu();
  choice = Number(prompt(`Enter your choice 1-6: `));
  
  switch(choice) {
    case 1: 
      checkBalance(); 
      break;
    case 2: 
      withdraw(); 
      break;
    case 3: 
      deposit(); 
      break;
    case 4: 
      showHistory(); 
      break;
    case 5: 
      convertPoints(); 
      break;
    case 6: 
      console.log(`You chose to exit.`);
      lives = 0; 
      break;
    default: 
      console.log(`Invalid choice.`);
      lives = lives - 1;
      console.log(`You lost 1 life. Lives left: ${lives}`);
  }
  
  if (lives === 0) {
    console.log(`\nNo lives left!`);
  }
}

gameOver();