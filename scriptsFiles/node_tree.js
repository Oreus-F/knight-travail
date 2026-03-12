class Node{
    constructor(x, y){
        this.x = x,
        this.y = y,
        this.positions = [this.x, this.y]
        this.nextPos = [],
        this.parent = []
    }

    getX(){
        return this.x
    };

    
    getY(){
        return this.y
    };


    getPositions(){
        return this.positions;
    }

    
    caculateAllNextPost(){
        for(let a = 1; a < 3; a++){
            if(a === 1){
                const addPlusTwo = this.calculateThisPosition(this.getX() + a, this.getY() + 2);
                const addMinusTwo = this.calculateThisPosition(this.getX() + a, this.getY() - 2);

                const subPlusTwo = this.calculateThisPosition(this.getX() - a, this.getY() + 2);
                const subMinusTwo = this.calculateThisPosition(this.getX() - a, this.getY() - 2);

                if(addPlusTwo !== null) this.nextPos.push(addPlusTwo);
                if(addMinusTwo !== null) this.nextPos.push(addMinusTwo);
                if(subPlusTwo !== null) this.nextPos.push(subPlusTwo);
                if(subMinusTwo !== null) this.nextPos.push(subMinusTwo);
            } else {
                const addPlusOne = this.calculateThisPosition(this.getX() + a, this.getY() + 1);
                const addMinusOne = this.calculateThisPosition(this.getX() + a, this.getY() - 1);

                const subPlusOne = this.calculateThisPosition(this.getX() - a, this.getY() + 1);
                const subMinusOne = this.calculateThisPosition(this.getX() - a, this.getY() - 1);

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
    constructor(root, target){
        this.root = new Node(root[0], root[1]),
        this.target = target,
        this.visited = {},
        this.paths = {
            'length': -Infinity,
            'paths': []
        }
    }

    findPath(queue = [this.root]){

        while(queue.length > 0){
            const current = queue[0];


            if(current.getX() === this.target[0] && current.getY() === this.target[1]){
                const path = this.getPath(current);
                this.paths['length'] = path.length - 1;
                this.paths['paths'] = path;
                break

            } else {

                current.caculateAllNextPost();
                
                const nextPositions = current.nextPos;
    
                for(let x = 0; x < nextPositions.length; x++){
                    const positionskey = `${nextPositions[x][0]}${nextPositions[x][1]}`;
                    
                    if(!this.visited[positionskey]){
                        const newN = new Node(nextPositions[x][0], nextPositions[x][1]);
                        newN.parent.push(current);
                        this.visited[positionskey] = newN;
    
                        queue.push(newN)
    
                    } else {
                        const newP = this.visited[positionskey];
                        newP.parent.push(current);
                    }
                }

            }


            queue.shift()
        }

    }


    getPath(node, path = []){

        if(node.parent.length === 0){
            return path.push(node.getPositions());
        }

        this.getPath(node.parent[0], path)
        path.push(node.getPositions());

        return path
    }


    getShortestPath(){
        this.findPath();
        console.log(`You made it in ${this.paths["length"]} moves! Here's your path:`);
        for(let x = 0; x < this.paths['paths'].length; x++){
            console.log(this.paths['paths'][x])
        }
    }

}
