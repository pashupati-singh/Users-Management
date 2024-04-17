import React from 'react'
import style from "../CSS/pagination.module.css"

export const Pagination = ({page,handlePage}) => {
const lastPage = Math.ceil(10/4)

const handlePagination =(value) =>{
  handlePage(value)
}
  return (
    <div className={style.Pagination}>
        <button disabled= {page === 1} onClick={()=>handlePagination(-1)}>{"<<"}</button>
        <button disabled>{page}</button>
        <button disabled = {page === lastPage} onClick={()=>handlePagination(1)}>{">>"}</button>
    </div>
  )
}
