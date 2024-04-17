import React from 'react'
import { Link } from 'react-router-dom'
import imges from '../Image/2.png'
import style from '../CSS/Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
    <div className={style.navbarlinks}>
    <Link to="/">
      <div style={{display:"flex",justifyContent:"start",alignItems:"center",marginTop:'18px'}}><img src={imges} alt="err" className={style.logo} />
      
      </div>
      </Link>
    </div>
    <div className={style.navbarlinks}>
      <Link to={'/'}>User's Management Dashboard</Link>
    </div>
  </nav>
  )
}
