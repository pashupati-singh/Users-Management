import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { USERSDELETEFUN, USERSGETFUN } from '../Redux/UsersManagement/action';
import { Pagination } from '../Components/Pagination';
import { UsersList } from '../Components/UsersList';
import style from "../CSS/Home.module.css"
export const Home = () => {
    const dispatch = useDispatch();
    const [page,setPage] = useState(1);
    const {users} = useSelector((store)=>store.userReducer)
    const [delte,setDelete] = useState(false)


     const FetchData = async (page) =>{
        dispatch(USERSGETFUN(page))
     } 

     const handlePage = (value) =>{
        setPage((page)=>page+value)
     }

     const handleDelete = (id)=>{
        dispatch(USERSDELETEFUN(id))
        setDelete(!delte)
       FetchData(page)
     }

useEffect(()=>{ 
    FetchData(page)
},[page,delte])

  return (
    <>
    <div className={style.parent}>
    {users.map((el) =>(
        <div key={el._id} >
            <UsersList handleDelete = {handleDelete} {...el} />
        </div>
    ))}
    </div>
    
    <Pagination page = {page} handlePage = {handlePage} />
    </>
  )
}
