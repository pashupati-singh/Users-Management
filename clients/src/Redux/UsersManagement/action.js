


import axios from 'axios'
import { USERFAILURE, USERREQUEST, USERSDELETE, USERSGET, USERSPATCH, USERSPOST } from './actionType'

export const USERSGETFUN = (page) => (dispatch) =>{
    dispatch({type:USERREQUEST});
    axios.get(`http://localhost:8080/users?page=${page}`)
    .then((res)=>dispatch({type:USERSGET,payload:res.data}))
    .catch(()=>dispatch({type:USERFAILURE}))
}

export const USERSADDFUN = (obj) => (dispatch) =>{
    dispatch({type:USERREQUEST});
    axios.post(`http://localhost:8080/users/`,obj)
    .then((res)=>dispatch({type:USERSPOST,payload:res.data}))
    .catch(()=>dispatch({type:USERFAILURE}))
}

export const USERSUPDATEFUN = (formData,id) => (dispatch) =>{
    dispatch({type:USERREQUEST});
    axios.patch(`http://localhost:8080/users/${id}`,formData)
    .then((res)=>{
        alert(res.data.msg);
        dispatch({type:USERSPATCH,payload:res.data})
    })
    .catch(()=>dispatch({type:USERFAILURE}))
}

export const USERSDELETEFUN = (id) => (dispatch) =>{
    dispatch({type:USERREQUEST});
    axios.delete(`http://localhost:8080/users/${id}`)
    .then((res)=>{
        alert(res.data.msg);
        dispatch({type:USERSDELETE,payload:res.data})
    })
    .catch(()=>dispatch({type:USERFAILURE}))
}

