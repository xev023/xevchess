export function checkJaque(store,cord){
    switch(store.board[cord.x][cord.y].piece.name){
        case 'pawn':
            if(cord.y-1>=0&&store.board[cord.x-1][cord.y-1].propiety==='other'&&store.board[cord.x-1][cord.y-1].piece.name==='king'){
               store.doingJaque = true
              
            }
            if(cord.y+1<=7&&store.board[cord.x-1][cord.y+1].propiety==='other'&&store.board[cord.x-1][cord.y+1].piece.name==='king'){
                store.doingJaque = true
               
            }
        break
        case 'horse':
            //moves
                if(cord.x>1&&cord.y>0&&store.board[cord.x-2][cord.y-1].propiety==='other'&&store.board[cord.x-2][cord.y-1].piece.name==='king'){
                    store.doingJaque = true
                   
                }
                if(cord.x>1&&cord.y<7&&store.board[cord.x-2][cord.y+1].propiety==='other'&&store.board[cord.x-2][cord.y+1].piece.name==='king'){
                    store.doingJaque = true
                   
                }
                if(cord.x>0&&cord.y>1&&store.board[cord.x-1][cord.y-2].propiety==='other'&&store.board[cord.x-1][cord.y-2].piece.name==='king'){
                    store.doingJaque = true
                   
                }
                if(cord.x>0&&cord.y<6&&store.board[cord.x-1][cord.y+2].propiety==='other'&&store.board[cord.x-1][cord.y+2].piece.name==='king'){
                    store.doingJaque = true
                   
                }
                if(cord.x<6&&cord.y>0&&store.board[cord.x+2][cord.y-1].propiety==='other'&&store.board[cord.x+2][cord.y-1].piece.name==='king'){
                    store.doingJaque = true
                   
                }
                if(cord.x<6&&cord.y<7&&store.board[cord.x+2][cord.y+1].propiety==='other'&&store.board[cord.x+2][cord.y+1].piece.name==='king'){
                    store.doingJaque = true
                   
                }
                if(cord.x<7&&cord.y<6&&store.board[cord.x+1][cord.y+2].propiety==='other'&&store.board[cord.x+1][cord.y+2].piece.name==='king'){
                    store.doingJaque = true
                   
                }
                if(cord.x<7&&cord.y>1&&store.board[cord.x+1][cord.y-2].propiety==='other'&&store.board[cord.x+1][cord.y-2].piece.name==='king'){
                    store.doingJaque = true
                   
                }
        break
        case 'bishop':
            let count2 = 1
            for(let i = cord.x-1; i>=0; i--){
                if(cord.y+count2<8&&store.board[i][cord.y+count2].propiety==='other'){
                    if(store.board[i][cord.y+count2].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = -1
                }
                count2++
            }
            count2 = 1
            for(let i = cord.x-1; i>=0; i--){
                if(cord.y-count2>=0&&store.board[i][cord.y-count2].propiety==='other'){
                    if(store.board[i][cord.y-count2].piece.name==='king'){
                        store.doingJaque = true
                         
                    }
                    i = -1
                }
                count2++
            }
            count2 = 1
            for(let i = cord.x+1; i<8; i++){
                if(cord.y+count2<8&&store.board[i][cord.y+count2].propiety==='other'){
                    if(store.board[i][cord.y+count2].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = 8
                }
                count2++
            }
            count2 = 1
            for(let i = cord.x+1; i<8; i++){
                if(cord.y-count2>=0&&store.board[i][cord.y-count2].propiety==='other'){
                    if(store.board[i][cord.y-count2].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = 8
                }
                count2++
            }
        break
        case 'tower':
            for(let i = cord.x+1; i<8; i++){
                if(store.board[i][cord.y].propiety==='other'){
                    if(store.board[i][cord.y].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = 8
                }
            }
            for(let i = cord.x-1; i>=0; i--){
                if(store.board[i][cord.y].propiety==='other'){
                    if(store.board[i][cord.y].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = -1
                }
            }
            for(let i = cord.y+1; i<8; i++){
                if(store.board[cord.x][i].propiety==='other'){
                    if(store.board[cord.x][i].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = 8
                }
            }
            for(let i = cord.y-1; i>=0; i--){
                if(store.board[cord.x][i].propiety==='other'){
                    if(store.board[cord.x][i].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = -1
                }
            }
        break
        case 'queen':
            for(let i = cord.x+1; i<8; i++){
                if(store.board[i][cord.y].propiety==='other'){
                    if(store.board[i][cord.y].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = 8
                }
            }
            for(let i = cord.x-1; i>=0; i--){
                if(store.board[i][cord.y].propiety==='other'){
                    if(store.board[i][cord.y].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = -1
                }
            }
            for(let i = cord.y+1; i<8; i++){
                if(store.board[cord.x][i].propiety==='other'){
                    if(store.board[cord.x][i].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = 8
                }
            }
            for(let i = cord.y-1; i>=0; i--){
                if(store.board[cord.x][i].propiety==='other'){
                    if(store.board[cord.x][i].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = -1
                }
            }
            let count = 1
            for(let i = cord.x-1; i>=0; i--){
                if(cord.y+count<8&&store.board[i][cord.y+count].propiety==='other'){
                    if(store.board[i][cord.y+count].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = -1
                }
                count++
            }
            count = 1
            for(let i = cord.x-1; i>=0; i--){
                if(cord.y-count>=0&&store.board[i][cord.y-count].propiety==='other'){
                    if(store.board[i][cord.y-count].piece.name==='king'){
                        store.doingJaque = true
                         
                    }
                    i = -1
                }
                count++
            }
            count = 1
            for(let i = cord.x+1; i<8; i++){
                if(cord.y+count<8&&store.board[i][cord.y+count].propiety==='other'){
                    if(store.board[i][cord.y+count].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = 8
                }
                count++
            }
            count = 1
            for(let i = cord.x+1; i<8; i++){
                if(cord.y-count>=0&&store.board[i][cord.y-count].propiety==='other'){
                    if(store.board[i][cord.y-count].piece.name==='king'){
                        store.doingJaque = true
                       
                    }
                    i = 8
                }
                count++
            }
        break
    }
}
export function checkIllegal(store,movement,direction){
    let aux = {name:'',url:''}
    if(store.board[movement.x][movement.y].propiety==='other'){
        aux = {...store.board[movement.x][movement.y].piece}
    }
    if(direction==='left'){
                store.board[movement.x][movement.y+1]={...store.board[7][0]}
                store.board[7][0].propiety=''
                store.board[7][0].state='neutral'
                store.board[7][0].piece={name:'',url:''}
    }else if(direction==='right'){
                store.board[movement.x][movement.y-1]={...store.board[7][7]}
                store.board[7][7].propiety=''
                store.board[7][7].state='neutral'
                store.board[7][7].piece={name:'',url:''}
    }
    store.board[movement.x][movement.y]={...store.board[store.selected.x][store.selected.y]}
    store.board[store.selected.x][store.selected.y].propiety=''
    store.board[store.selected.x][store.selected.y].state='neutral'
    store.board[store.selected.x][store.selected.y].piece={name:'',url:''}
    for(let i = 0; i < store.board.length; i++){
        for(let j = 0; j < store.board[i].length; j++){
            if(store.board[i][j].propiety === 'other'){
                switch(store.board[i][j].piece.name){
                    case 'queen':
                        for(let x = i + 1; x<8; x++){
                            if(store.board[x][j].propiety==='mine'){
                                if(store.board[x][j].piece.name==='king'){
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(aux.name!==''){
                                            changePositionKilled(store,movement,aux)
                                        }else{  
                                            if(direction){
                                                changePositionCastling(store,movement,direction)
                                            }else{
                                                changePosition(store,movement)
                                            }
                                        }
                                    }
                                    return false
                                }else{
                                    x = 8
                                }
                            }else if(store.board[x][j].propiety==='other'){
                                x = 8
                            }
                        }
                        for(let x = i - 1; x>=0; x--){
                                if(store.board[x][j].propiety==='mine'){
                                    if(store.board[x][j].piece.name==='king'){

                                        if(aux.name!==''){
                                            changePositionKilled(store,movement,aux)
                                        }else{  
                                            if(direction){
                                                changePositionCastling(store,movement,direction)
                                            }else{
                                                changePosition(store,movement)
                                            }
                                        }
                                        return false
                                    }else{
                                        x = -1
                                    }
                                 }else if(store.board[x][j].propiety==='other'){
                                    x = -1
                                }
                        }
                        for(let x = j + 1; x<8; x++){
                                 if(store.board[i][x].propiety==='mine'){
                                     if(store.board[i][x].piece.name==='king'){

                                        if(aux.name!==''){
                                            changePositionKilled(store,movement,aux)
                                        }else{  
                                            if(direction){
                                                changePositionCastling(store,movement,direction)
                                            }else{
                                                changePosition(store,movement)
                                            }
                                        }
                                        return false
                                     }else{
                                        x = 8
                                     }
                                 }else if(store.board[i][x].propiety==='other'){
                                    x = 8
                                }
                        }
                        for(let x = j - 1; x>=0; x--){
                            if(store.board[i][x].propiety==='mine'){
                                if(store.board[i][x].piece.name==='king'){
                                    
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(direction){
                                            changePositionCastling(store,movement,direction)
                                        }else{
                                            changePosition(store,movement)
                                        }
                                    }
                                    return false
                                }else{
                                    x = -1
                                }
                            }else if(store.board[i][x].propiety==='other'){
                                x = -1
                            }
                        }
                        let count = 1
                        for(let x = i - 1; x>=0; x--){
                            if(j+count<=7&&store.board[x][j+count].propiety==='mine'){
                                if(store.board[x][j+count].piece.name==='king'){
                                    
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(direction){
                                            changePositionCastling(store,movement,direction)
                                        }else{
                                            changePosition(store,movement)
                                        }
                                    }
                                    return false
                                }else{
                                    x = -1
                                }
                            }else if(j+count<=7&&store.board[x][j+count].propiety==='other'){
                                x = -1
                            }
                            count ++
                        }
                        count = 1
                        for(let x = i - 1; x>=0; x--){
                            if(j-count>=0&&store.board[x][j-count].propiety==='mine'){
                                if(store.board[x][j-count].piece.name==='king'){
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(direction){
                                            changePositionCastling(store,movement,direction)
                                        }else{
                                            changePosition(store,movement)
                                        }
                                    }
                                    
                                    return false
                                }else{
                                    x = -1
                                }
                            }else if(j-count>=0&&store.board[x][j-count].propiety==='other'){
                                x = -1
                            }
                            count ++
                        }
                        count = 1
                        for(let x = i + 1; x<8; x++){
                            if(j-count>=0&&store.board[x][j-count].propiety==='mine'){
                                if(store.board[x][j-count].piece.name==='king'){
                                    
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(direction){
                                            changePositionCastling(store,movement,direction)
                                        }else{  
                                                changePosition(store,movement)
                                        }
                                    }
                                    return false
                                }else{
                                    x = 8
                                }
                            }else if(j-count>=0&&store.board[x][j-count].propiety==='other'){
                                x = 8
                            }
                            count ++
                         }
                         count = 1
                         for(let x = i + 1; x<8; x++){
                            if(j+count<=7&&store.board[x][j+count].propiety==='mine'){
                                if(store.board[x][j+count].piece.name==='king'){
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(direction){
                                            changePositionCastling(store,movement,direction)
                                        }else{
                                            changePosition(store,movement)
                                        }
                                    }
                                    
                                    return false
                                }else{
                                    x = 8
                                }
                            }else if(j+count<=7&&store.board[x][j+count].propiety==='other'){
                                x = 8
                            }
                            count ++
                         }
                    break
                    case 'pawn':
                        if(i<7&&j<7&&store.board[i+1][j+1].propiety==='mine'){
                            if(store.board[i+1][j+1].piece.name==='king'){
                                if(aux.name!==''){
                                    changePositionKilled(store,movement,aux)
                                }else{  
                                    if(direction){
                                        changePositionCastling(store,movement,direction)
                                    }else{
                                        changePosition(store,movement)
                                    }
                                }
                                
                                return false
                            }
                         }
                        if(i>0&&j>0&&store.board[i+1][j-1].propiety==='mine'){
                            if(store.board[i+1][j-1].piece.name==='king'){
                                if(aux.name!==''){
                                    changePositionKilled(store,movement,aux)
                                }else{  
                                    if(direction){
                                        changePositionCastling(store,movement,direction)
                                    }else{
                                        changePosition(store,movement)
                                    }
                                }
                                
                                return false
                            }
                        }
                    break
                    case 'bishop':
                        let count2 = 1
                        for(let x = i - 1; x>=0; x--){
                            if(j+count2<=7&&store.board[x][j+count2].propiety==='mine'){
                                if(store.board[x][j+count2].piece.name==='king'){
                                    
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(direction){
                                            changePositionCastling(store,movement,direction)
                                        }else{
                                            changePosition(store,movement)
                                        }
                                    }
                                    return false
                                }else{
                                    x = -1
                                }
                            }else if(j+count2<=7&&store.board[x][j+count2].propiety==='other'){
                                x = -1
                            }
                            count2 ++
                        }
                        count2 = 1
                        for(let x = i - 1; x>=0; x--){
                            if(j-count2>=0&&store.board[x][j-count2].propiety==='mine'){
                                if(store.board[x][j-count2].piece.name==='king'){
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(direction){
                                            changePositionCastling(store,movement,direction)
                                        }else{
                                            changePosition(store,movement)
                                        }
                                    }
                                    
                                    return false
                                }else{
                                    x = -1
                                }
                            }else if(j-count2>=0&&store.board[x][j-count2].propiety==='other'){
                                x = -1
                            }
                            count2 ++
                        }
                        count2 = 1
                        for(let x = i + 1; x<8; x++){
                            if(j-count2>=0&&store.board[x][j-count2].propiety==='mine'){
                                if(store.board[x][j-count2].piece.name==='king'){
                                    
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(direction){
                                            changePositionCastling(store,movement,direction)
                                        }else{
                                            changePosition(store,movement)
                                        }
                                    }
                                    return false
                                }else{
                                    x = 8
                                }
                            }else if(j-count2>=0&&store.board[x][j-count2].propiety==='other'){
                                x = 8
                            }
                            count2 ++
                         }
                        count2 = 1
                        for(let x = i + 1; x<8; x++){
                            if(j+count2<=7&&store.board[x][j+count2].propiety==='mine'){
                                if(store.board[x][j+count2].piece.name==='king'){
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(direction){
                                            changePositionCastling(store,movement,direction)
                                        }else{
                                            changePosition(store,movement)
                                        }
                                    }
                                    
                                    return false
                                }else{
                                    x = 8
                                }
                            }else if(j+count2<=7&&store.board[x][j+count2].propiety==='other'){
                                x = 8
                            }
                            count2 ++
                        }
                    break
                    case 'king':
                        if(i<7&&store.board[i+1][j].propiety==='mine'&&store.board[i+1][j].piece.name==='king'){
                            if(aux.name!==''){
                                changePositionKilled(store,movement,aux)
                            }else{  
                                if(direction){
                                    changePositionCastling(store,movement,direction)
                                }else{  
                                        changePosition(store,movement)
                                    
                                }
                            }
                            
                            return false
                        }
                        if(i>0&&store.board[i-1][j].propiety==='mine'&&store.board[i-1][j].piece.name==='king'){
                            if(aux.name!==''){
                                changePositionKilled(store,movement,aux)
                            }else{  
                                if(direction){
                                    changePositionCastling(store,movement,direction)
                                }else{  
                                        changePosition(store,movement)
                                }
                            }
                            
                            return false
                        }
                        if(j<7&&store.board[i][j+1].propiety==='mine'&&store.board[i][j+1].piece.name==='king'){
                            if(aux.name!==''){
                                changePositionKilled(store,movement,aux)
                            }else{  
                                if(direction){
                                    changePositionCastling(store,movement,direction)
                                }else{  
                                        changePosition(store,movement)
                                }
                            }
                            
                            return false
                        }
                        if(j>0&&store.board[i][j-1].propiety==='mine'&&store.board[i][j-1].piece.name==='king'){
                            if(aux.name!==''){
                                changePositionKilled(store,movement,aux)
                            }else{  
                                if(direction){
                                    changePositionCastling(store,movement,direction)
                                }else{  
                                    changePosition(store,movement)
                                }
                            }
                            
                            return false
                        }
                        if(i<7&&j<7&&store.board[i+1][j+1].propiety==='mine'&&store.board[i+1][j+1].piece.name==='king'){
                            if(aux.name!==''){
                                changePositionKilled(store,movement,aux)
                            }else{  
                                if(direction){
                                    changePositionCastling(store,movement,direction)
                                }else{  
                                        changePosition(store,movement)
                                }
                            }
                            
                            return false
                        }
                        if(i>0&&j>0&&store.board[i-1][j-1].propiety==='mine'&&store.board[i-1][j-1].piece.name==='king'){
                            if(aux.name!==''){
                                changePositionKilled(store,movement,aux)
                            }else{  
                                if(direction){
                                    changePositionCastling(store,movement,direction)
                                }else{  
                                        changePosition(store,movement)
                                }
                            }
                            
                            return false
                        }
                        if(i<7&&j>0&&store.board[i+1][j-1].propiety==='mine'&&store.board[i+1][j-1].piece.name==='king'){
                            if(aux.name!==''){
                                changePositionKilled(store,movement,aux)
                            }else{  
                                if(direction){
                                    changePositionCastling(store,movement,direction)
                                }else{  
                                        changePosition(store,movement)
                                }
                            }
                            
                            return false
                        }
                        if(i>0&&j<7&&store.board[i-1][j+1].propiety==='mine'&&store.board[i-1][j+1].piece.name==='king'){
                            if(aux.name!==''){
                                changePositionKilled(store,movement,aux)
                            }else{  
                                if(direction){
                                    changePositionCastling(store,movement,direction)
                                }else{  
                                        changePosition(store,movement)
                                }
                            }
                            
                            return false
                        } 
                    break
                    case 'horse':
                        if(i>1&&j>0&&store.board[i-2][j-1].propiety==='mine'){
                            if(store.board[i-2][j-1].piece.name==='king'){
                                if(aux.name!==''){
                                    changePositionKilled(store,movement,aux)
                                }else{  
                                    if(direction){
                                        changePositionCastling(store,movement,direction)
                                    }else{  
                                            changePosition(store,movement)
                                        }
                                }  
                                return false
                            }
                        }
                        if(i>1&&j<7&&store.board[i-2][j+1].propiety==='mine'){
                            if(store.board[i-2][j+1].piece.name==='king'){
                                if(aux.name!==''){
                                    changePositionKilled(store,movement,aux)
                                }else{  
                                    if(direction){
                                        changePositionCastling(store,movement,direction)
                                    }else{
                                        changePosition(store,movement)
                                    }
                                }
                                
                                return false
                            }
                        }
                        if(i>0&&j>1&&store.board[i-1][j-2].propiety==='mine'){
                            if(store.board[i-1][j-2].piece.name==='king'){
                                if(aux.name!==''){
                                    changePositionKilled(store,movement,aux)
                                }else{  
                                    if(direction){
                                        changePositionCastling(store,movement,direction)
                                    }else{
                                        changePosition(store,movement)
                                    }
                                }
                                
                                return false
                            }
                        }
                        if(i>0&&j<6&&store.board[i-1][j+2].propiety==='mine'){
                            if(store.board[i-1][j+2].piece.name==='king'){
                                if(aux.name!==''){
                                    changePositionKilled(store,movement,aux)
                                }else{  
                                    if(direction){
                                        changePositionCastling(store,movement,direction)
                                    }else{
                                        changePosition(store,movement)
                                    }
                                }
                                
                                return false
                            }
                        }
                        if(i<6&&j<7&&store.board[i+2][j+1].propiety==='mine'){
                            if(store.board[i+2][j+1].piece.name==='king'){
                                if(aux.name!==''){
                                    changePositionKilled(store,movement,aux)
                                }else{  
                                    if(direction){
                                        changePositionCastling(store,movement,direction)
                                    }else{
                                        changePosition(store,movement)
                                    }
                                }
                                
                                return false
                            }
                        }
                        if(i<6&&j>0&&store.board[i+2][j-1].propiety==='mine'){
                            if(store.board[i+2][j-1].piece.name==='king'){
                                if(aux.name!==''){
                                    changePositionKilled(store,movement,aux)
                                }else{  
                                    if(direction){
                                        changePositionCastling(store,movement,direction)
                                    }else{
                                        changePosition(store,movement)
                                    }
                                }
                                
                                return false
                            }
                        }
                        if(i<7&&j<6&&store.board[i+1][j+2].propiety==='mine'){
                            if(store.board[i+1][j+2].piece.name==='king'){
                                if(aux.name!==''){
                                    changePositionKilled(store,movement,aux)
                                }else{  
                                    if(direction){
                                        changePositionCastling(store,movement,direction)
                                    }else{
                                        changePosition(store,movement)
                                    }
                                }
                                
                                return false
                            }
                        }
                        if(i<7&&j>1&&store.board[i+1][j-2].propiety==='mine'){
                            if(store.board[i+1][j-2].piece.name==='king'){
                                if(aux.name!==''){
                                    changePositionKilled(store,movement,aux)
                                }else{  
                                    if(direction){
                                        changePositionCastling(store,movement,direction)
                                    }else{
                                        changePosition(store,movement)
                                    }
                                }
                                
                                return false
                            }
                        }
                    break
                    case 'tower':
                        for(let x = i + 1; x<8; x++){
                                if(store.board[x][j].propiety==='mine'){
                                    if(store.board[x][j].piece.name==='king'){

                                        if(aux.name!==''){
                                            changePositionKilled(store,movement,aux)
                                        }else{  
                                            if(direction){
                                                changePositionCastling(store,movement,direction)
                                            }else{
                                                changePosition(store,movement)
                                            }
                                        }
                                        return false
                                    }else{
                                       x = 8
                                    } 
                                }else if(store.board[x][j].propiety==='other'){
                                    x = 8
                                }
                        }
                        for(let x = i - 1; x>=0; x--){
                                 if(store.board[x][j].propiety==='mine'){
                                     if(store.board[x][j].piece.name==='king'){

                                        if(aux.name!==''){
                                            changePositionKilled(store,movement,aux)
                                        }else{  
                                            if(direction){
                                                changePositionCastling(store,movement,direction)
                                            }else{
                                                changePosition(store,movement)
                                            }
                                        }
                                        return false
                                     }else{
                                        x = -1
                                     }
                                 }else if(store.board[x][j].propiety==='other'){
                                    x = -1
                                }
                        }
                        
                        for(let x = j + 1; x<8; x++){
                                 if(store.board[i][x].propiety==='mine'){
                                     if(store.board[i][x].piece.name==='king'){

                                        if(aux.name!==''){
                                            changePositionKilled(store,movement,aux)
                                        }else{  
                                            if(direction){
                                                changePositionCastling(store,movement,direction)
                                            }else{
                                                changePosition(store,movement)
                                            }
                                        }
                                        return false
                                     }else{
                                        x = 8
                                     }
                                }else if(store.board[i][x].propiety==='other'){
                                    x = 8
                                }
                        }
                        for(let x = j - 1; x>=0; x--){
                            if(store.board[i][x].propiety==='mine'){
                                if(store.board[i][x].piece.name==='king'){                   
                                    if(aux.name!==''){
                                        changePositionKilled(store,movement,aux)
                                    }else{  
                                        if(direction){
                                            changePositionCastling(store,movement,direction)
                                        }else{
                                            changePosition(store,movement)
                                        }
                                    }
                                    return false
                                }else{
                                    x = -1
                                }
                            }else if(store.board[i][x].propiety==='other'){
                                x = -1
                            }
                        }
                    break
                }
            }
        }
    }
    if(aux.name!==''){
        changePositionKilled(store,movement,aux)
    }else{  
        if(direction){
            changePositionCastling(store,movement,direction)
        }else{
            changePosition(store,movement)
        }
    }
    return true
}
function changePosition(store,movement){
    store.board[store.selected.x][store.selected.y]={...store.board[movement.x][movement.y]}
    store.board[movement.x][movement.y].piece={name:'',url:''}
    store.board[movement.x][movement.y].propiety=''
    store.board[movement.x][movement.y].state='neutral'
}
function changePositionKilled(store,movement,aux){
    store.board[store.selected.x][store.selected.y]={...store.board[movement.x][movement.y]}
    store.board[movement.x][movement.y].piece={...aux}
    store.board[movement.x][movement.y].propiety='other'
    store.board[movement.x][movement.y].state='neutral'
}
function changePositionCastling(store,movement,direction){
    store.board[store.selected.x][store.selected.y]={...store.board[movement.x][movement.y]}
    store.board[movement.x][movement.y].piece={name:'',url:''}
    store.board[movement.x][movement.y].propiety=''
    store.board[movement.x][movement.y].state='neutral'
    if(direction==='left'){
        store.board[7][0]={...store.board[movement.x][movement.y+1]}
        store.board[movement.x][movement.y+1].piece={name:'',url:''}
        store.board[movement.x][movement.y+1].propiety=''
        store.board[movement.x][movement.y+1].state='neutral'
    }else{
        store.board[7][7]={...store.board[movement.x][movement.y-1]}
        store.board[movement.x][movement.y-1].piece={name:'',url:''}
        store.board[movement.x][movement.y-1].propiety=''
        store.board[movement.x][movement.y-1].state='neutral'
    }
}
