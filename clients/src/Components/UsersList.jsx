import React from 'react'
import image from "../Image/1.png"
import style from '../CSS/UserList.module.css'

export const UsersList = ({id,name,email,company,onDelete,onUpdate}) => {
 
  return (
    <div className={style.container}>
        <div className={style.card}>
        <img src={image} alt="err" />
         <p>{name}</p>
         <p>{email}</p>
         <p>Department: {company.name}</p>
        <div className={style.btnCon}>
        <button onClick={()=>onUpdate(id)}>EDIT</button>
         <button onClick={()=>onDelete(id)}>DELETE</button>
        </div>
        </div>
    </div>
  )
}
