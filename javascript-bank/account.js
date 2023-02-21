/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  } else {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }

};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  } else {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }

};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var transaction of this.transactions) {
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
  }
  return balance;
};
