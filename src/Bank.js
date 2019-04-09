function Bank(){
  this.balance = 0
  this.statement = []
}

Bank.prototype.deposit = function (depositAmount = null, depositDate = new Date()) {
  this.balance += depositAmount
  this.statement.push({date: depositDate, credit: depositAmount, debit: null, balance: this.balance})
}

module.exports = Bank;