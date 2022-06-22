import { checkIllegal,checkJaque } from "./auxFunctions"
export default {
    loggedIn(state) {
      state.logged = true
    },
    loggedOut(state) {
      state.logged = false
    },
    setGameInfo(state,game){
        state.game = game
    },
    setLose(state){
        state.lose = true
    },
    toggleTurn(state){
        state.yourTurn = !state.yourTurn
    },
    setUsername(state,username) {
      state.username = username
    },
    setUpSeconds(state){
        state.time = state.time * 60
        state.otherTime = state.otherTime * 60
    },
    setPlayerColour(state,colour){
      state.playerColour = colour
    },
    resetBoard(state){
      state.board = [[],[],[],[],[],[],[],[]]
    },
    stopQueue(state){
        state.queue = false
        state.inGame = true
    },
    unsetGame(state){
        state.inGame = false
    },
    setWin(state){
        state.win = true
    },
    setInJaque(state){
        state.jaque = true
    },
    setTime(state,time){
        state.time = time
        state.otherTime = time
    },
    minusMy(state){
        state.time --
    },
    minusOther(state){
        state.otherTime --
    },
    unsetInJaque(state){
        state.jaque = false
    },
    unsetJaque(state){
        state.doingJaque = false
    },
    setPassant(state,passant){
        state.enPassant = true
        state.passantCord.x = 7-passant.x
        state.passantCord.y = 7-passant.y
    },
    unsetPassant(state){
        state.enPassant = false
    },
    unsetCastling(state,type){
        if(type==='all'){
            state.castling.left = false 
            state.castling.right = false 
        }else if(type==='left'){
            state.castling.left = false 
        }else if(type==='right'){
            state.castling.right = false 
        }
    },
    killPassant(state,cord){
        state.board[7-cord.x][7-cord.y].piece={name:'',url:''}
        state.board[7-cord.x][7-cord.y].state='neutral'
        state.board[7-cord.x][7-cord.y].propiety=''
    },
    setCoronation(state,cord){
        state.coronation = true
        state.coronationPosition.x = cord.x
        state.coronationPosition.y = cord.y
        state.coronationInit.x = state.selected.x
        state.coronationInit.y = state.selected.y
    },
    unsetCoronation(state,cord){
        state.coronation = false
        state.coronationPosition = {x:undefined,y:undefined}
        state.coronationInit = {x:undefined,y:undefined}
    },
    initBoard(state){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                if(i === 1){
                    if(state.playerColour==='white'){
                        state.board[i].push({state:'neutral',piece:{name:'pawn',url:'/assets/black_pawn.png'},propiety:'other'})
                    }else{
                        state.board[i].push({state:'neutral',piece:{name:'pawn',url:'/assets/white_pawn.png'},propiety:'other'})
                    }
                    // state.board[i].push({state:'neutral',piece:{name:'',url:''},propiety:''})
                }else if(i === 6){
                    if(state.playerColour==='white'){
                        state.board[i].push({state:'neutral',piece:{name:'pawn',url:'/assets/white_pawn.png'},propiety:'mine'})
                    }else{
                        state.board[i].push({state:'neutral',piece:{name:'pawn',url:'/assets/black_pawn.png'},propiety:'mine'})
                    }
                    // state.board[i].push({state:'neutral',piece:{name:'',url:''},propiety:''})
                }else if(i === 0 || i === 7){
                    if(j === 0 || j === 7){
                        if(state.playerColour==='white'){
                            i===0?state.board[i].push({state:'neutral',piece:{name:'tower',url:'/assets/black_tower.png'},propiety:'other'}):state.board[i].push({state:'neutral',piece:{name:'tower',url:'/assets/white_tower.png'},propiety:'mine'})
                        }else{
                            i===0?state.board[i].push({state:'neutral',piece:{name:'tower',url:'/assets/white_tower.png'},propiety:'other'}):state.board[i].push({state:'neutral',piece:{name:'tower',url:'/assets/black_tower.png'},propiety:'mine'})
                        }
                        // state.board[i].push({state:'neutral',piece:{name:'',url:''},propiety:''})
                    }else if(j === 1 || j === 6){
                        if(state.playerColour==='white'){
                            i===0?state.board[i].push({state:'neutral',piece:{name:'horse',url:'/assets/black_horse.png'},propiety:'other'}):state.board[i].push({state:'neutral',piece:{name:'horse',url:'/assets/white_horse.png'},propiety:'mine'})
                        }else{
                            i===0?state.board[i].push({state:'neutral',piece:{name:'horse',url:'/assets/white_horse.png'},propiety:'other'}):state.board[i].push({state:'neutral',piece:{name:'horse',url:'/assets/black_horse.png'},propiety:'mine'})
                        }
                        // state.board[i].push({state:'neutral',piece:{name:'',url:''},propiety:''})
                    }else if(j===2 || j===5){
                        if(state.playerColour==='white'){
                            i===0?state.board[i].push({state:'neutral',piece:{name:'bishop',url:'/assets/black_bishop.png'},propiety:'other'}):state.board[i].push({state:'neutral',piece:{name:'bishop',url:'/assets/white_bishop.png'},propiety:'mine'})

                        }else{
                            i===0?state.board[i].push({state:'neutral',piece:{name:'bishop',url:'/assets/white_bishop.png'},propiety:'other'}):state.board[i].push({state:'neutral',piece:{name:'bishop',url:'/assets/black_bishop.png'},propiety:'mine'})
                        }
                        // state.board[i].push({state:'neutral',piece:{name:'',url:''},propiety:''})
                    }else if(j===3){
                        if(state.playerColour==='white'){
                            // state.board[i].push({state:'neutral',piece:{name:'',url:''},propiety:''})
                            i===0?state.board[i].push({state:'neutral',piece:{name:'queen',url:'/assets/black_queen.png'},propiety:'other'}):state.board[i].push({state:'neutral',piece:{name:'queen',url:'/assets/white_queen.png'},propiety:'mine'})
                        }else{
                            i===0?state.board[i].push({state:'neutral',piece:{name:'king',url:'/assets/white_king.png'},propiety:'other'}):state.board[i].push({state:'neutral',piece:{name:'king',url:'/assets/black_king.png'},propiety:'mine'})
                        }
                    }else if(j===4){
                        if(state.playerColour==='white'){
                            i===0?state.board[i].push({state:'neutral',piece:{name:'king',url:'/assets/black_king.png'},propiety:'other'}):state.board[i].push({state:'neutral',piece:{name:'king',url:'/assets/white_king.png'},propiety:'mine'})
                        }else{
                            // state.board[i].push({state:'neutral',piece:{name:'',url:''},propiety:''})
                            i===0?state.board[i].push({state:'neutral',piece:{name:'queen',url:'/assets/white_queen.png'},propiety:'other'}):state.board[i].push({state:'neutral',piece:{name:'queen',url:'/assets/black_queen.png'},propiety:'mine'})
                        }
                    }
                }else{
                    state.board[i].push({state:'neutral',piece:{name:'',url:''},propiety:''})
                }
            }
            }
    },
    selectPiece(store,cord){
        store.board[store.selected.x][store.selected.y].state='neutral'
        store.board[cord.x][cord.y].state='selected'
        store.selected.y = cord.y
        store.selected.x = cord.x
    },
    unselectPiece(store,cord){
        store.board[cord.x][cord.y].state='neutral'
    },
    removeMovements(store){
        store.movements.forEach((el) => {
            store.board[el.x][el.y].state='neutral'
            for(let i = 0; i<store.enemyMovements.length; i++){
                if(el.x===(store.enemyMovements[i].x)&&(el.y===store.enemyMovements[i].y)){
                    store.board[el.x][el.y].state='enemy' 
                    i=store.enemyMovements.length
                }
            }
        })
        store.movements = []
    },
    removeEnemyMovements(store){
        store.enemyMovements.forEach((el) => {
            store.board[el.x][el.y].state='neutral'
        })
        store.enemyMovements = []
    },
    doMovement(store,cord){
            if(store.enPassant && (store.board[store.selected.x][store.selected.y].piece.name==='pawn'&&cord.x+1===store.passantCord.x&&cord.y===store.passantCord.y)){
                store.passant.x = cord.x+1
                store.passant.y = cord.y
                store.board[cord.x+1][cord.y].state='neutral'
                store.board[cord.x+1][cord.y].piece={name:'',url:''}
                store.board[cord.x+1][cord.y].propiety=''
            }
            store.board[cord.x][cord.y]={...store.board[store.selected.x][store.selected.y]}
            store.board[cord.x][cord.y].state='neutral'
            store.board[store.selected.x][store.selected.y].state='neutral'
            store.board[store.selected.x][store.selected.y].piece={name:'',url:''}
            store.board[store.selected.x][store.selected.y].propiety=''
            store.selected.x = cord.x
            store.selected.y = cord.y
            checkJaque(store,cord)
    },
    doCastling(store,cord){
            if(store.playerColour==='white'){
                if(cord.y === 0){
                    store.castlingMovements.push({
                        init:{x:0,y:3},
                        final:{x:0,y:5}
                    })
                    store.castlingMovements.push({
                        init:{x:0,y:7},
                        final:{x:0,y:4}
                    })
                    store.board[store.selected.x][store.selected.y-2]={...store.board[store.selected.x][store.selected.y]}
                    store.board[store.selected.x][store.selected.y-2].state='neutral'
                    store.board[store.selected.x][store.selected.y-1]={...store.board[cord.x][cord.y]}
                    store.board[store.selected.x][store.selected.y-1].state='neutral'
                    store.board[store.selected.x][store.selected.y].state='neutral'
                    store.board[store.selected.x][store.selected.y].piece={name:'',url:''}
                    store.board[store.selected.x][store.selected.y].propiety=''
                    store.board[cord.x][cord.y].state='neutral'
                    store.board[cord.x][cord.y].piece={name:'',url:''}
                    store.board[cord.x][cord.y].propiety=''
                    checkJaque(store,{x:store.selected.x,y:store.selected.y-1})
                }else if(cord.y===7){
                    store.castlingMovements.push({
                        init:{x:0,y:3},
                        final:{x:0,y:1}
                    })
                    store.castlingMovements.push({
                        init:{x:0,y:0},
                        final:{x:0,y:2}
                    })
                    store.board[store.selected.x][store.selected.y+2]={...store.board[store.selected.x][store.selected.y]}
                    store.board[store.selected.x][store.selected.y+2].state='neutral'
                    store.board[store.selected.x][store.selected.y+1]={...store.board[cord.x][cord.y]}
                    store.board[store.selected.x][store.selected.y+1].state='neutral'
                    store.board[store.selected.x][store.selected.y].state='neutral'
                    store.board[store.selected.x][store.selected.y].piece={name:'',url:''}
                    store.board[store.selected.x][store.selected.y].propiety=''
                    store.board[cord.x][cord.y].state='neutral'
                    store.board[cord.x][cord.y].piece={name:'',url:''}
                    store.board[cord.x][cord.y].propiety=''
                    checkJaque(store,{x:store.selected.x,y:store.selected.y+1})
                }
            }else{       
                if(cord.y === 0){
                    store.castlingMovements.push({
                        init:{x:0,y:4},
                        final:{x:0,y:6}
                    })
                    store.castlingMovements.push({
                        init:{x:0,y:7},
                        final:{x:0,y:5}
                    })
                    store.board[store.selected.x][store.selected.y-2]={...store.board[store.selected.x][store.selected.y]}
                    store.board[store.selected.x][store.selected.y-2].state='neutral'
                    store.board[store.selected.x][store.selected.y-1]={...store.board[cord.x][cord.y]}
                    store.board[store.selected.x][store.selected.y-1].state='neutral'
                    store.board[store.selected.x][store.selected.y].state='neutral'
                    store.board[store.selected.x][store.selected.y].piece={name:'',url:''}
                    store.board[store.selected.x][store.selected.y].propiety=''
                    store.board[cord.x][cord.y].state='neutral'
                    store.board[cord.x][cord.y].piece={name:'',url:''}
                    store.board[cord.x][cord.y].propiety=''
                    checkJaque(store,{x:store.selected.x,y:store.selected.y-1})
                }else if(cord.y===7){
                    store.castlingMovements.push({
                        init:{x:0,y:0},
                        final:{x:0,y:3}
                    })
                    store.castlingMovements.push({
                        init:{x:0,y:4},
                        final:{x:0,y:2}
                    })
                    store.board[store.selected.x][store.selected.y+2]={...store.board[store.selected.x][store.selected.y]}
                    store.board[store.selected.x][store.selected.y+2].state='neutral'
                    store.board[store.selected.x][store.selected.y+1]={...store.board[cord.x][cord.y]}
                    store.board[store.selected.x][store.selected.y+1].state='neutral'
                    store.board[store.selected.x][store.selected.y].state='neutral'
                    store.board[store.selected.x][store.selected.y].piece={name:'',url:''}
                    store.board[store.selected.x][store.selected.y].propiety=''
                    store.board[cord.x][cord.y].state='neutral'
                    store.board[cord.x][cord.y].piece={name:'',url:''}
                    store.board[cord.x][cord.y].propiety=''
                    checkJaque(store,{x:store.selected.x,y:store.selected.y+1})
                }
            }  
    },
    enemyMovement(store,movement){
        movement.init.x = 7 - movement.init.x
        movement.init.y = 7 - movement.init.y
        movement.final.x = 7 - movement.final.x
        movement.final.y = 7 - movement.final.y
        store.enemyMovements.push(movement.init)
        store.enemyMovements.push(movement.final)
        let piece = {...store.board[movement.init.x][movement.init.y].piece}
        store.board[movement.final.x][movement.final.y].piece={...piece}
        store.board[movement.final.x][movement.final.y].state='enemy'
        store.board[movement.final.x][movement.final.y].propiety='other'
        store.board[movement.init.x][movement.init.y].state='enemy'
        store.board[movement.init.x][movement.init.y].propiety=''
        store.board[movement.init.x][movement.init.y].piece={name:'',url:''}
    },
    enemyCastling(store,movements){
        movements.forEach(movement => {
            store.enemyMovements.push(movement.init)
            store.enemyMovements.push(movement.final)
            store.board[movement.final.x][movement.final.y].piece={...store.board[movement.init.x][movement.init.y].piece}
            store.board[movement.final.x][movement.final.y].state='enemy'
            store.board[movement.final.x][movement.final.y].propiety='other'
            store.board[movement.init.x][movement.init.y].state='enemy'
            store.board[movement.init.x][movement.init.y].propiety=''
            store.board[movement.init.x][movement.init.y].piece={name:'',url:''}
        })
    },
    doCoronation(state,piece){
        switch(piece){
            case 'queen':
                state.board[state.coronationPosition.x][state.coronationPosition.y].piece={name:'queen',url:state.playerColour==='white'?'/assets/white_queen.png':'/assets/black_queen.png'}
            break
            case 'bishop':
                state.board[state.coronationPosition.x][state.coronationPosition.y].piece={name:'bishop',url:state.playerColour==='white'?'/assets/white_bishop.png':'/assets/black_bishop.png'}
            break
            case 'tower':
                state.board[state.coronationPosition.x][state.coronationPosition.y].piece={name:'tower',url:state.playerColour==='white'?'/assets/white_tower.png':'/assets/black_tower.png'}
            break
            case 'horse':
                state.board[state.coronationPosition.x][state.coronationPosition.y].piece={name:'horse',url:state.playerColour==='white'?'/assets/white_horse.png':'/assets/black_horse.png'}
            break
        }
        state.board[state.coronationPosition.x][state.coronationPosition.y].propiety = 'mine'
        state.board[state.coronationPosition.x][state.coronationPosition.y].state = 'neutral'
        state.board[state.coronationInit.x][state.coronationInit.y].piece={name:'',url:''}
        state.board[state.coronationInit.x][state.coronationInit.y].propiety = ''
        state.board[state.coronationInit.x][state.coronationInit.y].state = 'neutral'
        checkJaque(state,{x:state.coronationPosition.x,y:state.coronationPosition.y})
        state.movements.forEach((el) => {
            state.board[el.x][el.y].state='neutral'
        })
        state.movements = []
        state.enemyMovements.forEach((el) => {
            state.board[el.x][el.y].state='neutral'
        })
        state.enemyMovements = []
        state.coronation = false
        state.yourTurn = false
    }, 
    enemyCoronation(state,coronation){
        switch(coronation.piece){
            case 'queen':
                state.board[7-coronation.cord.x][7-coronation.cord.y].piece={name:'queen',url:state.playerColour==='black'?'/assets/white_queen.png':'/assets/black_queen.png'}
            break
            case 'bishop':
                state.board[7-coronation.cord.x][7-coronation.cord.y].piece={name:'bishop',url:state.playerColour==='black'?'/assets/white_bishop.png':'/assets/black_bishop.png'}
            break
            case 'tower':
                state.board[7-coronation.cord.x][7-coronation.cord.y].piece={name:'tower',url:state.playerColour==='black'?'/assets/white_tower.png':'/assets/black_tower.png'}
            break
            case 'horse':
                state.board[7-coronation.cord.x][7-coronation.cord.y].piece={name:'horse',url:state.playerColour==='black'?'/assets/white_horse.png':'/assets/black_horse.png'}
            break
        }
        state.board[7-coronation.cord.x][7-coronation.cord.y].propiety = 'other'
        state.board[7-coronation.cord.x][7-coronation.cord.y].state = 'neutral'
        state.board[7-coronation.init.x][7-coronation.init.y].piece={name:'',url:''}
        state.board[7-coronation.init.x][7-coronation.init.y].propiety = ''
        state.board[7-coronation.init.x][7-coronation.init.y].state = 'neutral'
        state.yourTurn = true
    },
    showMovements(store,name){
        switch(name){
            case 'pawn':
                if(store.selected.x === 6){
                    if(store.board[store.selected.x-2][store.selected.y].propiety===''){
                        if( checkIllegal(store,{'x':store.selected.x-2,'y':store.selected.y})){
                            store.board[store.selected.x-2][store.selected.y].state='movement'
                            store.movements.push({x:store.selected.x-2,y:store.selected.y})   
                        }
                    }    
                }
                if(store.enPassant){
                    if(store.selected.y-1>=0&&(store.board[store.selected.x][store.selected.y-1].propiety==='other'&&store.board[store.selected.x][store.selected.y-1].piece.name==='pawn'&&store.selected.y-1===store.passantCord.y)){
                        if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y-1})){
                            store.board[store.selected.x-1][store.selected.y-1].state='movement'
                            store.movements.push({x:store.selected.x-1,y:store.selected.y-1})
                        }
                    }
                    if(store.selected.y+1<8&&(store.board[store.selected.x][store.selected.y+1].propiety==='other'&&store.board[store.selected.x][store.selected.y+1].piece.name==='pawn'&&store.selected.y+1===store.passantCord.y)){
                        if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y+1})){
                            store.board[store.selected.x-1][store.selected.y+1].state='movement'
                            store.movements.push({x:store.selected.x-1,y:store.selected.y+1})
                        }
                    }
                }
                if(store.selected.y-1>=0&&store.board[store.selected.x-1][store.selected.y-1].propiety==='other'){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y-1})){
                    store.board[store.selected.x-1][store.selected.y-1].state='movement'
                    store.movements.push({x:store.selected.x-1,y:store.selected.y-1})
                    }
                }
                if(store.selected.y+1<8&&store.board[store.selected.x-1][store.selected.y+1].propiety==='other'){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y+1})){
                        store.board[store.selected.x-1][store.selected.y+1].state='movement'
                        store.movements.push({x:store.selected.x-1,y:store.selected.y+1})
                    }                        
                }
                if(store.board[store.selected.x-1][store.selected.y].propiety===''){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y})){
                        store.board[store.selected.x-1][store.selected.y].state='movement'
                        store.movements.push({x:store.selected.x-1,y:store.selected.y})
                    }
                }    
            break
            case 'horse':
                //moves
                if(store.selected.x>1&&store.selected.y>0&&store.board[store.selected.x-2][store.selected.y-1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x-2,'y':store.selected.y-1})){
                        store.board[store.selected.x-2][store.selected.y-1].state='movement'
                        store.movements.push({x:store.selected.x-2,y:store.selected.y-1})
                    }
                }
                if(store.selected.x>1&&store.selected.y<7&&store.board[store.selected.x-2][store.selected.y+1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x-2,'y':store.selected.y+1})){
                        store.board[store.selected.x-2][store.selected.y+1].state='movement'
                        store.movements.push({x:store.selected.x-2,y:store.selected.y+1})
                    }
                }
                if(store.selected.x>0&&store.selected.y>1&&store.board[store.selected.x-1][store.selected.y-2].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y-2})){
                        store.board[store.selected.x-1][store.selected.y-2].state='movement'
                        store.movements.push({x:store.selected.x-1,y:store.selected.y-2})
                    }               
                }
                if(store.selected.x>0&&store.selected.y<6&&store.board[store.selected.x-1][store.selected.y+2].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y+2})){
                        store.board[store.selected.x-1][store.selected.y+2].state='movement'
                        store.movements.push({x:store.selected.x-1,y:store.selected.y+2})
                    }
                }
                //inverse moves
                if(store.selected.x<6&&store.selected.y<7&&store.board[store.selected.x+2][store.selected.y+1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x+2,'y':store.selected.y+1})){
                        store.board[store.selected.x+2][store.selected.y+1].state='movement'
                        store.movements.push({x:store.selected.x+2,y:store.selected.y+1})
                    }
                }
                if(store.selected.x<6&&store.selected.y>0&&store.board[store.selected.x+2][store.selected.y-1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x+2,'y':store.selected.y-1})){
                        store.board[store.selected.x+2][store.selected.y-1].state='movement'
                        store.movements.push({x:store.selected.x+2,y:store.selected.y-1})
                    }
                }
                if(store.selected.x<7&&store.selected.y<6&&store.board[store.selected.x+1][store.selected.y+2].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x+1,'y':store.selected.y+2})){
                        store.board[store.selected.x+1][store.selected.y+2].state='movement'
                        store.movements.push({x:store.selected.x+1,y:store.selected.y+2})
                    }
                }
                if(store.selected.x<7&&store.selected.y>1&&store.board[store.selected.x+1][store.selected.y-2].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x+1,'y':store.selected.y-2})){
                        store.board[store.selected.x+1][store.selected.y-2].state='movement'
                        store.movements.push({x:store.selected.x+1,y:store.selected.y-2})
                    }
                }
            break
            case 'bishop':
                let count = 1
                for(let i = store.selected.x-1; i>=0; i--){
                    if(store.selected.y+count<8&&store.board[i][store.selected.y+count].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y+count})){
                            store.board[i][store.selected.y+count].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y+count})
                        }
                        if(store.board[i][store.selected.y+count].propiety==='other'){
                            i = -1
                        }
                        count++
                    }else{
                        i = -1
                    }
                }
                count = 1
                for(let i = store.selected.x-1; i>=0; i--){
                    if(store.selected.y-count>=0&&store.board[i][store.selected.y-count].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y-count})){
                            store.board[i][store.selected.y-count].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y-count})
                        }
                        if(store.board[i][store.selected.y-count].propiety==='other'){
                            i = -1
                        }
                        count++
                    }else{
                        i = -1
                    }
                }
                count = 1
                for(let i = store.selected.x+1; i<8; i++){
                    if(store.selected.y+count<8&&store.board[i][store.selected.y+count].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y+count})){
                            store.board[i][store.selected.y+count].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y+count})
                        }
                        if(store.board[i][store.selected.y+count].propiety==='other'){
                            i = 8
                        }
                        count++
                    }else{
                        i = 8
                    }
                }
                count = 1
                for(let i = store.selected.x+1; i<8; i++){
                    if(store.selected.y-count>=0&&store.board[i][store.selected.y-count].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y-count})){
                            store.board[i][store.selected.y-count].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y-count})
                        }
                        if(store.board[i][store.selected.y-count].propiety==='other'){
                            i = 8
                        }
                        count++
                    }else{
                        i = 8
                    }
                }
            break
            case 'tower':
                for(let i = store.selected.x+1; i<8; i++){
                    if(store.board[i][store.selected.y].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y})){
                            store.board[i][store.selected.y].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y})
                        }
                        if(store.board[i][store.selected.y].propiety==='other'){
                            i = 8
                        }
                    }else{
                        i = 8
                    }
                }
                for(let i = store.selected.x-1; i>=0; i--){
                    if(store.board[i][store.selected.y].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y})){
                            store.board[i][store.selected.y].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y})
                        } 
                        if(store.board[i][store.selected.y].propiety==='other'){
                            i = 0
                        }
                    }else{
                        i = 0
                    }
                }
                for(let i = store.selected.y+1; i<8; i++){
                    if(store.board[store.selected.x][i].propiety!=='mine'){
                        if(checkIllegal(store,{'x':store.selected.x,'y':i})){
                            store.board[store.selected.x][i].state = 'movement'
                            store.movements.push({x:store.selected.x,y:i})
                        }
                       
                        if(store.board[store.selected.x][i].propiety==='other'){
                            i = 8
                        }
                    }else{
                        i = 8
                    }
                }
                for(let i = store.selected.y-1; i>=0; i--){
                    if(store.board[store.selected.x][i].propiety!=='mine'){
                        if(checkIllegal(store,{'x':store.selected.x,'y':i})){
                            store.board[store.selected.x][i].state = 'movement'
                            store.movements.push({x:store.selected.x,y:i})
                        }
                        if(store.board[store.selected.x][i].propiety==='other'){
                            i = 0
                        }
                    }else{
                        i = 0
                    }
                }
            break
            case 'queen':
                for(let i = store.selected.x+1; i<8; i++){
                    if(store.board[i][store.selected.y].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y})){
                            store.board[i][store.selected.y].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y})
                        }
                        if(store.board[i][store.selected.y].propiety==='other'){
                            i = 8
                        }
                    }else{
                        i = 8
                    }
                }
                for(let i = store.selected.x-1; i>=0; i--){
                    if(store.board[i][store.selected.y].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y})){
                            store.board[i][store.selected.y].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y})
                        } 
                        if(store.board[i][store.selected.y].propiety==='other'){
                            i = 0
                        }
                    }else{
                        i = 0
                    }
                }
                for(let i = store.selected.y+1; i<8; i++){
                    if(store.board[store.selected.x][i].propiety!=='mine'){
                        if(checkIllegal(store,{'x':store.selected.x,'y':i})){
                            store.board[store.selected.x][i].state = 'movement'
                            store.movements.push({x:store.selected.x,y:i})
                        }
                       
                        if(store.board[store.selected.x][i].propiety==='other'){
                            i = 8
                        }
                    }else{
                        i = 8
                    }
                }
                for(let i = store.selected.y-1; i>=0; i--){
                    if(store.board[store.selected.x][i].propiety!=='mine'){
                        if(checkIllegal(store,{'x':store.selected.x,'y':i})){
                            store.board[store.selected.x][i].state = 'movement'
                            store.movements.push({x:store.selected.x,y:i})
                        }
                        if(store.board[store.selected.x][i].propiety==='other'){
                            i = 0
                        }
                    }else{
                        i = 0
                    }
                }
                let count2 = 1
                for(let i = store.selected.x-1; i>=0; i--){
                    if(store.selected.y+count2<8&&store.board[i][store.selected.y+count2].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y+count2})){
                            store.board[i][store.selected.y+count2].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y+count2})
                        }
                        if(store.board[i][store.selected.y+count2].propiety==='other'){
                            i = 0
                        }
                        count2++
                    }else{
                        i = 0
                    }
                }
                count2 = 1
                for(let i = store.selected.x-1; i>=0; i--){
                    if(store.selected.y-count2>=0&&store.board[i][store.selected.y-count2].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y-count2})){
                            store.board[i][store.selected.y-count2].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y-count2})
                        }
                        if(store.board[i][store.selected.y-count2].propiety==='other'){
                            i = 0
                        }
                        count2++
                    }else{
                        i = 0
                    }
                }
                count2 = 1
                for(let i = store.selected.x+1; i<8; i++){
                    if(store.selected.y+count2<8&&store.board[i][store.selected.y+count2].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y+count2})){
                            store.board[i][store.selected.y+count2].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y+count2})
                        }
                        if(store.board[i][store.selected.y+count2].propiety==='other'){
                            i = 8
                        }
                        count2++
                    }else{
                        i = 8
                    }
                }
                count2 = 1
                for(let i = store.selected.x+1; i<8; i++){
                    if(store.selected.y-count2>=0&&store.board[i][store.selected.y-count2].propiety!=='mine'){
                        if(checkIllegal(store,{'x':i,'y':store.selected.y-count2})){
                            store.board[i][store.selected.y-count2].state = 'movement'
                            store.movements.push({x:i,y:store.selected.y-count2})
                        }
                        if(store.board[i][store.selected.y-count2].propiety==='other'){
                            i = 8
                        }
                        count2++
                    }else{
                        i = 8
                    }
                }
            break
            case 'king':
                if(store.castling.left||store.castling.right){
                    if(store.playerColour==='white'){
                        if(store.castling.right){
                            if(store.board[store.selected.x][store.selected.y+1].piece.name===''&&store.board[store.selected.x][store.selected.y+2].piece.name===''){
                                if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y+2},'right')){
                                    store.board[store.selected.x][store.selected.y+3].state = 'movement'
                                    store.movements.push({x:store.selected.x,y:store.selected.y+3})
                                }
                            }
                        }
                        if(store.castling.left){
                            if(store.board[store.selected.x][store.selected.y-1].piece.name===''&&store.board[store.selected.x][store.selected.y-2].piece.name===''&&store.board[store.selected.x][store.selected.y-3].piece.name===''){
                                if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y-2},'left')){
                                    store.board[store.selected.x][store.selected.y-4].state = 'movement'
                                    store.movements.push({x:store.selected.x,y:store.selected.y-4})
                                }
                            }
                        }       
                    }else{
                        if(store.castling.left){
                            if(store.board[store.selected.x][store.selected.y-1].piece.name===''&&store.board[store.selected.x][store.selected.y-2].piece.name===''){
                                if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y-2},'left')){
                                    store.board[store.selected.x][store.selected.y-3].state = 'movement'
                                    store.movements.push({x:store.selected.x,y:store.selected.y-3})
                                }
                            }
                        }
                        if(store.castling.right){
                            if(store.board[store.selected.x][store.selected.y+1].piece.name===''&&store.board[store.selected.x][store.selected.y+2].piece.name===''&&store.board[store.selected.x][store.selected.y+3].piece.name===''){
                                if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y+2},'right')){
                                    store.board[store.selected.x][store.selected.y+4].state = 'movement'
                                    store.movements.push({x:store.selected.x,y:store.selected.y+4})
                                }
                            }
                        }   
                    }         
                }
                if(store.selected.x<7&&store.board[store.selected.x+1][store.selected.y].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x+1,'y':store.selected.y})){
                        store.board[store.selected.x+1][store.selected.y].state = 'movement'
                        store.movements.push({x:store.selected.x+1,y:store.selected.y})
                    }
                }
                if(store.selected.x>0&&store.board[store.selected.x-1][store.selected.y].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y})){
                        store.board[store.selected.x-1][store.selected.y].state = 'movement'
                        store.movements.push({x:store.selected.x-1,y:store.selected.y})
                    }
                }
                if(store.selected.y<7&&store.board[store.selected.x][store.selected.y+1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y+1})){
                        store.board[store.selected.x][store.selected.y+1].state = 'movement'
                        store.movements.push({x:store.selected.x,y:store.selected.y+1})
                    }
                }
                if(store.selected.y>0&&store.board[store.selected.x][store.selected.y-1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y-1})){
                        store.board[store.selected.x][store.selected.y-1].state = 'movement'
                        store.movements.push({x:store.selected.x,y:store.selected.y-1})
                    }
              
                }
                if(store.selected.x>0&&store.selected.y>0&&store.board[store.selected.x-1][store.selected.y-1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y-1})){
                        store.board[store.selected.x-1][store.selected.y-1].state = 'movement'
                        store.movements.push({x:store.selected.x-1,y:store.selected.y-1})
                    }
                }
                if(store.selected.x<7&&store.selected.y<7&&store.board[store.selected.x+1][store.selected.y+1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x+1,'y':store.selected.y+1})){
                        store.board[store.selected.x+1][store.selected.y+1].state = 'movement'
                        store.movements.push({x:store.selected.x+1,y:store.selected.y+1})
                    }               
                }
                if(store.selected.x>0&&store.selected.y<7&&store.board[store.selected.x-1][store.selected.y+1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y+1})){
                        store.board[store.selected.x-1][store.selected.y+1].state = 'movement'
                        store.movements.push({x:store.selected.x-1,y:store.selected.y+1})
                    }
                }
                if(store.selected.x<7&&store.selected.y>0&&store.board[store.selected.x+1][store.selected.y-1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x+1,'y':store.selected.y-1})){
                        store.board[store.selected.x+1][store.selected.y-1].state = 'movement'
                        store.movements.push({x:store.selected.x+1,y:store.selected.y-1})
                    }
                }
              
            break
        }
    },
    setDraw(store){
        store.draw=true
    },
    checkLose(store){
        let lose = true
        for(let i = 0; i < store.board.length; i++){
            for(let j = 0; j < store.board[i].length; j++){
                if(store.board[i][j].propiety === 'mine'){
                    store.selected.x=i
                    store.selected.y=j
                    switch(store.board[i][j].piece.name){
                        case 'queen':
                            for(let x = store.selected.x+1; x<8; x++){
                                if(store.board[x][store.selected.y].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':x,'y':store.selected.y})){
                                             lose = false  
                                                                            
                                    }
                                    if(store.board[x][store.selected.y].propiety==='other'){
                                        x = 8
                                    }
                                }else{
                                    x = 8
                                }
                            }
                            for(let x = store.selected.x-1; x>=0; x--){
                                if(store.board[x][store.selected.y].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':x,'y':store.selected.y})){              
                                             lose = false  
                                                                            
                                    } 
                                    if(store.board[x][store.selected.y].propiety==='other'){
                                        x = 0
                                    }
                                }else{
                                    x = 0
                                }
                            }
                            for(let x = store.selected.y+1; x<8; x++){
                                if(store.board[store.selected.x][x].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':store.selected.x,'y':x})){
                                       
                                             lose = false 
                                                                             
                                    }
                                   
                                    if(store.board[store.selected.x][x].propiety==='other'){
                                        x = 8
                                    }
                                }else{
                                    x = 8
                                }
                            }
                            for(let x = store.selected.y-1; x>=0; x--){
                                if(store.board[store.selected.x][x].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':store.selected.x,'y':x})){
                                       
                                             lose = false 
                                                                             
                                    }
                                    if(store.board[store.selected.x][x].propiety==='other'){
                                        x = 0
                                    }
                                }else{
                                    x = 0
                                }
                            }
                            let count = 1
                            for(let x = store.selected.x-1; x>=0; x--){
                                if(store.selected.y+count<8&&store.board[x][store.selected.y+count].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':x,'y':store.selected.y+count})){
                                       
                                             lose = false 
                                                                             
                                    }
                                    if(store.board[x][store.selected.y+count].propiety==='other'){
                                        x = 0
                                    }
                                    count++
                                }else{
                                    x = 0
                                }
                            }
                            count = 1
                            for(let x = store.selected.x-1; x>=0; x--){
                                if(store.selected.y-count>=0&&store.board[x][store.selected.y-count].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':x,'y':store.selected.y-count})){
                                       
                                             lose = false  
                                                                            
                                    }
                                    if(store.board[x][store.selected.y-count].propiety==='other'){
                                        x = 0
                                    }
                                    count++
                                }else{
                                    x = 0
                                }
                            }
                            count = 1
                            for(let x = store.selected.x+1; x<8; x++){
                                if(store.selected.y+count<8&&store.board[x][store.selected.y+count].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':x,'y':store.selected.y+count})){
                                       
                                             lose = false  
                                                                            
                                    }
                                    if(store.board[x][store.selected.y+count].propiety==='other'){
                                        x = 8
                                    }
                                    count++
                                }else{
                                    x = 8
                                }
                            }
                            count = 1
                            for(let x = store.selected.x+1; x<8; x++){
                                if(store.selected.y-count>=0&&store.board[x][store.selected.y-count].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':x,'y':store.selected.y-count})){
                                       
                                             lose = false 
                                                                             
                                        
                                    }
                                    if(store.board[x][store.selected.y-count].propiety==='other'){
                                        x = 8
                                    }
                                    count++
                                }else{
                                    x = 8
                                }
                            }
                        break
                        case 'pawn':
                            if(store.selected.x === 6){
                                if(store.board[store.selected.x-2][store.selected.y].propiety===''){
                                    if( checkIllegal(store,{'x':store.selected.x-2,'y':store.selected.y})){
                                       
                                             lose = false  
                                                                                  
                                    }
                                }    
                            }
                            if(store.enPassant){
                                if(store.selected.y-1>=0&&(store.board[store.selected.x][store.selected.y-1].propiety==='other'&&store.board[store.selected.x][store.selected.y-1].piece.name==='pawn'&&store.selected.y-1===store.passantCord.y)){
                                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y-1})){
                                       
                                             lose = false  
                                                                               
                                    }
                                }
                                if(store.selected.y+1<8&&(store.board[store.selected.x][store.selected.y+1].propiety==='other'&&store.board[store.selected.x][store.selected.y+1].piece.name==='pawn'&&store.selected.y+1===store.passantCord.y)){
                                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y+1})){
                                       
                                             lose = false  
                                                                               
                                    }
                                }
                            }
                            if(store.selected.y-1>=0&&store.board[store.selected.x-1][store.selected.y-1].propiety==='other'){
                                if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y-1})){
                                   
                                         lose = false  
                                                                           
                                }
                            }
                            if(store.selected.y+1<8&&store.board[store.selected.x-1][store.selected.y+1].propiety==='other'){
                                if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y+1})){
                                   
                                         lose = false  
                                                                           
                                }                        
                            }
                            if(store.board[store.selected.x-1][store.selected.y].propiety===''){
                                if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y})){
                                   
                                         lose = false  
                                                                           
                                }
                            }    
                        break
                        case 'horse':
                            //moves
                            if(store.selected.x>1&&store.selected.y>0&&store.board[store.selected.x-2][store.selected.y-1].propiety!=='mine'){
                                if(checkIllegal(store,{'x':store.selected.x-2,'y':store.selected.y-1})){
                                
                                          lose = false  
                                                                                          
                                }
                            }
                            if(store.selected.x>1&&store.selected.y<7&&store.board[store.selected.x-2][store.selected.y+1].propiety!=='mine'){
                                if(checkIllegal(store,{'x':store.selected.x-2,'y':store.selected.y+1})){
                                
                                         lose = false  
                                                                                          
                                }
                            }
                            if(store.selected.x>0&&store.selected.y>1&&store.board[store.selected.x-1][store.selected.y-2].propiety!=='mine'){
                                if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y-2})){
                                
                                         lose = false  
                                                                        
                                                    
                                }               
                            }
                            if(store.selected.x>0&&store.selected.y<6&&store.board[store.selected.x-1][store.selected.y+2].propiety!=='mine'){
                                if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y+2})){
                                
                                         lose = false  
                                                                        
                                                    
                                }
                            }
                            //inverse moves
                            if(store.selected.x<6&&store.selected.y<7&&store.board[store.selected.x+2][store.selected.y+1].propiety!=='mine'){
                                if(checkIllegal(store,{'x':store.selected.x+2,'y':store.selected.y+1})){
                                
                                         lose = false  
                                                                        
                                                    
                                }
                            }
                            if(store.selected.x<6&&store.selected.y>0&&store.board[store.selected.x+2][store.selected.y-1].propiety!=='mine'){
                                if(checkIllegal(store,{'x':store.selected.x+2,'y':store.selected.y-1})){
                                
                                         lose = false  
                                                                        
                                                    
                                }
                            }
                            if(store.selected.x<7&&store.selected.y<6&&store.board[store.selected.x+1][store.selected.y+2].propiety!=='mine'){
                                if(checkIllegal(store,{'x':store.selected.x+1,'y':store.selected.y+2})){
                                
                                         lose = false  
                                                                        
                                                    
                                }
                            }
                            if(store.selected.x<7&&store.selected.y>1&&store.board[store.selected.x+1][store.selected.y-2].propiety!=='mine'){
                                if(checkIllegal(store,{'x':store.selected.x+1,'y':store.selected.y-2})){
                                
                                         lose = false  
                                                                        
                                                    
                                }
                            }
                        break
                        case 'bishop':
                            let count2 = 1
                                        for(let x = store.selected.x-1; x>=0; x--){
                                            if(store.selected.y+count2<8&&store.board[x][store.selected.y+count2].propiety!=='mine'){
                                                if(checkIllegal(store,{'x':x,'y':store.selected.y+count2})){
                                                
                                                         lose = false  
                                                                                        
                                                }
                                                if(store.board[x][store.selected.y+count2].propiety==='other'){
                                                    x = 0
                                                }
                                                count2++
                                            }else{
                                                x = 0
                                            }
                                        }
                                        count2 = 1
                                        for(let x = store.selected.x-1; x>=0; x--){
                                            if(store.selected.y-count2>=0&&store.board[x][store.selected.y-count2].propiety!=='mine'){
                                                if(checkIllegal(store,{'x':x,'y':store.selected.y-count2})){
                                                
                                                         lose = false  
                                                                                        
                                                }
                                                if(store.board[x][store.selected.y-count2].propiety==='other'){
                                                    x = 0
                                                }
                                                count2++
                                            }else{
                                                x = 0
                                            }
                                        }
                                        count2 = 1
                                        for(let x = store.selected.x+1; x<8; x++){
                                            if(store.selected.y+count2<8&&store.board[x][store.selected.y+count2].propiety!=='mine'){
                                                if(checkIllegal(store,{'x':x,'y':store.selected.y+count2})){
                                                
                                                         lose = false  
                                                                                        
                                                }
                                                if(store.board[x][store.selected.y+count2].propiety==='other'){
                                                    x = 8
                                                }
                                                count2++
                                            }else{
                                                x = 8
                                            }
                                        }
                                        count2 = 1
                                        for(let x = store.selected.x+1; x<8; x++){
                                            if(store.selected.y-count2>=0&&store.board[x][store.selected.y-count2].propiety!=='mine'){
                                                if(checkIllegal(store,{'x':x,'y':store.selected.y-count2})){
                                                
                                                         lose = false  
                                                                                        
                                                    
                                                }
                                                if(store.board[x][store.selected.y-count2].propiety==='other'){
                                                    x = 8
                                                }
                                                count2++
                                            }else{
                                                x = 8
                                            }
                                        }
                        break
                        case 'tower':
                            for(let x = store.selected.x+1; x<8; x++){
                                if(store.board[x][store.selected.y].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':x,'y':store.selected.y})){
                                    
                                             lose = false  
                                                                            
                                    }
                                    if(store.board[x][store.selected.y].propiety==='other'){
                                        x = 8
                                    }
                                }else{
                                    x = 8
                                }
                            }
                            for(let x = store.selected.x-1; x>=0; x--){
                                if(store.board[x][store.selected.y].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':x,'y':store.selected.y})){
                                    
                                             lose = false  
                                                                            
                                    } 
                                    if(store.board[x][store.selected.y].propiety==='other'){
                                        x = 0
                                    }
                                }else{
                                    x = 0
                                }
                            }
                            for(let x = store.selected.y+1; x<8; x++){
                                if(store.board[store.selected.x][x].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':store.selected.x,'y':x})){
                                    
                                             lose = false  
                                                                            
                                    }
                                
                                    if(store.board[store.selected.x][x].propiety==='other'){
                                        x = 8
                                    }
                                }else{
                                    x = 8
                                }
                            }
                            for(let x = store.selected.y-1; x>=0; x--){
                                if(store.board[store.selected.x][x].propiety!=='mine'){
                                    if(checkIllegal(store,{'x':store.selected.x,'y':x})){
                                    
                                             lose = false  
                                                                            
                                    }
                                    if(store.board[store.selected.x][x].propiety==='other'){
                                        x = 0
                                    }
                                }else{
                                    x = 0
                                }
                            }
                        break
                        case 'king':
                if(store.castling.left||store.castling.right){
                    if(store.playerColour==='white'){
                        if(store.castling.right){
                            if(store.board[store.selected.x][store.selected.y+1].piece.name===''&&store.board[store.selected.x][store.selected.y+2].piece.name===''){
                                if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y+2},'right')){
                                         lose = false  
                                                                        
                                }
                            }
                        }
                        if(store.castling.left){
                            if(store.board[store.selected.x][store.selected.y-1].piece.name===''&&store.board[store.selected.x][store.selected.y-2].piece.name===''&&store.board[store.selected.x][store.selected.y-3].piece.name===''){
                                if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y-2},'left')){
                                         lose = false  
                                                                        
                                }
                            }
                        }       
                    }else{
                        if(store.castling.left){
                            if(store.board[store.selected.x][store.selected.y-1].piece.name===''&&store.board[store.selected.x][store.selected.y-2].piece.name===''){
                                if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y-2},'left')){
                                         lose = false  
                                                                        
                                }
                            }
                        }
                        if(store.castling.right){
                            if(store.board[store.selected.x][store.selected.y+1].piece.name===''&&store.board[store.selected.x][store.selected.y+2].piece.name===''&&store.board[store.selected.x][store.selected.y+3].piece.name===''){
                                if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y+2},'right')){
                                         lose = false  
                                                                        
                                }
                            }
                        }   
                    }         
                }
                if(store.selected.x<7&&store.board[store.selected.x+1][store.selected.y].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x+1,'y':store.selected.y})){
                             lose = false  
                                                            
                    }
                }
                if(store.selected.x>0&&store.board[store.selected.x-1][store.selected.y].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y})){
                             lose = false 
                             
                                                            
                    }
                }
                if(store.selected.y<7&&store.board[store.selected.x][store.selected.y+1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y+1})){
                             lose = false 
                                                             
                    }
                }
                if(store.selected.y>0&&store.board[store.selected.x][store.selected.y-1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x,'y':store.selected.y-1})){
                             lose = false  
                                                            
                    }
              
                }
                if(store.selected.x>0&&store.selected.y>0&&store.board[store.selected.x-1][store.selected.y-1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y-1})){
                             lose = false 
                                                             
                    }
                }
                if(store.selected.x<7&&store.selected.y<7&&store.board[store.selected.x+1][store.selected.y+1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x+1,'y':store.selected.y+1})){
                             lose = false 
                                                             
                    }               
                }
                if(store.selected.x>0&&store.selected.y<7&&store.board[store.selected.x-1][store.selected.y+1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x-1,'y':store.selected.y+1})){
                             lose = false  
                                                            
                    }
                }
                if(store.selected.x<7&&store.selected.y>0&&store.board[store.selected.x+1][store.selected.y-1].propiety!=='mine'){
                    if(checkIllegal(store,{'x':store.selected.x+1,'y':store.selected.y-1})){
                             lose = false  
                                                            
                    }

                }
            break
            }
        }
    }
    }
    if(lose){
        if(store.jaque){
            store.lose = true
        }else{
            store.draw = true
        }   
    }
    },
    resetStore(store){
        store.inGame= false,
        store.playerColour= '',
        store.yourTurn= false,
        //pieces states= neutral,selected,movement 
        //example= {state='neutral',piece={name='',url=''}}
        store.board=[[],[],[],[],[],[],[],[]],
        store.selected= {x:0,y:0},
        store.movements=[],
        store.enemyMovements=[],
        store.game={},
        store.queue= false,
        store.yourTurn= false,
        store.enPassant= false,
        store.passant= {x:0,y:0},
        store.passantCord= {x:0,y:0},
        store.castling= {left:true,right:true},
        store.castlingMovements=[],
        store.coronation= false,
        store.coronationPosition= {x:undefined,y:undefined},
        store.coronationInit= {x:undefined,y:undefined},
        store.doingJaque= false,
        store.win= false,
        store.lose= false,
        store.draw= false,
        store.jaque = false,
        store.time = 0,
        store.otherTime = 0
    }
}