
const MakeOne = require('../src/MakeOne');
console.log(MakeOne);

import {describe} from 'mocha';
import {expect} from 'chai';

describe('정수를 입력 받아 1로 만드는 최소 연산횟수를 구하라', () => {

    const makeOne = new MakeOne();
    it('정수 2을 입력 받으면 최소 연산 횟수는 1', () => {
        let result = makeOne.execute(2);
        expect(result).to.be.equal(1);
    });

    it('정수 10을 입력 받으면 최소 연산 횟수는 3', () => {
        let result = makeOne.execute(10);
        expect(result).to.be.equal(3);
    });

    it('정수 12을 입력 받으면 최소 연산 횟수는 3', () => {
        let result = makeOne.execute(12);
        expect(result).to.be.equal(3);
    });

    it('정수 20을 입력 받으면 최소 연산 횟수는 4', () => {
        let result = makeOne.execute(20);
        expect(result).to.be.equal(4);
    });

    it('정수 999999을 입력 받으면 최소 연산 횟수는 21', () => {
        let result = makeOne.execute(999999);
        expect(result).to.be.equal(21);
    });

  
});
