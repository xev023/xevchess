import {createStore} from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
const state = {
    logged: false,
    username: 'Guest',
    inGame: false,
    playerColour: '',
    yourTurn: false,
    //pieces states: neutral,selected,movement 
    //example: {state:'neutral',piece:{name:'',url:''}}
    board:[[],[],[],[],[],[],[],[]],
    selected: {x:0,y:0},
    movements:[],
    enemyMovements:[],
    game:{},
    queue: false,
    inGame: false,
    yourTurn: false,
    enPassant: false,
    passant: {x:0,y:0},
    passantCord: {x:0,y:0},
    castling: {left:true,right:true},
    castlingMovements:[],
    coronation: false,
    coronationPosition: {x:undefined,y:undefined},
    coronationInit: {x:undefined,y:undefined},
    doingJaque: false,
    win: false,
    lose: false,
    draw: false,
    jaque: false,
    time: 0,
    otherTime: 0,
    avatar: '/assets/defaultAvatar.png'
}
export default createStore({
state,
getters,
actions,
mutations
})