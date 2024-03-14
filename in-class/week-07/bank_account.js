const bankAccount = {
  ownerName: 'John Smith',
  accountNumber: '1234567890',
  balance: 5000,

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposit successful! New balance is ${this.balance}.`);
    } else {
      console.log(`Deposit failed! Amount must be greater than zero.`);
    }
  },

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawal successful! New balance is ${this.balance}.`);
    } else if (amount > this.balance) {
      console.log(`Withdrawal failed! Insufficient funds.`);
    } else {
      console.log(`Withdrawal failed! Amount must be greater than zero.`);
    }
  },

  get currentBalance() { return this.balance; },

  // set setOwnerName(newName) { this.ownerName = newName; }
}

console.log(bankAccount.currentBalance);

// bankAccount.setOwnerName = "Oliver Hans";
bankAccount.ownerName = "Oliver Hans";
console.log(bankAccount.ownerName);