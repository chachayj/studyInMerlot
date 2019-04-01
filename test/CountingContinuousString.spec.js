
const assert = require('assert'); 

const CountingContinuousString = require('../CountingContinuousString');
import {describe} from 'mocha';
import {expect} from 'chai';

describe('CountingContinuousString', () => {

    const countingContinuousString = new CountingContinuousString();

    it('ab 입력시 a1d1 출력된다.', () => {
        let strArr = [];
        let countArr = Array(Array());
        let countIndex = 0;
        let line = 'ab'
        let mergeString;
        line.split('').map((inputData) => {
            let result = countingContinuousString.divideData(strArr, inputData, countArr, countIndex);
            strArr = result.strArr;
            countArr = result.countArr;
            countIndex = result.countIndex;
            mergeString = countingContinuousString.makeString(strArr, countArr, mergeString);
        });
        
        expect(mergeString).to.be.equal('a1b1');
    });

    it('aabb 입력시 a2b2 출력된다.', () => {
        let strArr = [];
        let countArr = Array(Array());
        let countIndex = 0;
        let line = 'aabb'
        let mergeString;
        line.split('').map((inputData) => {
            let result = countingContinuousString.divideData(strArr, inputData, countArr, countIndex);
            strArr = result.strArr;
            countArr = result.countArr;
            countIndex = result.countIndex;
            mergeString = countingContinuousString.makeString(strArr, countArr, mergeString);
        });
        
        expect(mergeString).to.be.equal('a2b2');
    });

    it('aaaabbbcc 입력시 a4b3c2 출력된다.', () => {
        let strArr = [];
        let countArr = Array(Array());
        let countIndex = 0;
        let line = 'aaaabbbcc'
        let mergeString;
        line.split('').map((inputData) => {
            let result = countingContinuousString.divideData(strArr, inputData, countArr, countIndex);
            strArr = result.strArr;
            countArr = result.countArr;
            countIndex = result.countIndex;
            mergeString = countingContinuousString.makeString(strArr, countArr, mergeString);
        });
        
        expect(mergeString).to.be.equal('a4b3c2');
    });

    

    
});

