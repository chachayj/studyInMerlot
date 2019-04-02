
const assert = require('assert'); 

const BinarySum = require('../src/BinarySum');
console.log(BinarySum);

import {describe} from 'mocha';
import {expect} from 'chai';

describe('BinarySum', () => {

    const binarySum = new BinarySum();

    it('이진수 1과 0를 덧셈시 1이 된다.', () => {
        let result = [];
        let carry = 0;
        let arr1 = [1];
        let arr2 = [0];
        binarySum.filTheArray(arr1,arr2);
        binarySum.sum(arr1,arr2,result,carry);
        result = binarySum.makeArrayToString(result);
        expect(result).to.be.equal('1');
    });

    it('이진수 1과 1를 덧셈시 10 된다.', () => {
        let result = [];
        let carry = 0;
        let arr1 = [1];
        let arr2 = [1];
        binarySum.filTheArray(arr1,arr2);
        binarySum.sum(arr1,arr2,result,carry);
        result = binarySum.makeArrayToString(result);
        expect(result).to.be.equal('10');
    });

    it('이진수 1010과 1100를 덧셈시 10110이 된다.', () => {
        let result = [];
        let carry = 0;
        let arr1 = [1,0,1,0];
        let arr2 = [1,1,0,0];
        binarySum.filTheArray(arr1,arr2);
        binarySum.sum(arr1,arr2,result,carry);
        result = binarySum.makeArrayToString(result);
        expect(result).to.be.equal('10110');
    });

    it('이진수 11110과 10를 덧셈시 100000이 된다.', () => {
        let result = [];
        let carry = 0;
        let arr1 = [1,1,1,1,0];
        let arr2 = [1,0];
        binarySum.filTheArray(arr1,arr2);
        binarySum.sum(arr1,arr2,result,carry);
        result = binarySum.makeArrayToString(result);
        expect(result).to.be.equal('100000');
    });
});

