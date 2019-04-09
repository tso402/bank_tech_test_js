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
  var depositDate = new Date('10-01-2012')
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
  var withdrawlDate = new Date('14-01-2012')
  bank.withdraw(withdrawlAmount,withdrawlDate);
  expect(bank.statement[0].date).toEqual(withdrawlDate)
})













})