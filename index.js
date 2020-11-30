function bfs(rootNode, vertices, edges){

}

function findAdjacent(node, vertices, edges){
    let array = []
    let answer = []
    for(let i = 0; i < edges.length; i++){
        for(let j = 0; j < edges[i].length; j++){
            if(edges[i][j] === node && j === 0){
                array.push(edges[i][j + 1])
            } else if 
                (edges[i][j] === node && j === 1){
                    array.push(edges[i][j - 1])
                }
        }
    }
    for(let k = 0; k < array.length; k++){
        for(let n = 0; n < vertices.length; n++){
            if(vertices[n].name === array[k]){
                answer.push(vertices[n])
            }
        }
    }
    return answer
}

function markDistanceAndPredecessor(){

}

function addToQueue(){

}
