import { USERFAILURE, USERREQUEST, USERSDELETE, USERSGET, USERSPATCH, USERSPOST } from "./actionType";

const initialState = {
    isLoading: false,
    isError: false,
    users: [],
    delete:"",
    update:"",
    add:"",
    addUser : false,
    lastPage : ""
}

export const reducer = (state = initialState , action) => {
    switch(action.type){
        case USERREQUEST : return {...state , isLoading : true}
        case USERSGET : return {...state , isLoading : false , users : action.payload.users,lastPage : action.payload.totalPages}
        case USERSPOST : return {...state,isLoading : false ,addUser: action.payload.user , add :action.payload.msg}
        case USERSDELETE : return {...state , isLoading : false , delete : action.payload.msg}
        case USERSPATCH : return {...state,isLoading:false , update:action.payload.msg}
        case USERFAILURE : return {...state , isError : true};
        default : return state;
    }
}