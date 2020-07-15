import _ from 'lodash';
import {DELETE_SREAM,
        CREAT_STREAM,
        FETCH_SREAMS,
        FETCH_SREAM,
        UPDATE_SREAM} from '../Type';


export default (state={},action)=>{
    switch(action.type){
        case FETCH_SREAMS:
            return {...state,..._.mapKeys(action.payload,'id')}
        case CREAT_STREAM:
            return {...state,[action.payload.id]:action.payload}
        case FETCH_SREAM:
            return {...state,[action.payload.id]:action.payload}
        case UPDATE_SREAM:
            return {...state,[action.payload.id]:action.payload}
        case DELETE_SREAM :
            return _.omit(state,action.payload)
        default :
    return state
    }
}