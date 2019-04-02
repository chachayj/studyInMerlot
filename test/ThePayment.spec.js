const assert = require('assert');
const ThePayment = require('../src/ThePayment');
console.log(ThePayment);

import {describe} from 'mocha';
import {expect} from 'chai';


describe('지불한 돈의 개수.', () => {

  const thePayment = new ThePayment();

  it('5원 단위의 돈의 종류로 3200원 지불할시', () => {
    let result = thePayment.execute(5, 3200);
    expect(result).to.be.equal(72);
  });

  it('10원 단위의 돈의 종류로 4200원 지불할시', () => {
    let result = thePayment.execute(10, 4200);
    expect(result).to.be.equal(47);
  });

  it('15원 단위의 돈의 종류로 5321원 지불할시', () => {
    let result = thePayment.execute(15, 5321);
    expect(result).to.be.equal(51);
  });

  it('25원 단위의 돈의 종류로 3200원 지불할시', () => {
    let result = thePayment.execute(25, 3200);
    expect(result).to.be.equal(15);
  });

  it('50원 단위의 돈의 종류로 10000원 지불할시', () => {
    let result = thePayment.execute(50, 10000);
    expect(result).to.be.equal(23);
  });


});

