// 1. Deposit some money
// 2. Number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. Give user award if won else take bet
// 7. Play again

// GH₵

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a Deposit Amount: ");
    const numDepositAmount = parseFloat(depositAmount);

    if (isNaN(numDepositAmount) || numDepositAmount <= 0) {
      console.log("Invalid deposit, try again");
    } else {
      return numDepositAmount;
    }
  }
};

const depositAmount = deposit();
Number(depositAmount);
console.log(`Deposited Amount GH₵${depositAmount}.00`);
