function Bank(){
  this.balance = 0
  this.statement = []
}

Bank.prototype.deposit = function (depositAmount = null, depositDate = new Date()) {
  this.balance += depositAmount
  this.statement.unshift({date: depositDate, credit: depositAmount, debit: null, balance: this.balance})
}

Bank.prototype.withdraw = function (withdrawlAmount = null, withdrawlDate = new Date()) {
  this.balance -= withdrawlAmount;
  this.statement.unshift({date: withdrawlDate, credit: null, debit: withdrawlAmount, balance: this.balance})
} 

Bank.prototype.printStatement = function(){
  console.log('date || credit || debit || balance')
  this.statement.forEach(function(entry){
    console.log(entry['date'] + ' || ' + entry['credit'] + ' || ' + entry['debit'] + ' || ' + entry['balance'])
  })
}

module.exports = Bank;