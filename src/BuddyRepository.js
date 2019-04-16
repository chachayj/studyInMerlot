// const Buddy = require('./Buddy');

const remainArr = [];
class BuddyRepository {
    constructor () {
        this.arr = [{'256kb' : {memory :256, id: ''}}, {'256kb' : {memory :256, id: ''}}, {'256kb' : {memory :256, id: ''}}, {'256kb' : {memory :256, id: ''}}];
        this.id = 0;
    }

    getId(){
       return this.id;
    }

    getArr(){
        return this.arr;
     }
  
    setId(id){
        console.log('세팅');
        console.log(this.id);
        this.id = id;

        console.log(this.id);
    }

    setArr(arr){
        this.arr = arr;
    }

}

module.exports = BuddyRepository;