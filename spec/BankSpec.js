'use-strict';

describe('Bank', function() {
var Bank = require('../src/Bank');
var bank;

  beforeEach(function(){
    bank = new Bank();
    originalLogFunc = console.log; 
    console.log = jasmine.createSpy('log')
  })

  afterEach(function(){
    console.log = originalLogFunc; 
    originalLogFunc = undefined
  })

it('should be able to deposit', function(){
  var depositAmount = 1000
  bank.deposit(depositAmount)
  expect(bank.balance).toEqual(depositAmount);
})

it('should be able to deposit with a date', function(){
  var depositAmount = 1000
  var depositDate = '10/01/2012'
  bank.deposit(depositAmount,depositDate);
  expect(bank.statement[0].date).toEqual(depositDate)
})

it('should be able to withdraw', function(){
  var withdrawlAmount = 1000
  bank.withdraw(withdrawlAmount)
  expect(bank.balance).toEqual(-1000)
})

it('should be able to withdraw with a date', function(){
  var withdrawlAmount = 500
  var withdrawlDate = '14/01/2012'
  bank.withdraw(withdrawlAmount,withdrawlDate);
  expect(bank.statement[0].date).toEqual(withdrawlDate)
})

it('should be able to display a statement in the console', function(){
  var depositAmount = 1000
  var depositDate = '10/01/2012'
  expectedOutput = 'date || credit || debit || balance'
  expectedOutput2 = '10/01/2012 || 1000 || null || 1000'
  bank.deposit(depositAmount,depositDate);
  bank.printStatement();
  expect(console.log).toHaveBeenCalledWith(expectedOutput);
  expect(console.log).toHaveBeenCalledWith(expectedOutput2);
})

it('should pass a feature test of the requirements',function(){
  var depositAmount = 1000
  var depositDate = '10/01/2012'
  var depositAmount2 = 2000
  var depositDate2 = '13/01/2012'
  var withdrawlAmount = 500
  var withdrawlDate = '14/01/2012'
  bank.deposit(depositAmount,depositDate);
  bank.deposit(depositAmount2,depositDate2);
  bank.withdraw(withdrawlAmount,withdrawlDate);
  expectedOutput = 'date || credit || debit || balance'
  expectedOutput2 = '14/01/2012 || null || 500 || 2500'
  expectedOutput3 = '13/01/2012 || 2000 || null || 3000'
  expectedOutput4 = '10/01/2012 || 1000 || null || 1000'
  bank.printStatement();
  expect(console.log).toHaveBeenCalledWith(expectedOutput);
  expect(console.log).toHaveBeenCalledWith(expectedOutput2);
  expect(console.log).toHaveBeenCalledWith(expectedOutput3);
  expect(console.log).toHaveBeenCalledWith(expectedOutput4);
})











})