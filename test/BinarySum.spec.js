
const assert = require('assert'); 

const BinarySum = require('../BinarySum');
console.log(BinarySum);

import {describe} from 'mocha';
import {expect} from 'chai';

describe('BinarySum', () => {

    const binarySum = new BinarySum();

    it('이진수 101과 110를 덧셈시 1011이 된다.', () => {
        let result = [];
        let carry = 0;
        let arr1 = [1,0,1];
        let arr2 = [1,1,0];
        binarySum.filTheArray(arr1,arr2);
        binarySum.sum(arr1,arr2,result,carry);
        result = binarySum.makeArrayToString(result);
        expect(result).to.be.equal('1011');
    });

    it('이진수 111과 111를 덧셈시 1110 된다.', () => {
        let result = [];
        let carry = 0;
        let arr1 = [1,1,1];
        let arr2 = [1,1,1];
        binarySum.filTheArray(arr1,arr2);
        binarySum.sum(arr1,arr2,result,carry);
        result = binarySum.makeArrayToString(result);
        expect(result).to.be.equal('1110');
    });

    it('이진수 1과 1101를 덧셈시 1110이 된다.', () => {
        let result = [];
        let carry = 0;
        let arr1 = [1];
        let arr2 = [1,1,0,1];
        binarySum.filTheArray(arr1,arr2);
        binarySum.sum(arr1,arr2,result,carry);
        result = binarySum.makeArrayToString(result);
        expect(result).to.be.equal('1110');
    });

    it('이진수 100과 100를 덧셈시 1000이 된다.', () => {
        let result = [];
        let carry = 0;
        let arr1 = [1,0,0];
        let arr2 = [1,0,0];
        binarySum.filTheArray(arr1,arr2);
        binarySum.sum(arr1,arr2,result,carry);
        result = binarySum.makeArrayToString(result);
        expect(result).to.be.equal('1000');
    });
});

