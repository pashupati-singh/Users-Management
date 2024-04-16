import React from 'react'
import { Link } from 'react-router-dom'
import imges from '../Image/2.png'
import style from '../CSS/Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
    <div className={style.navbarlinks}>
    <Link to="/"><div style={{display:"flex",justifyContent:"start",alignItems:"center",marginTop:'10px'}}><img src={imges} alt="err" width={'5%'} />
      User Management Dashboard</div></Link>
    </div>
    <div className={style.navbarlinks}>
      <Link to="/add">Add User</Link>
    </div>
  </nav>
  )
}
