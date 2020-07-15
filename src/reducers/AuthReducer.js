import{SING_IN,SING_OUT} from '../Type'
const INIT_AUTH={
    isSignedIn :null,
    currentId:null
}
export default (state=INIT_AUTH,action)=>{
switch (action.type){
    case SING_IN:
        return {...state, isSignedIn:true ,currentId:action.payload}
    case SING_OUT:
            return {...state, isSignedIn:false ,currentId:null}
    default:
        return state
}
    
}