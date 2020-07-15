import{SING_IN,SING_OUT,
       CREAT_STREAM,
       FETCH_SREAMS,
       FETCH_SREAM,
       UPDATE_SREAM,
       DELETE_SREAM
    } from '../Type'
import history from '../history'
import api from '../streams/api'

export const signIn=(id)=>{
    return{
        type:SING_IN,
        payload:id
    }
}

export const signOut=()=>{
    return{
        type:SING_OUT
    }
}

export const creatStream=(formValues)=>async (dispatch,getState)=>{
    const currentId = getState().auth.currentId;
 const response = await api.post('/streams',{...formValues,currentId});
 dispatch({
     type:CREAT_STREAM,
     payload:response.data
 })
 history.push('/');
}
export const fetchStreams=()=>async dispatch=>{
    const response =await api.get('/streams');
    dispatch({
        type:FETCH_SREAMS,
        payload:response.data
    })
}
export const fetchStream=(id)=>async dispatch=>{
    const response =await api.get(`/streams/${id}`);
    dispatch({
        type:FETCH_SREAM,
        payload:response.data
    })
}
export const updateStream=(id,formValues)=> async dispatch=>{
    const response=await api.patch(`/streams/${id}`,formValues);
    dispatch({
        type:UPDATE_SREAM,
        payload:response.data
    })
    history.push('/');
}
export const deleteStream=(id)=>async dispatch=>{
        await api.delete(`/streams/${id}`);
        dispatch({
            type:DELETE_SREAM,
            payload:id
        })
        history.push('/');
    }
