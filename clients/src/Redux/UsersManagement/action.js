


import axios from 'axios'
import { USERFAILURE, USERREQUEST, USERSDELETE, USERSGET, USERSPATCH, USERSPOST } from './actionType'

export const USERSGETFUN = (page) => (dispatch) =>{
    dispatch({type:USERREQUEST});
    axios.get(`https://users-management-1.onrender.com/users?page=${page}`)
    .then((res)=>dispatch({type:USERSGET,payload:res.data}))
    .catch(()=>dispatch({type:USERFAILURE}))
}

export const USERSADDFUN = (obj) => (dispatch) =>{
    dispatch({type:USERREQUEST});
    axios.post(`https://users-management-1.onrender.com/users/`,obj)
    .then((res)=>{
        alert(res.data.msg);
        dispatch({type:USERSPOST,payload:res.data})
    })
    .catch(()=>dispatch({type:USERFAILURE}))
}

export const USERSUPDATEFUN = (formData,id) => (dispatch) =>{
    dispatch({type:USERREQUEST});
    axios.patch(`https://users-management-1.onrender.com/users/${id}`,formData)
    .then((res)=>{
        dispatch({type:USERSPATCH,payload:res.data})
    })
    .catch(()=>dispatch({type:USERFAILURE}))
}

export const USERSDELETEFUN = (id) => (dispatch) =>{
    dispatch({type:USERREQUEST});
    axios.delete(`https://users-management-1.onrender.com/users/${id}`)
    .then((res)=>{
        alert(res.data.msg);
        dispatch({type:USERSDELETE,payload:res.data})
    })
    .catch(()=>dispatch({type:USERFAILURE}))
}

