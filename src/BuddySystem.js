
// const arr = [256, 256, 256, 256];
const arr = [{'256kb' : 256}, {'256kb' : 256}, {'256kb' : 256}, {'256kb' : 256}];
let remainArr = [];
const BuddyRepository = require('../src/BuddyRepository');


class BuddySystem {
    constructor() {
        this.buddyRepository = new BuddyRepository();
    }

    execute(stone){

    }

    allocate(memory){
        // 33
        // for문 if 최하위면 다음 배열 진행.
        console.log(memory);
        // 받고 i번째를 짜른다.
        console.log(this.buddyRepository.getArr());
        let tempArr = this.buddyRepository.getArr();
        let id = this.buddyRepository.getId();

        this.buddyRepository.setArr([]);
        console.log(this.buddyRepository.getArr());
        // console.log(Object.values(tempArr[0]));
        // console.log(Object.values(tempArr[0])[0].memory);
        //i번쨰를 2로 나눠서. \

        // if 딱 맞으면 바로 대입.

        //memory보다 작으면 다음 배열 인덱스 확인.
        // if(tempArr[0] < momery ){
        //     break;
        // }

        //그리고 대입하기전에 해당 인덱스에 이미 ID 할당이 되있으면 break;
        for(let i = 0; ; i++){

          console.log(Object.keys(tempArr[i])[0]);
          let str = Object.keys(tempArr[i])[0];
          str = str.slice(0, -2);
          if(Object.values(tempArr[i])[0].id !== ''){
            break;
          }
          if(parseInt(str) == memory){
            console.log('여기로?')
            //make func save() ~~
            // let keyName = tempArr[0]+'kb';
            // var something = { };
            // id++;
            // this.buddyRepository.setId(id);
            // something[keyName] = `${memory}[${this.buddyRepository.getId()}]`;
            // console.log(something);
          } else if(parseInt(str) > memory && parseInt(str) / 2 < memory){
            let keyName = parseInt(str)+'kb';
            var something = { };
            id++;
            this.buddyRepository.setId(id);
            something[keyName] = {memory : parseInt(memory), id: this.buddyRepository.getId()};
            console.log(something);

            remainArr.push(something);
            tempArr.forEach(element => {
              remainArr.push(element);
            });

            console.log('remainArr22 : '+JSON.stringify(remainArr));
            this.buddyRepository.setArr(remainArr);
            break;
          } else if(parseInt(str) / 2 > memory){
            console.log('pass 256');
            //여기서 최소 단위까지 계속 나눈후에
            // for문 다음으로 넘어가야함.
            let keyName = parseInt(str) / 2+'kb';
            var something = { };
            id++;
            this.buddyRepository.setId(id);
            something[keyName] = `${memory}[${this.buddyRepository.getId()}]`;
            console.log(something);

            remainArr.push(something);
            remainArr.push(something);
            tempArr.forEach(element => {
              remainArr.push(element);
            });

            this.buddyRepository.setArr(remainArr);
            break;
            /*tempArr.splice(0, 1);;
            remainArr.push(tempArr[0] / 2);
            remainArr.push(tempArr[0] / 2);
            tempArr.forEach(element => {
                remainArr.push(element);
            });

            console.log('remainArr : '+remainArr);
            this.buddyRepository.setArr(remainArr);*/


          } else if(parseInt(str) == 32){
            console.log( '32kb!!!!');
            break;
          }

          remainArr =[];
          break;
        }


    }

    predictResult(stone){

        // if(memory=='LN'){
        //     console.log("----------------------------- LN win -----------------------------");
        // }else if(winner=='AR'){
        //     console.log("----------------------------- AR win -----------------------------");
        // }
    }

    takeStone(stones, take){
        return stones - take;
    }

}

module.exports = BuddySystem;