// 1. Deposit some money
// 2. Number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. Give user award if won else take bet
// 7. Play again

// GH₵

// 1. Deposit some money
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

// 2. Number of lines to bet on
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numOfLines = parseFloat(lines);

    if (isNaN(numOfLines) || numOfLines <= 0 || numOfLines > 3) {
      console.log("Invalid number of lines, try again");
    } else {
      return numOfLines;
    }
  }
};

const depositAmount = deposit();
console.log(`Deposited Amount GH₵${depositAmount}.00`);

const NumberOfLines = getNumberOfLines();
console.log(`Bet Lines: ${NumberOfLines}`);
