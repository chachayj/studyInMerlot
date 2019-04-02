
const assert = require('assert'); 
const TheStoneGame = require('../src/TheStoneGame');
console.log(TheStoneGame);

import {describe} from 'mocha';
import {expect} from 'chai';

describe('결과를 예측해서 가져갈 돌 갯수를 정한다.', () => {

    const theStoneGame = new TheStoneGame();
    it('1개의 돌이 있을 경우 1개를 가져간다. ', () => {
        let result = theStoneGame.predictResult(1);
        expect(result).to.be.equal(1);
    });
    it('2개의 돌이 있을 경우 2개를 가져간다. ', () => {
        let result = theStoneGame.predictResult(2);
        expect(result).to.be.equal(2);
    });

    it('3개의 돌이 있을 경우 3개를 가져간다. ', () => {
        let result = theStoneGame.predictResult(3);
        expect(result).to.be.equal(3);
    });

    it('4개의 돌이 있을 경우 3개를 가져간다. (지는 게임) ', () => {
        let result = theStoneGame.predictResult(4);
        expect(result).to.be.equal(3);
    });

    it('5개의 돌이 있을 경우 1개를 가져간다. ', () => {
        let result = theStoneGame.predictResult(5);
        expect(result).to.be.equal(1);
    });

    it('6개의 돌이 있을 경우 2개를 가져간다. ', () => {
        let result = theStoneGame.predictResult(6);
        expect(result).to.be.equal(2);
    });

    it('7개의 돌이 있을 경우 3개를 가져간다. ', () => {
        let result = theStoneGame.predictResult(7);
        expect(result).to.be.equal(3);
    });


  
});


describe('승자를 확인.', () => {

    const theStoneGame = new TheStoneGame();
    it('4개의 돌이 있을 경우 AR win. ', () => {
        let result = theStoneGame.execute(4);
        expect(result).to.be.equal('AR');
    });

    it('5개의 돌이 있을 경우 LN win. ', () => {
        let result = theStoneGame.execute(5);
        expect(result).to.be.equal('LN');
    });

    it('8개의 돌이 있을 경우 AR win. ', () => {
        let result = theStoneGame.execute(8);
        expect(result).to.be.equal('AR');
    });

    it('11개의 돌이 있을 경우 LN win. ', () => {
        let result = theStoneGame.execute(11);
        expect(result).to.be.equal('LN');
    });

    it('24개의 돌이 있을 경우 AR win. ', () => {
        let result = theStoneGame.execute(24);
        expect(result).to.be.equal('AR');
    });

    it('37개의 돌이 있을 경우 LN win. ', () => {
        let result = theStoneGame.execute(37);
        expect(result).to.be.equal('LN');
    });



  
});

