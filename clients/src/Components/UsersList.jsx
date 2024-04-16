import React from 'react'
import {Link} from 'react-router-dom'
import image from "../Image/1.png"
import style from '../CSS/UserList.module.css'
import { Skeleton } from './Skeleton'
import { useSelector } from 'react-redux'

export const UsersList = ({_id,firstname,lastname,email,department,handleDelete}) => {
 
  return (
    <div className={style.container}>
        <div className={style.card}>
        <img src={image} alt="err" />
         <p>{firstname} {lastname}</p>
         <p>{email}</p>
         <p>Department: {department}</p>
        <div className={style.btnCon}>
        <Link to={`/update/${_id}`}><button>EDIT</button></Link>
         <button onClick={()=>handleDelete(_id)}>DELETE</button>
        </div>
        </div>
    </div>
  )
}
