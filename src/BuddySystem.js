
const arr = [256, 256, 256, 256];
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
        //i번쨰를 2로 나눠서. \

        // if 딱 맞으면 바로 대입. 

        //memory보다 작으면 다음 배열 인덱스 확인. 
        // if(tempArr[0] < momery ){
        //     break;
        // }

        //그리고 대입하기전에 해당 인덱스에 이미 ID 할당이 되있으면 break;
        if(tempArr[0] == memory){
            //make func save() ~~
            // let keyName = tempArr[0]+'kb';
            // var something = { };
            // id++;
            // this.buddyRepository.setId(id);
            // something[keyName] = `${memory}[${this.buddyRepository.getId()}]`;
            // console.log(something);
        } else if(tempArr[0] > memory && tempArr[0] / 2 < memory){
            // let keyName = tempArr[0]+'kb';
            // var something = { };
            // id++;
            // this.buddyRepository.setId(id);
            // something[keyName] = `${memory}[${this.buddyRepository.getId()}]`;
            // console.log(something);

            tempArr.forEach(element => {
                remainArr.push(element);
            });
            
            console.log('remainArr22 : '+remainArr);
            this.buddyRepository.setArr(remainArr);
            
        } else if(tempArr[0] / 2 > memory){
            console.log('pass 256');
            //여기서 최소 단위까지 계속 나눈후에 
            // for문 다음으로 넘어가야함.

            tempArr.splice(0, 1);;
            remainArr.push(tempArr[0] / 2);
            remainArr.push(tempArr[0] / 2);
            tempArr.forEach(element => {
                remainArr.push(element);
            });
            
            console.log('remainArr : '+remainArr);
            this.buddyRepository.setArr(remainArr);
            // if()
        } 

        remainArr =[];
        
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