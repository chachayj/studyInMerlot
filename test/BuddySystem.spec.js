
const BuddySystem = require('../src/BuddySystem');
console.log(BuddySystem);

import {describe} from 'mocha';
import {expect} from 'chai';

describe('결과를 예측해서 가져갈 돌 갯수를 정한다.', () => {

    const buddySystem = new BuddySystem();
    it('객체 크기를 입력받아서 할당한다.', () => {
        let result = buddySystem.allocate(1);
        expect(result).to.be.equal(1);
    });
  
    it('객체를 해제한다..', () => {
        let result = buddySystem.allocate(1);
        expect(result).to.be.equal(1);
    });
    
    it('현재 메모리 상태를 출력한다.', () => {
        let result = buddySystem.allocate(1);
        expect(result).to.be.equal(1);
    });

  
    
});


describe('승자를 확인.', () => {

   

    // it('37개의 돌이 있을 경우 LN win. ', () => {
    //     let result = buddySystem.execute(37);
    //     expect(result).to.be.equal('LN');
    // });



  
});

