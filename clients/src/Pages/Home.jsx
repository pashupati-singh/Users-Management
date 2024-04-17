import React, { useEffect, useState } from 'react'
import { Pagination } from '../Components/Pagination';
import { UsersList } from '../Components/UsersList';
import style from "../CSS/Home.module.css"
import { Skeleton } from '../Components/Skeleton';
import { AddUser } from '../Components/AddUser';
import { Updateusers } from '../Components/Updateusers';

export const Home = () => {
    const [page,setPage] = useState(1);
    const [isLoading,setIsLoading] = useState(false)
    const [update,setUpdate] = useState(false)
    const [valueId,setValueId] = useState(null)

     const handlePage = (value) =>{
        setPage((page)=>page+value)
     }

const [users, setUsers] = useState([]);
useEffect(() => {
  fetchData(page);
}, [page]);


const fetchData = async (page) => {
  setIsLoading(true)
  await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=4`)
    .then((res) => res.json())
    .then((data) => {
      setIsLoading(false);
      setUsers(data)
    })
    .catch((err) => {
      console.log(err);
    });
};


const onDelete = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.status !== 200) {
        return;
      } else {
        setUsers(
          users.filter((user) => {
            return user.id !== id;
          })
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const onUpdate = (id) =>{
   setUpdate(true)
   setValueId(id)
}

useEffect(() => {
  window.scrollTo(0, 0);
}, [update]);


  return (
    <>
    <div className={style.HomeContainer}>
    <div className={style.HomeSubContainer2}>
     {update?<Updateusers setUpdate = {setUpdate} valueId = {valueId} users = {users} setUsers = {setUsers} />: <AddUser setUsers = {setUsers} />}
     </div>
    <div className={style.HomeSubContainer1}>
    <div className={style.heading}>LIST OF ALL USER</div>

     {isLoading ? <Skeleton /> :
    <div className={style.parent}>
      
    {users.map((el) =>(
        <div key={el.id} >
            <UsersList onUpdate={onUpdate} users = {users} setUsers = {setUsers} onDelete = {onDelete} {...el} />
        </div>
    ))}
    </div>
}
<Pagination page = {page} handlePage = {handlePage} />
     </div>
    
    </div>
    </>
  )
}
