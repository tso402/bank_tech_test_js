'use-strict';

describe('Bank', function() {
var Bank = require('../src/Bank');
var bank;

  beforeEach(function(){
    bank = new Bank();
  })

it('should be able to deposit', function(){
  var depositAmount = 1000
  bank.deposit(depositAmount)
  expect(bank.balance).toEqual(depositAmount);
})

it('should be able to deposit with a date', function(){
  var depositAmount = 1000
  var depositDate = new Date('10-01-2012')
  bank.deposit(depositAmount,depositDate);
  expect(bank.statement[0].date).toEqual(depositDate)
})











})