function Bank(){
  this.balance = 0
  this.statement = []
}

Bank.prototype.deposit = function (depositAmount = null, depositDate = new Date()) {
  this.balance += depositAmount
  this.statement.push({date: depositDate, credit: depositAmount, debit: null, balance: this.balance})
}

Bank.prototype.withdraw = function (withdrawlAmount = null, withdrawlDate = new Date()) {
  this.balance -= withdrawlAmount;
  this.statement.push({date: withdrawlDate, credit: null, debit: withdrawlAmount, balance: this.balance})
} 

module.exports = Bank;