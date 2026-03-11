import { Graph } from "./node_tree.js";

function knightMoves(cD, cA){
    const board = new Graph(cD, cA);
    board.getShortestPath();
}


knightMoves([0,0], [3,3]);
knightMoves([0,0], [7,7]);