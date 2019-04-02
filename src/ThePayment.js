let theTypeOfMoney = [];

class ThePayment {

  execute(moneyType, payment) {

    theTypeOfMoney = this.makeMoneyType(moneyType)
    console.log(theTypeOfMoney);
    return this.countPayment(theTypeOfMoney, payment);
  }

  showPayCount(payCount) {
      console.log(`----------------------------- ${payCount} -----------------------------`);
  }

  makeMoneyType(moneyType){
    let theMoneyArr = [];
    for (let i = 0; i < 10; i++) {
      
      if(i==0){
        theMoneyArr.push(1);
      }else {
        theMoneyArr.push(moneyType * i);
      }
    }
    return theMoneyArr;
  }

  countPayment(theTypeOfMoney, payment) {
    let paymentRemaining = payment;
    let payCount = 0;
    let i = theTypeOfMoney.length - 1;

    while(true){
      while(true){
        if (paymentRemaining >= theTypeOfMoney[i]){
          paymentRemaining = paymentRemaining - theTypeOfMoney[i];
          payCount++;
        }else if (paymentRemaining < theTypeOfMoney[i]){
          i--;
          break;
        }else if(paymentRemaining <= 0){
          break;
        }
      }
      if(paymentRemaining <= 0){
        // console.log(`paymentRemaining ${paymentRemaining}`);
        break;
      }
    }
    return payCount;
  }

}

module.exports = ThePayment;