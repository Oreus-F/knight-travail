export class Node{
    constructor(x, y){
        this.x = x,
        this.y = y,
        this.nextPos = []
    }


    caculateAllNextPost(){
        for(let a = 1; a < 3; a++){
            if(a === 1){
                const addPlusTwo = this.calculateThisPosition(this.x + a, this.y + 2);
                const addMinusTwo = this.calculateThisPosition(this.x + a, this.y - 2);

                const subPlusTwo = this.calculateThisPosition(this.x - a, this.y + 2);
                const subMinusTwo = this.calculateThisPosition(this.x - a, this.y - 2);

                if(addPlusTwo !== null) this.nextPos.push(addPlusTwo);
                if(addMinusTwo !== null) this.nextPos.push(addMinusTwo);
                if(subPlusTwo !== null) this.nextPos.push(subPlusTwo);
                if(subMinusTwo !== null) this.nextPos.push(subMinusTwo);
            } else {
                const addPlusOne = this.calculateThisPosition(this.x + a, this.y + 1);
                const addMinusOne = this.calculateThisPosition(this.x + a, this.y - 1);

                const subPlusOne = this.calculateThisPosition(this.x - a, this.y + 1);
                const subMinusOne = this.calculateThisPosition(this.x - a, this.y - 1);

                if(addPlusOne !== null) this.nextPos.push(addPlusOne);
                if(addMinusOne !== null) this.nextPos.push(addMinusOne);
                if(subPlusOne !== null) this.nextPos.push(subPlusOne);
                if(subMinusOne !== null) this.nextPos.push(subMinusOne);
            }
        }
    }


    calculateThisPosition(x,y){
        return ((x >= 0 && x <= 7) && (y >= 0 && y <= 7)) ? [x,y] : null
    }
};

export class Graph{
    constructor(root){
        this.root = root
    }
}


const firstPosition = new Node(4,4);
firstPosition.caculateAllNextPost();
console.log(firstPosition.nextPos);
const board = new Graph(firstPosition);