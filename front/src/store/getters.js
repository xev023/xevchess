export const piecesCount = (store) =>{
    let count = 0
    for (let i = 0; i < store.board.length; i++){
        for (let j = 0; j < store.board[i].length; j++){
            if(store.board[i][j].piece.name !== ''){
                count++
            }
        }
    }
    return count
}